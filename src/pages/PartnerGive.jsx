import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

const PROJECTS = {
  "general": { name: "General Partnership" },
  "land-acquisition": { name: "Land — 8 Acres" },
  "media-equipment": { name: "Media Infrastructure" },
  "bible-distribution": { name: "Bibles — 5,000 Annually (KSh 800 each)" },
  "merchandise": { name: "Merchandise & Publications" },
};

export default function PartnerGive() {
  const [params] = useSearchParams();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    project: params.get("project") || "general",
    type: params.get("type") || "once",
    amount: "",
    fullName: "",
    whatsapp: "",
    email: "",
    partnerId: "",
    method: "M-Pesa",
    reference: "",
  });

  useEffect(() => {
    if (params.get("project")) setForm(f => ({ ...f, project: params.get("project") }));
  }, [params]);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const input = { width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #ddd", fontSize: "1rem", fontFamily: "inherit", boxSizing: "border-box" };
  const label = { display: "block", fontWeight: 700, fontSize: "0.85rem", marginBottom: "6px", color: "#051224" };

  const amount = Number(form.amount) || 0;
  const bibles = form.project === "bible-distribution" ? Math.floor(amount / 800) : 0;

  // ⚠️ ADMIN: Replace these with your real Paybill / Till / Bank details before going live
  const PAY = {
    mpesaPaybill: "YOUR PAYBILL",
    mpesaAccount: "ANAZAO",
    mpesaTill: "YOUR TILL NUMBER",
    bankName: "YOUR BANK",
    bankAccount: "YOUR ACCOUNT NUMBER",
    bankBranch: "YOUR BRANCH",
    bankAccountName: "ANAZAO MINISTRIES",
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.whatsapp || !amount) return alert("Please fill Name, WhatsApp and Amount.");
    setStep(2);
    window.scrollTo(0, 0);
  };

  if (step === 2) {
    return (
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "100px 20px 80px", fontFamily: "Montserrat, sans-serif" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", textAlign: "center" }}>Thank You, {form.fullName}! 🙏</h1>
        <p style={{ textAlign: "center", color: "#666", lineHeight: 1.8 }}>Complete your gift of <b>KSh {amount.toLocaleString()}</b> to <b>{PROJECTS[form.project]?.name}</b> using the instructions below.</p>

        {bibles > 0 && (
          <div style={{ background: "#FFF8E1", border: "1px solid #F0D98C", borderRadius: "16px", padding: "18px", textAlign: "center", margin: "20px 0", fontWeight: 700 }}>
            📖 Your gift = approximately <span style={{ fontSize: "1.4rem", color: "#051224" }}>{bibles} Bibles</span> (at KSh 800 each)
          </div>
        )}

        {form.method === "M-Pesa" && (
          <div style={{ background: "#051224", color: "#fff", borderRadius: "20px", padding: "30px", margin: "20px 0" }}>
            <h3 style={{ color: "#D4AF37", marginTop: 0 }}>M-PESA INSTRUCTIONS</h3>
            <p style={{ lineHeight: 2 }}>1. Go to <b>M-Pesa → Lipa na M-Pesa → Pay Bill</b><br/>
            2. Business No: <b>{PAY.mpesaPaybill}</b><br/>
            3. Account No: <b>{form.partnerId ? form.partnerId : PAY.mpesaAccount + " - " + form.fullName}</b><br/>
            4. Amount: <b>KSh {amount.toLocaleString()}</b><br/>
            5. Enter M-Pesa PIN & Send</p>
            <p style={{ color: "#D9D9D9", fontSize: "0.9rem" }}>OR Send to Till: <b>{PAY.mpesaTill}</b></p>
          </div>
        )}

        {form.method === "Bank Transfer" && (
          <div style={{ background: "#051224", color: "#fff", borderRadius: "20px", padding: "30px", margin: "20px 0" }}>
            <h3 style={{ color: "#D4AF37", marginTop: 0 }}>BANK TRANSFER</h3>
            <p style={{ lineHeight: 2 }}>Bank: <b>{PAY.bankName}</b><br/>
            Account Name: <b>{PAY.bankAccountName}</b><br/>
            Account No: <b>{PAY.bankAccount}</b><br/>
            Branch: <b>{PAY.bankBranch}</b><br/>
            Reference: <b>{form.partnerId ? form.partnerId : form.fullName} - {PROJECTS[form.project]?.name}</b><br/>
            Amount: <b>KSh {amount.toLocaleString()}</b></p>
          </div>
        )}

        {form.method === "Card / International" && (
          <div style={{ background: "#051224", color: "#fff", borderRadius: "20px", padding: "30px", margin: "20px 0" }}>
            <h3 style={{ color: "#D4AF37", marginTop: 0 }}>CARD / INTERNATIONAL</h3>
            <p style={{ lineHeight: 1.9 }}>International giving via Card / PayPal link will be activated soon.<br/>For now, please use Bank Transfer or contact us on WhatsApp for a secure link.<br/>Amount: <b>KSh {amount.toLocaleString()}</b> ({PROJECTS[form.project]?.name})</p>
          </div>
        )}

        <div style={{ background: "#F8F8F8", borderRadius: "16px", padding: "22px" }}>
          <h3 style={{ marginTop: 0 }}>Step 2 — Confirm Your Gift (Important)</h3>
          <p style={{ color: "#666", lineHeight: 1.8 }}>After sending, send your M-Pesa code / Bank receipt on WhatsApp so admin can verify and record it. Only verified payments show in project progress.</p>
          <a href={`https://wa.me/254700000000?text=${encodeURIComponent(`Hello ANAZAO, I just gave KSh ${amount.toLocaleString()} to ${PROJECTS[form.project]?.name}. Name: ${form.fullName}. Partner ID: ${form.partnerId || "New Donor"}. M-Pesa Code: `)}`} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <button style={{ background: "#25D366", color: "#fff", border: "none", padding: "16px 28px", borderRadius: "50px", fontWeight: 800, cursor: "pointer", width: "100%", fontSize: "1rem" }}>Send Receipt on WhatsApp →</button>
          </a>
          <p style={{ textAlign: "center", color: "#888", fontSize: "0.85rem", marginTop: "10px" }}>⚠️ Replace 254700000000 with your real WhatsApp number in PartnerGive.jsx</p>
        </div>

        <Link to="/partner" style={{ textDecoration: "none" }}><button style={{ background: "transparent", border: "1px solid #ddd", padding: "14px 28px", borderRadius: "50px", fontWeight: 700, cursor: "pointer", width: "100%", marginTop: "20px" }}>← Back to Partner Page</button></Link>
      </div>
    );
  }

  return (
    <div style={{ background: "#F8F8F8", padding: "100px 20px 80px", fontFamily: "Montserrat, sans-serif" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", background: "#fff", borderRadius: "24px", padding: "clamp(24px, 5vw, 40px)", boxShadow: "0 15px 40px rgba(0,0,0,0.08)" }}>
        <p style={{ color: "#B9975B", letterSpacing: "4px", fontWeight: 800, fontSize: "0.8rem", textAlign: "center" }}>GIVE SECURELY</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", textAlign: "center", margin: "10px 0" }}>Give to the Vision</h1>
        <p style={{ textAlign: "center", color: "#666", lineHeight: 1.8 }}>Choose project, amount and method. You complete payment on your phone / bank — nothing is deducted automatically.</p>

        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "30px" }}>
          <div>
            <label style={label}>Choose Project *</label>
            <select style={input} value={form.project} onChange={e => update("project", e.target.value)}>
              {Object.entries(PROJECTS).map(([k, v]) => <option key={k} value={k}>{v.name}</option>)}
            </select>
          </div>

          <div>
            <label style={label}>Gift Type</label>
            <div style={{ display: "flex", gap: "10px" }}>
              {[{ v: "once", l: "Give Once" }, { v: "monthly", l: "Monthly Commitment" }].map(o => (
                <button key={o.v} type="button" onClick={() => update("type", o.v)} style={{ flex: 1, padding: "14px", borderRadius: "50px", border: form.type === o.v ? "2px solid #051224" : "1px solid #ddd", background: form.type === o.v ? "#051224" : "#fff", color: form.type === o.v ? "#fff" : "#333", fontWeight: 800, cursor: "pointer" }}>{o.l}</button>
              ))}
            </div>
          </div>

          <div>
            <label style={label}>Amount (KSh) *</label>
            <input style={input} type="number" min="1" value={form.amount} onChange={e => update("amount", e.target.value)} placeholder="e.g. 5000" required />
            {bibles > 0 && <p style={{ color: "#B9975B", fontWeight: 700, marginTop: "8px" }}>📖 = {bibles.toLocaleString()} Bibles (at KSh 800 each)</p>}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "10px" }}>
              {[1000, 5000, 10000, 25000].map(a => (
                <button key={a} type="button" onClick={() => update("amount", a)} style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid #ddd", background: Number(form.amount) === a ? "#FFF8E1" : "#fff", cursor: "pointer", fontWeight: 700 }}>KSh {a.toLocaleString()}</button>
              ))}
              <button type="button" onClick={() => update("project", "bible-distribution")} style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid #F0D98C", background: "#FFF8E1", cursor: "pointer", fontWeight: 700 }}>📖 KSh 800 = 1 Bible</button>
            </div>
          </div>

          <div>
            <label style={label}>Full Name *</label>
            <input style={input} value={form.fullName} onChange={e => update("fullName", e.target.value)} placeholder="Your full name" required />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={label}>WhatsApp *</label>
              <input style={input} value={form.whatsapp} onChange={e => update("whatsapp", e.target.value)} placeholder="+254..." required />
            </div>
            <div>
              <label style={label}>Email (Optional)</label>
              <input style={input} type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@email.com" />
            </div>
          </div>

          <div>
            <label style={label}>Partner ID (If you have one — Optional)</label>
            <input style={input} value={form.partnerId} onChange={e => update("partnerId", e.target.value)} placeholder="e.g. ANZ-2026-4821" />
            <p style={{ fontSize: "0.85rem", color: "#888", marginTop: "6px" }}>If you registered as a monthly partner, enter your ID so we link this gift to you.</p>
          </div>

          <div>
            <label style={label}>Payment Method *</label>
            <select style={input} value={form.method} onChange={e => update("method", e.target.value)}>
              <option>M-Pesa</option><option>Bank Transfer</option><option>Card / International</option>
            </select>
          </div>

          <button type="submit" style={{ background: "#051224", color: "#fff", border: "none", padding: "18px", borderRadius: "50px", fontWeight: 800, fontSize: "1.05rem", cursor: "pointer" }}>
            Continue to Payment Instructions →
          </button>
        </form>
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

const TIERS = {
  friend: { name: "FRIEND OF THE VISION", kes: 1000, usd: 10 },
  kingdom: { name: "KINGDOM PARTNER", kes: 5000, usd: 40 },
  vision: { name: "VISION BUILDER", kes: 10000, usd: 80 },
  pioneer: { name: "PIONEER PARTNER", kes: 25000, usd: 200 },
  legacy: { name: "LEGACY PARTNER", kes: 50000, usd: 400 },
  custom: { name: "CUSTOM PARTNERSHIP", kes: 0, usd: 0 },
};

export default function PartnerRegister() {
  const [params] = useSearchParams();
  const [done, setDone] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "Kenya",
    partnerType: "Individual",
    currency: params.get("currency") || "KES",
    tier: params.get("tier") || "friend",
    amount: "",
    paymentMethod: "M-Pesa",
    reminderDate: "1",
    notes: "",
    consent: false,
  });

  // Auto-fill amount when tier/currency changes
  useEffect(() => {
    const t = TIERS[form.tier];
    if (!t) return;
    if (form.tier !== "custom") {
      setForm(f => ({ ...f, amount: form.currency === "KES" ? t.kes : t.usd }));
    }
  }, [form.tier, form.currency]);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.consent) return alert("Please tick the WhatsApp consent box to continue.");
    if (!form.fullName || !form.email || !form.whatsapp || !form.amount) return alert("Please fill Name, Email, WhatsApp and Amount.");

    const partnerId = "ANZ-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
    const record = { ...form, partnerId, status: "Active", createdAt: new Date().toISOString(), paid: 0 };

    // Save locally for now - Step 7 will move this to Admin Dashboard / Database
    const all = JSON.parse(localStorage.getItem("anazao_partners") || "[]");
    all.push(record);
    localStorage.setItem("anazao_partners", JSON.stringify(all));

    setDone(record);
    window.scrollTo(0, 0);
  };

  // ✅ FIXED: Darker borders + dark text so nothing looks washed out
  const input = { width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #999", fontSize: "1rem", fontFamily: "inherit", boxSizing: "border-box", color: "#1A1A1A", background: "#fff" };
  const label = { display: "block", fontWeight: 700, fontSize: "0.85rem", marginBottom: "6px", color: "#051224" };

  if (done) {
    return (
      <div style={{ maxWidth: "650px", margin: "0 auto", padding: "100px 20px", textAlign: "center", fontFamily: "Montserrat, sans-serif" }}>
        <div style={{ fontSize: "4rem" }}>🎉</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem" }}>Welcome, {done.fullName}!</h1>
        <p style={{ color: "#666", lineHeight: 1.8 }}>You are now registered as a partner. This is a commitment — <b>no money has been deducted.</b></p>
        <div style={{ background: "#051224", color: "#fff", borderRadius: "20px", padding: "30px", margin: "25px 0", textAlign: "left" }}>
          <p style={{ color: "#D4AF37", letterSpacing: "3px", fontSize: "0.8rem", fontWeight: 800 }}>YOUR PARTNER ID</p>
          <p style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "2px", margin: "8px 0" }}>{done.partnerId}</p>
          <hr style={{ borderColor: "#333" }} />
          <p><b>Tier:</b> {TIERS[done.tier]?.name}</p>
          <p><b>Monthly Commitment:</b> {done.currency === "KES" ? `KSh ${Number(done.amount).toLocaleString()}` : `$${Number(done.amount).toLocaleString()}`} / month</p>
          <p><b>Reminder Date:</b> {done.reminderDate}th of every month</p>
          <p><b>Payment Method:</b> {done.paymentMethod}</p>
          <p><b>WhatsApp:</b> {done.whatsapp}</p>
        </div>
        <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: 1.8 }}>You will receive a gentle WhatsApp reminder on the <b>{done.reminderDate}th</b> of each month with a secure payment link. Save your Partner ID — you will need it for Bank Transfer and support.</p>
        <Link to="/partner"><button style={{ background: "#D4AF37", border: "none", padding: "16px 32px", borderRadius: "50px", fontWeight: 800, cursor: "pointer", marginTop: "15px" }}>Back to Partner Page →</button></Link>
        <p style={{ marginTop: "15px", color: "#888", fontSize: "0.85rem" }}>Screenshot this page for your records.</p>
      </div>
    );
  }

  return (
    <div style={{ background: "#F8F8F8", padding: "100px 20px 80px", fontFamily: "Montserrat, sans-serif" }}>
      <div style={{ maxWidth: "750px", margin: "0 auto", background: "#fff", borderRadius: "24px", padding: "clamp(24px, 5vw, 45px)", boxShadow: "0 15px 40px rgba(0,0,0,0.08)" }}>
        <p style={{ color: "#B9975B", letterSpacing: "4px", fontWeight: 800, fontSize: "0.8rem", textAlign: "center" }}>PARTNER REGISTRATION</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", textAlign: "center", margin: "10px 0" }}>Become a Monthly Partner</h1>
        <p style={{ textAlign: "center", color: "#666", lineHeight: 1.8 }}>Registration is a commitment, not a payment. Only confirmed payments are recorded as money received.</p>

        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "30px" }}>
          <div>
            <label style={label}>Full Name *</label>
            <input style={input} value={form.fullName} onChange={e => update("fullName", e.target.value)} placeholder="e.g. David Kamau" required />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={label}>Email Address *</label>
              <input style={input} type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@email.com" required />
            </div>
            <div>
              <label style={label}>WhatsApp Number (with country code) *</label>
              <input style={input} value={form.whatsapp} onChange={e => update("whatsapp", e.target.value)} placeholder="+254 712 345 678" required />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={label}>Country of Residence *</label>
              <select style={input} value={form.country} onChange={e => update("country", e.target.value)}>
                <option>Kenya</option><option>Uganda</option><option>Tanzania</option><option>Rwanda</option><option>South Africa</option><option>Nigeria</option><option>Ghana</option><option>United Kingdom</option><option>United States</option><option>Canada</option><option>Australia</option><option>Germany</option><option>United Arab Emirates</option><option>India</option><option>Other</option>
              </select>
            </div>
            <div>
              <label style={label}>Registering As</label>
              <select style={input} value={form.partnerType} onChange={e => update("partnerType", e.target.value)}>
                <option>Individual</option><option>Church</option><option>Organisation</option><option>Business</option><option>Ministry</option>
              </select>
            </div>
          </div>

          <div style={{ background: "#FFF8E1", border: "1px solid #F0D98C", borderRadius: "14px", padding: "18px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={label}>Partnership Tier</label>
                <select style={input} value={form.tier} onChange={e => update("tier", e.target.value)}>
                  {Object.entries(TIERS).map(([k, v]) => <option key={k} value={k}>{v.name}</option>)}
                </select>
              </div>
              <div>
                <label style={label}>Currency</label>
                <select style={input} value={form.currency} onChange={e => update("currency", e.target.value)}>
                  <option>KES</option><option>USD</option>
                </select>
              </div>
            </div>
            <div>
              <label style={label}>Monthly Contribution Amount * {form.currency === "KES" ? "(KSh)" : "(USD)"}</label>
              <input style={input} type="number" min="1" value={form.amount} onChange={e => update("amount", e.target.value)} placeholder={form.currency === "KES" ? "e.g. 1000" : "e.g. 10"} required />
              {form.tier === "custom" && <p style={{ fontSize: "0.85rem", color: "#555", marginTop: "6px" }}>Custom tier — enter any amount you wish to commit monthly.</p>}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={label}>Preferred Payment Method</label>
              <select style={input} value={form.paymentMethod} onChange={e => update("paymentMethod", e.target.value)}>
                <option>M-Pesa</option><option>Bank Transfer</option><option>Card / International</option>
              </select>
            </div>
            <div>
              <label style={label}>Preferred Monthly Reminder Date</label>
              <select style={input} value={form.reminderDate} onChange={e => update("reminderDate", e.target.value)}>
                {[1,2,3,4,5,6,7,8,9,10,15,20,25,28].map(d => <option key={d} value={d}>{d}th of every month</option>)}
              </select>
            </div>
          </div>

          {/* ✅ MODIFIED: Circled region - now high contrast */}
          <div>
            <label style={label}>Additional Information (Optional)</label>
            <textarea
              style={{ ...input, minHeight: "90px", resize: "vertical" }}
              value={form.notes}
              onChange={e => update("notes", e.target.value)}
              placeholder="Anything you would like us to know? Prayer request? Church name?"
            />
          </div>

          {/* ✅ MODIFIED: Was #F2F2F2 grey + faint text - now white box + dark border + dark text + big checkbox */}
          <label style={{ display: "flex", gap: "12px", alignItems: "flex-start", background: "#fff", border: "2px solid #051224", padding: "18px", borderRadius: "12px", cursor: "pointer", fontSize: "0.95rem", lineHeight: 1.7, color: "#1A1A1A" }}>
            <input
              type="checkbox"
              checked={form.consent}
              onChange={e => update("consent", e.target.checked)}
              required
              style={{ marginTop: "3px", width: "22px", height: "22px", flexShrink: 0, accentColor: "#051224", cursor: "pointer" }}
            />
            <span>
              <b style={{ color: "#051224" }}>I consent</b> to receive partnership-related WhatsApp reminders and updates. My contact info will only be used for partnership communication, reminders, receipts and ministry updates. I can unsubscribe at any time. *
            </span>
          </label>

          {/* ✅ MODIFIED: Button + note made bolder / darker */}
          <button type="submit" style={{ background: "#051224", color: "#fff", border: "none", padding: "18px", borderRadius: "50px", fontWeight: 800, fontSize: "1.1rem", cursor: "pointer", boxShadow: "0 6px 20px rgba(5,18,36,0.25)" }}>
            Complete Registration →
          </button>
          <p style={{ textAlign: "center", color: "#333", fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>No money will be taken now. You will get a payment link in your monthly reminder.</p>
        </form>
      </div>
    </div>
  );
}
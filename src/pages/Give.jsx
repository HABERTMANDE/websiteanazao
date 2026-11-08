import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { colors } from "../data/colors";

const categories = [
  { id: "missions", title: "MISSIONS & EVANGELISM", desc: "Gospel outreach, evangelistic missions, discipleship and advancement of the Christian faith." },
  { id: "youth", title: "YOUTH & COMMUNITY DEVELOPMENT", desc: "Equip young people, develop leadership, empower communities and create sustainable opportunities." },
  { id: "humanitarian", title: "HUMANITARIAN OUTREACH", desc: "Practical assistance and community interventions for people in need." },
  { id: "development", title: "DEVELOPMENT & INFRASTRUCTURE", desc: "Facilities, ministry resources, equipment and long-term institutional development." },
  { id: "general", title: "GENERAL MINISTRY SUPPORT", desc: "Operations, administration, ministry activities and strategic development." },
  { id: "special", title: "SPECIAL PROJECTS", desc: "Specific initiatives, events, campaigns and time-bound ministry assignments." },
];

const amounts = [500, 1000, 5000, 10000, 50000];

function Give() {
  const [searchParams] = useSearchParams();
  const initialCampaign = searchParams.get("campaign") || "general";
  const [campaign, setCampaign] = useState(initialCampaign);
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("mpesa");
  const [showDetails, setShowDetails] = useState(false);

  // --- M-PESA STK PUSH STATES ---
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Format 0719... -> 254719...
  const formatPhone = (p) => {
    let cleaned = (p || "").replace(/\D/g, "");
    if (cleaned.startsWith("0")) return "254" + cleaned.slice(1);
    if (cleaned.startsWith("254")) return cleaned;
    return cleaned;
  };

  const handleMpesaPush = async () => {
    if (!finalAmount || finalAmount < 1) return alert("Enter a valid amount");
    if (phone.length < 10) return alert("Enter a valid M-Pesa number e.g. 0719...");

    setLoading(true);
    setStatus("Sending M-Pesa prompt to " + phone + "... Check your phone");

    try {
      const res = await fetch("/api/mpesa/stk-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: formatPhone(phone),
          amount: finalAmount,
          accountReference: campaign,
          transactionDesc: `Anazao Give - ${selected.title}`
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("✅ Prompt sent! Enter your M-Pesa PIN on your phone to complete. You will get an SMS confirmation.");
      } else {
        setStatus("❌ Failed: " + (data.message || "Try again"));
      }
    } catch (e) {
      setStatus("❌ Network error. Check your backend is running.");
    }
    setLoading(false);
  };

  const cardStyle = {
    backgroundColor: "#111111",
    border: `1px solid ${colors.gold}`,
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  };

  const buttonStyle = {
    background: `linear-gradient(135deg, ${colors.gold}, #F4D03F)`,
    color: colors.black,
    border: "none",
    padding: "18px 45px",
    borderRadius: "50px",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: `0 8px 25px rgba(212,175,55,0.35)`,
    transition: "all 0.3s ease",
    letterSpacing: "1px",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #333",
    background: "#000",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  };

  const finalAmount = customAmount ? Number(customAmount) : amount;
  const selected = categories.find(c => c.id === campaign) || categories[4];

  return (
    <div style={{ backgroundColor: colors.black, color: colors.white, minHeight: "100vh", padding: "120px 20px 80px" }}>
      
      <div style={cardStyle}>
        <h1 style={{ color: colors.gold, fontSize: "4rem", marginBottom: "20px", marginTop: 0 }}>Give</h1>
        <p style={{ color: "#C5C5C5", lineHeight: "1.9", fontSize: "1.1rem", marginBottom: "30px" }}>
          Your generosity enables discipleship, leadership development,
          missions, media outreach, and transformational initiatives that
          impact generations and nations through truth.
        </p>
        <button
          style={buttonStyle}
          onMouseOver={(e) => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 12px 35px rgba(212,175,55,0.5)"; }}
          onMouseOut={(e) => { e.target.style.transform = "translateY(0px)"; e.target.style.boxShadow = "0 8px 25px rgba(212,175,55,0.35)"; }}
          onClick={() => document.getElementById("give-form")?.scrollIntoView({ behavior: "smooth" })}
        >
          GIVE NOW
        </button>
        <p style={{ marginTop: "30px", color: "#999", fontSize: "0.95rem", lineHeight: "1.7" }}>
          "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          <br />— 2 Corinthians 9:7
        </p>
      </div>

      <div style={{ maxWidth: "1100px", margin: "60px auto 0", textAlign: "center" }}>
        <p style={{ color: colors.gold, letterSpacing: "3px", fontWeight: "800", fontSize: "12px" }}>WHERE YOUR GIVING GOES</p>
        <h2 style={{ fontSize: "30px", margin: "10px 0 30px" }}>Choose An Area To Support</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "18px", textAlign: "left" }}>
          {categories.map((c) => (
            <div key={c.id} onClick={() => { setCampaign(c.id); document.getElementById("give-form")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{ background: "#111", border: campaign === c.id ? `2px solid ${colors.gold}` : "1px solid #222", borderRadius: "16px", padding: "22px", cursor: "pointer" }}>
              <h3 style={{ fontSize: "15px", color: colors.gold, margin: "0 0 10px", lineHeight: "1.4" }}>{c.title}</h3>
              <p style={{ color: "#C5C5C5", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{c.desc}</p>
              <p style={{ color: "#fff", fontSize: "13px", fontWeight: "700", marginTop: "14px" }}>{campaign === c.id ? "✓ SELECTED" : "Give to this →"}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="give-form" style={{ ...cardStyle, marginTop: "50px", textAlign: "left" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: colors.gold, fontSize: "26px", margin: "0 0 6px" }}>Give To: {selected.title}</h2>
          <p style={{ color: "#999", fontSize: "14px" }}>{selected.desc}</p>
        </div>

        <p style={{ color: "#fff", fontWeight: "700", margin: "28px 0 12px" }}>1. Select Amount (KES)</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {amounts.map((a) => (
            <button key={a} onClick={() => { setAmount(a); setCustomAmount(""); }}
              style={{ flex: "1", minWidth: "90px", padding: "13px", borderRadius: "12px", border: amount === a && !customAmount ? `2px solid ${colors.gold}` : "1px solid #333", background: amount === a && !customAmount ? colors.gold : "#000", color: amount === a && !customAmount ? "#000" : "#fff", fontWeight: "800", cursor: "pointer" }}>
              {a.toLocaleString()}
            </button>
          ))}
        </div>
        <input style={{ ...inputStyle, marginTop: "12px" }} placeholder="Or enter custom amount e.g. 2500" value={customAmount} onChange={(e) => setCustomAmount(e.target.value.replace(/[^0-9]/g, ""))} />

        <p style={{ color: "#fff", fontWeight: "700", margin: "24px 0 12px" }}>2. Your Details</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <input style={inputStyle} placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input style={inputStyle} placeholder="Phone / M-Pesa Number e.g. 0712..." value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <p style={{ color: "#fff", fontWeight: "700", margin: "24px 0 12px" }}>3. Payment Method</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => { setMethod("mpesa"); setShowDetails(false); setStatus(""); }} style={{ flex: 1, padding: "14px", borderRadius: "12px", border: method === "mpesa" ? `2px solid ${colors.gold}` : "1px solid #333", background: method === "mpesa" ? "#222" : "#000", color: "#fff", fontWeight: "700", cursor: "pointer" }}>M-PESA (STK Prompt)</button>
          <button onClick={() => { setMethod("bank"); setShowDetails(false); setStatus(""); }} style={{ flex: 1, padding: "14px", borderRadius: "12px", border: method === "bank" ? `2px solid ${colors.gold}` : "1px solid #333", background: method === "bank" ? "#222" : "#000", color: "#fff", fontWeight: "700", cursor: "pointer" }}>Bank Transfer</button>
        </div>

        {/* --- NEW: M-PESA STK BUTTON --- */}
        {method === "mpesa" ? (
          <>
            <button 
              onClick={handleMpesaPush} 
              disabled={loading}
              style={{ ...buttonStyle, width: "100%", marginTop: "28px", opacity: loading ? 0.6 : 1 }}
            >
              {loading ? "SENDING PROMPT..." : `GIVE KES ${finalAmount?.toLocaleString() || 0} VIA M-PESA →`}
            </button>
            {status && <p style={{ textAlign: "center", color: "#fff", marginTop: "14px", lineHeight: "1.6", background: "#000", border: `1px solid ${colors.gold}`, padding: "14px", borderRadius: "12px" }}>{status}</p>}
            <p style={{ textAlign: "center", color: "#888", fontSize: "12px", marginTop: "10px" }}>
              You will receive a prompt on {phone || "your phone"} to enter your M-Pesa PIN
            </p>
          </>
        ) : (
          <>
            {!showDetails ? (
              <button style={{ ...buttonStyle, width: "100%", marginTop: "28px" }} onClick={() => setShowDetails(true)}>
                CONTINUE TO GIVE KES {finalAmount?.toLocaleString() || 0} →
              </button>
            ) : (
              <div style={{ background: "#000", border: `1px dashed ${colors.gold}`, borderRadius: "14px", padding: "22px", marginTop: "22px", textAlign: "center" }}>
                <p style={{ color: colors.gold, fontWeight: "800", margin: "0 0 8px" }}>BANK TRANSFER</p>
                <p style={{ color: "#fff", lineHeight: "1.8" }}>Bank: <b>YOUR_BANK_NAME</b><br />Account Name: <b>YOUR_ACCOUNT_NAME</b><br />Account Number: <b>YOUR_ACCOUNT_NUMBER</b><br />Branch: <b>YOUR_BRANCH</b></p>
                <p style={{ color: "#888", fontSize: "13px" }}>Replace the YOUR_... placeholders with your real bank details in the code.</p>
                <p style={{ color: "#999", fontSize: "13px", marginTop: "14px" }}>After sending, please keep your confirmation SMS. Thank you {name ? `, ${name}` : ""}!</p>
                <button onClick={() => setShowDetails(false)} style={{ background: "transparent", color: "#999", border: "none", cursor: "pointer", textDecoration: "underline", marginTop: "8px" }}>← Back</button>
              </div>
            )}
          </>
        )}

        <p style={{ textAlign: "center", color: "#777", fontSize: "12.5px", marginTop: "20px", lineHeight: "1.6" }}>
          We are committed to responsible stewardship, transparency and accountability. Every gift is recorded and used for its intended purpose.
        </p>
      </div>
    </div>
  );
}

export default Give;
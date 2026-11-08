import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { colors } from "../data/colors";

// === FILL LOCALLY IN VS CODE ONLY ===
const TILL_NUMBER = "8192090"; // ✅ PUBLIC - OK to show
const DIRECT_MPESA_NUMBER = "YOUR_DIRECT_MPESA"; // ✅ OK to show - fill your Direct M-Pesa 07xx... here
const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER"; // ✅ OK to show - fill your Contact in 2547xxxxxxxx format
const BANK_ACCOUNT_LAST4 = "YOUR_LAST_4"; // ✅ ONLY last 4 shown
const BANK_ACCOUNT_FULL = "YOUR_FULL_ACCOUNT"; // 🔒 HIDDEN - only shown when user taps SHOW

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
  // ✅ CHANGED FOR NOW: Default is TILL, not STK. STK disabled until Safaricom enables 8192090
  const [method, setMethod] = useState("till");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState("");
  const [showFullAccount, setShowFullAccount] = useState(false);

  const formatPhone = (p) => {
    let cleaned = (p || "").replace(/\D/g, "");
    if (cleaned.startsWith("0")) return "254" + cleaned.slice(1);
    if (cleaned.startsWith("254")) return cleaned;
    return cleaned;
  };

  const copyText = async (text, label) => {
    try { await navigator.clipboard.writeText(text); setCopied(label + " copied!"); setTimeout(() => setCopied(""), 2000); }
    catch { setCopied("Copy manually: " + text); }
  };

  // ✅ CHANGED FOR NOW: STK disabled - show Till instructions instead of calling API
  const handleMpesaPush = async () => {
    setStatus("⏳ M-Pesa Prompt is coming soon. For now, please use M-PESA TILL 8192090 below - it works right now.");
    setMethod("till");
    document.getElementById("give-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const cardStyle = { backgroundColor: "#111111", border: `1px solid ${colors.gold}`, borderRadius: "20px", padding: "40px", maxWidth: "900px", margin: "0 auto", textAlign: "center" };
  const buttonStyle = { background: `linear-gradient(135deg, ${colors.gold}, #F4D03F)`, color: colors.black, border: "none", padding: "18px 45px", borderRadius: "50px", fontSize: "1rem", fontWeight: "700", cursor: "pointer", boxShadow: `0 8px 25px rgba(212,175,55,0.35)`, transition: "all 0.3s ease", letterSpacing: "1px" };
  const inputStyle = { width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #333", background: "#000", color: "#fff", fontSize: "15px", outline: "none", boxSizing: "border-box" };
  const methodBtn = (active) => ({ flex: 1, padding: "12px 8px", borderRadius: "12px", border: active ? `2px solid ${colors.gold}` : "1px solid #333", background: active ? "#222" : "#000", color: "#fff", fontWeight: "700", cursor: "pointer", fontSize: "13px" });
  // ✅ ADDED: Disabled style for STK button
  const methodBtnDisabled = { flex: 1, padding: "12px 8px", borderRadius: "12px", border: "1px solid #333", background: "#111", color: "#777", fontWeight: "700", cursor: "not-allowed", fontSize: "13px", opacity: 0.6 };
  const whatsappBtnStyle = { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#25D366", color: "#fff", border: "none", padding: "15px 28px", borderRadius: "50px", fontSize: "14px", fontWeight: "800", cursor: "pointer", textDecoration: "none", marginTop: "14px", width: "100%", boxSizing: "border-box" };

  const finalAmount = customAmount ? Number(customAmount) : amount;
  const selected = categories.find(c => c.id === campaign) || categories[4];

  const whatsappMessage = `Hello Anazao, I want to give KES ${finalAmount?.toLocaleString()} for ${selected.title}${name ? ` - My name is ${name}` : ""}. Please send me the bank account details. Thank you!`;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div style={{ backgroundColor: colors.black, color: colors.white, minHeight: "100vh", padding: "120px 20px 80px" }}>
      <div style={cardStyle}>
        <h1 style={{ color: colors.gold, fontSize: "4rem", marginBottom: "20px", marginTop: 0 }}>Give</h1>
        <p style={{ color: "#C5C5C5", lineHeight: "1.9", fontSize: "1.1rem", marginBottom: "30px" }}>Your generosity enables discipleship, leadership development, missions, media outreach, and transformational initiatives that impact generations and nations through truth.</p>
        <button style={buttonStyle} onClick={() => document.getElementById("give-form")?.scrollIntoView({ behavior: "smooth" })}>GIVE NOW</button>
        <p style={{ marginTop: "30px", color: "#999", fontSize: "0.95rem", lineHeight: "1.7" }}>"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."<br />— 2 Corinthians 9:7</p>
      </div>

      <div style={{ maxWidth: "1100px", margin: "60px auto 0", textAlign: "center" }}>
        <p style={{ color: colors.gold, letterSpacing: "3px", fontWeight: "800", fontSize: "12px" }}>WHERE YOUR GIVING GOES</p>
        <h2 style={{ fontSize: "30px", margin: "10px 0 30px" }}>Choose An Area To Support</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "18px", textAlign: "left" }}>
          {categories.map((c) => (
            <div key={c.id} onClick={() => { setCampaign(c.id); document.getElementById("give-form")?.scrollIntoView({ behavior: "smooth" }); }} style={{ background: "#111", border: campaign === c.id ? `2px solid ${colors.gold}` : "1px solid #222", borderRadius: "16px", padding: "22px", cursor: "pointer" }}>
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
          {/* ✅ ADDED: Temporary notice */}
          <p style={{ background: "#2a1e00", border: `1px solid ${colors.gold}`, color: "#FFD700", padding: "12px", borderRadius: "10px", fontSize: "13px", lineHeight: "1.6", marginTop: "14px" }}>
            ⏳ Automatic M-Pesa Prompt coming soon. For now, please use <b>M-Pesa Till 8192090</b> below — it works right now.
          </p>
        </div>

        <p style={{ color: "#fff", fontWeight: "700", margin: "28px 0 12px" }}>1. Select Amount (KES)</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {amounts.map((a) => (
            <button key={a} onClick={() => { setAmount(a); setCustomAmount(""); }} style={{ flex: "1", minWidth: "90px", padding: "13px", borderRadius: "12px", border: amount === a && !customAmount ? `2px solid ${colors.gold}` : "1px solid #333", background: amount === a && !customAmount ? colors.gold : "#000", color: amount === a && !customAmount ? "#000" : "#fff", fontWeight: "800", cursor: "pointer" }}>{a.toLocaleString()}</button>
          ))}
        </div>
        <input style={{ ...inputStyle, marginTop: "12px" }} placeholder="Or enter custom amount e.g. 2500" value={customAmount} onChange={(e) => setCustomAmount(e.target.value.replace(/[^0-9]/g, ""))} />

        <p style={{ color: "#fff", fontWeight: "700", margin: "24px 0 12px" }}>2. Your Details</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <input style={inputStyle} placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          {/* ✅ CHANGED: Phone no longer required for STK */}
          <input id="mpesa-phone-input" style={{ ...inputStyle }} placeholder="Your Phone Number (optional)" value={phone} onChange={(e) => { setPhone(e.target.value); setStatus(""); }} />
        </div>

        <p style={{ color: "#fff", fontWeight: "700", margin: "24px 0 12px" }}>3. Payment Method</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {/* ✅ CHANGED: STK button disabled, shows COMING SOON */}
          <button disabled title="Coming soon - Safaricom approval pending" style={methodBtnDisabled}>M-PESA PROMPT ⏳<br /><span style={{ fontSize: "10px" }}>COMING SOON</span></button>
          <button onClick={() => { setMethod("till"); setStatus(""); }} style={methodBtn(method === "till")}>M-PESA TILL ✅</button>
          <button onClick={() => { setMethod("direct"); setStatus(""); }} style={methodBtn(method === "direct")}>DIRECT M-PESA</button>
          <button onClick={() => { setMethod("bank"); setStatus(""); }} style={methodBtn(method === "bank")}>BANK</button>
        </div>

        {/* ✅ CHANGED: STK section now shows Coming Soon + Till button */}
        {method === "stk" && (
          <div style={{ background: "#000", border: `1px dashed ${colors.gold}`, borderRadius: "14px", padding: "22px", marginTop: "22px", textAlign: "center" }}>
            <p style={{ color: colors.gold, fontWeight: "800" }}>M-PESA PROMPT - COMING SOON ⏳</p>
            <p style={{ color: "#C5C5C5", fontSize: "14px", lineHeight: "1.6" }}>Automatic prompt is awaiting Safaricom approval for Till 8192090.<br />Please use Till method for now - it works instantly.</p>
            <button onClick={() => setMethod("till")} style={{ ...buttonStyle, padding: "12px 28px", fontSize: "13px", marginTop: "10px" }}>USE TILL 8192090 →</button>
          </div>
        )}

        {method === "till" && (
          <div style={{ background: "#000", border: `1px dashed ${colors.gold}`, borderRadius: "14px", padding: "22px", marginTop: "22px", textAlign: "center" }}>
            <p style={{ color: colors.gold, fontWeight: "800", margin: "0 0 8px" }}>M-PESA - BUY GOODS TILL</p>
            <p style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "2px", margin: "6px 0" }}>{TILL_NUMBER}</p>
            <p style={{ color: "#C5C5C5", fontSize: "14px", lineHeight: "1.6" }}>M-Pesa → Buy Goods → Enter Till <b>{TILL_NUMBER}</b><br />Amount: <b>KES {finalAmount?.toLocaleString()}</b><br />For: <b>{selected.title}</b></p>
            <div style={{ textAlign: "left", background: "#111", padding: "14px", borderRadius: "10px", marginTop: "12px", fontSize: "13px", lineHeight: "1.8", color: "#C5C5C5" }}>
              <b style={{ color: "#fff" }}>How to Give:</b><br />
              1. Go to M-PESA<br />
              2. Lipa na M-PESA<br />
              3. Buy Goods and Services<br />
              4. Enter Till: <b style={{ color: "#fff" }}>8192090</b><br />
              5. Enter Amount: <b style={{ color: "#fff" }}>KES {finalAmount?.toLocaleString()}</b><br />
              6. Enter PIN & Send
            </div>
            <button onClick={() => copyText(TILL_NUMBER, "Till")} style={{ ...buttonStyle, padding: "12px 28px", fontSize: "13px", marginTop: "14px" }}>COPY TILL NUMBER</button>
            {copied && <p style={{ color: colors.gold, fontSize: "13px", marginTop: "8px" }}>{copied}</p>}
            {status && <p style={{ color: "#fff", marginTop: "14px", lineHeight: "1.6", background: "#111", border: `1px solid ${colors.gold}`, padding: "14px", borderRadius: "12px" }}>{status}</p>}
          </div>
        )}

        {method === "direct" && (
          <div style={{ background: "#000", border: `1px dashed ${colors.gold}`, borderRadius: "14px", padding: "22px", marginTop: "22px", textAlign: "center" }}>
            <p style={{ color: colors.gold, fontWeight: "800", margin: "0 0 8px" }}>DIRECT M-PESA - SEND MONEY</p>
            <p style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "1px", margin: "6px 0" }}>{DIRECT_MPESA_NUMBER}</p>
            <p style={{ color: "#C5C5C5", fontSize: "14px", lineHeight: "1.6" }}>M-Pesa → Send Money → Enter <b>{DIRECT_MPESA_NUMBER}</b><br />Amount: <b>KES {finalAmount?.toLocaleString()}</b><br />For: <b>{selected.title}</b></p>
            <button onClick={() => copyText(DIRECT_MPESA_NUMBER, "Number")} style={{ ...buttonStyle, padding: "12px 28px", fontSize: "13px", marginTop: "10px" }}>COPY NUMBER</button>
            {copied && <p style={{ color: colors.gold, fontSize: "13px", marginTop: "8px" }}>{copied}</p>}
          </div>
        )}

        {method === "bank" && (
          <div style={{ background: "#000", border: `1px dashed ${colors.gold}`, borderRadius: "14px", padding: "22px", marginTop: "22px", textAlign: "center" }}>
            <p style={{ color: colors.gold, fontWeight: "800", margin: "0 0 8px" }}>BANK TRANSFER - KCB BANK KENYA</p>
            <p style={{ color: "#fff", lineHeight: "2" }}>Bank: <b>KCB Bank Kenya</b><br />Account Name: <b>HABERT MURUNGA</b><br />Branch: <b>Kencom Branch</b><br />Account Number: <b>{showFullAccount ? BANK_ACCOUNT_FULL : `**** ${BANK_ACCOUNT_LAST4}`}</b></p>
            <button onClick={() => setShowFullAccount(!showFullAccount)} style={{ background: "transparent", color: colors.gold, border: `1px solid ${colors.gold}`, padding: "10px 20px", borderRadius: "50px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>{showFullAccount ? "HIDE ACCOUNT NUMBER ↑" : "SHOW FULL ACCOUNT NUMBER ↓"}</button>
            <button onClick={() => copyText(BANK_ACCOUNT_FULL, "Account")} style={{ ...buttonStyle, padding: "12px 28px", fontSize: "13px", marginTop: "10px", marginLeft: "8px" }}>COPY ACCOUNT</button>
            <p style={{ color: "#999", fontSize: "13px", marginTop: "12px" }}>Use Reference: <b>{selected.title}</b> - Amount: <b>KES {finalAmount?.toLocaleString()}</b></p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={whatsappBtnStyle}>💬 REQUEST BANK DETAILS ON WHATSAPP</a>
            <p style={{ color: "#888", fontSize: "12px", marginTop: "10px", lineHeight: "1.5" }}>Tap to open WhatsApp — message is already written for you.<br />Contact via WhatsApp below.</p>
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "22px" }}>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontSize: "13px", fontWeight: "700", textDecoration: "none" }}>Need help giving? Chat on WhatsApp →</a>
        </div>
        <p style={{ textAlign: "center", color: "#777", fontSize: "12.5px", marginTop: "16px", lineHeight: "1.6" }}>We are committed to responsible stewardship, transparency and accountability. Every gift is recorded and used for its intended purpose.</p>
      </div>
    </div>
  );
}

export default Give;
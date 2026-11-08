import { useState } from "react";
import { Link } from "react-router-dom";

// ✅ ADMIN CAN EDIT THESE AMOUNTS HERE ONLY - NOT HARDCODED IN CARDS
const TIERS = [
  { id: "friend", name: "FRIEND OF THE VISION", kes: 1000, usd: 10, desc: "Stand with us in prayer and consistent monthly support as we lay foundations." },
  { id: "kingdom", name: "KINGDOM PARTNER", kes: 5000, usd: 40, desc: "Fuel discipleship, leadership training and weekly ministry activities." },
  { id: "vision", name: "VISION BUILDER", kes: 10000, usd: 80, desc: "Help build the physical and media structures that carry the vision." },
  { id: "pioneer", name: "PIONEER PARTNER", kes: 25000, usd: 200, desc: "Pioneer new territories, missions and regional transformation." },
  { id: "legacy", name: "LEGACY PARTNER", kes: 50000, usd: 400, desc: "Leave a lasting foundation for generations to come." },
  { id: "custom", name: "CUSTOM PARTNERSHIP", kes: 0, usd: 0, desc: "Choose your own monthly amount outside the listed tiers." },
];

export default function Partner() {
  const [currency, setCurrency] = useState("KES");

  return (
    <div style={{ background: "#fff", fontFamily: "Montserrat, sans-serif", color: "#1A1A1A" }}>
      
      {/* ===== HERO ===== */}
      <div style={{ background: "#051224", color: "#fff", padding: "100px 20px 70px", textAlign: "center" }}>
        <p style={{ color: "#D4AF37", letterSpacing: "5px", fontWeight: 800, fontSize: "0.85rem" }}>PARTNER WITH US</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 4.2rem)", lineHeight: 1.1, margin: "15px 0" }}>
          Become a Partner<br/>in the Vision
        </h1>
        <p style={{ maxWidth: "700px", margin: "0 auto", lineHeight: 1.9, color: "#D9D9D9", fontSize: "1.05rem" }}>
          Together, we can establish lasting foundations, advance the Gospel and impact generations.
          We welcome individuals, churches, organisations, businesses and international supporters who want to participate through consistent financial partnership.
        </p>

        {/* 2 BIG BUTTONS */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginTop: "35px" }}>
          <a href="#monthly" style={{ textDecoration: "none" }}>
            <button style={{ background: "#D4AF37", color: "#051224", border: "none", padding: "18px 36px", borderRadius: "50px", fontWeight: 800, fontSize: "1rem", cursor: "pointer" }}>
              BECOME A MONTHLY PARTNER ↓
            </button>
          </a>
          <a href="#projects" style={{ textDecoration: "none" }}>
            <button style={{ background: "transparent", color: "#fff", border: "2px solid #fff", padding: "16px 34px", borderRadius: "50px", fontWeight: 700, fontSize: "1rem", cursor: "pointer" }}>
              SUPPORT A VISION PROJECT ↓
            </button>
          </a>
        </div>
      </div>

      {/* ===== MONTHLY TIERS ===== */}
      <div id="monthly" style={{ maxWidth: "1200px", margin: "0 auto", padding: "70px 20px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <p style={{ color: "#B9975B", letterSpacing: "4px", fontWeight: 800, fontSize: "0.8rem" }}>MONTHLY PARTNERSHIP PROGRAMME</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", margin: "10px 0" }}>Choose Your Partnership</h2>
          <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Choose a tier, register your details and commit to contributing that amount every month. You will receive a gentle WhatsApp reminder — money is never deducted automatically.
          </p>

          {/* CURRENCY TOGGLE */}
          <div style={{ marginTop: "25px", display: "inline-flex", background: "#F2F2F2", borderRadius: "50px", padding: "5px" }}>
            {["KES", "USD"].map(c => (
              <button key={c} onClick={() => setCurrency(c)} style={{ border: "none", padding: "10px 28px", borderRadius: "50px", cursor: "pointer", fontWeight: 800, background: currency === c ? "#051224" : "transparent", color: currency === c ? "#fff" : "#333" }}>
                {c === "KES" ? "KSh (KES)" : "$ (USD)"}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "22px" }}>
          {TIERS.map((t, i) => {
            const amount = currency === "KES" ? t.kes : t.usd;
            const isFeatured = t.id === "vision";
            return (
              <div key={t.id} style={{ background: isFeatured ? "#051224" : "#fff", color: isFeatured ? "#fff" : "#1A1A1A", border: isFeatured ? "2px solid #D4AF37" : "1px solid #E8E8E8", borderRadius: "20px", padding: "32px 26px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", position: "relative" }}>
                {isFeatured && <span style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#D4AF37", color: "#051224", padding: "5px 14px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 800 }}>MOST POPULAR</span>}
                <p style={{ letterSpacing: "2px", fontWeight: 800, fontSize: "0.85rem", color: isFeatured ? "#D4AF37" : "#051224" }}>{t.name}</p>
                <div style={{ margin: "18px 0" }}>
                  {t.id === "custom" ? (
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 700 }}>Your Choice</span>
                  ) : (
                    <>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 700 }}>{currency === "KES" ? `KSh ${amount.toLocaleString()}` : `$${amount.toLocaleString()}`}</span>
                      <span style={{ display: "block", color: "#888", fontSize: "0.9rem", marginTop: "4px" }}>/ month</span>
                    </>
                  )}
                </div>
                <p style={{ lineHeight: 1.8, color: isFeatured ? "#D9D9D9" : "#666", minHeight: "75px" }}>{t.desc}</p>
                <Link to={`/partner/register?tier=${t.id}&currency=${currency}`} style={{ textDecoration: "none" }}>
                  <button style={{ width: "100%", marginTop: "20px", padding: "15px", borderRadius: "50px", border: "none", cursor: "pointer", fontWeight: 800, background: isFeatured ? "#D4AF37" : "#051224", color: isFeatured ? "#051224" : "#fff" }}>
                    Become a Partner →
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: "center", color: "#888", fontSize: "0.9rem", marginTop: "25px" }}>
          ℹ️ Registration is a commitment, not a payment. Only confirmed payments are recorded as money received.
        </p>
      </div>

      {/* ===== PROJECTS PLACEHOLDER - Step 3 will fill this ===== */}
      <div id="projects" style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px 80px", textAlign: "center" }}>
        <p style={{ color: "#B9975B", letterSpacing: "4px", fontWeight: 800, fontSize: "0.8rem" }}>BUILDING THE VISION TOGETHER</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", margin: "10px 0" }}>Where Partnership Is Needed</h2>
        <p style={{ color: "#666" }}>Project cards coming in Step 3 — Land, Media, Bibles, Merchandise.</p>
        <div style={{ background: "#FFF8E1", border: "1px dashed #D4AF37", borderRadius: "16px", padding: "30px", marginTop: "20px" }}>
          ✅ Step 2 is working — Tiers + Currency Toggle live. Next: Registration Form.
        </div>
      </div>

    </div>
  );
}
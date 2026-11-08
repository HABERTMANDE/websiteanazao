import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  const [partners, setPartners] = useState([]);
  const [search, setSearch] = useState("");
  const [filterTier, setFilterTier] = useState("All");
  const [isAdmin, setIsAdmin] = useState(false);
  const [pin, setPin] = useState("");

  // ⚠️ ADMIN: Change this PIN before going live
  const ADMIN_PIN = "1234";

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("anazao_partners") || "[]");
    setPartners(saved);
  }, []);

  const saveAll = (list) => {
    setPartners(list);
    localStorage.setItem("anazao_partners", JSON.stringify(list));
  };

  const deletePartner = (id) => {
    if (!confirm("Delete this partner? This cannot be undone.")) return;
    saveAll(partners.filter(p => p.partnerId !== id));
  };

  const clearAll = () => {
    if (!confirm("Delete ALL partners? This cannot be undone.")) return;
    saveAll([]);
  };

  const markPaid = (id) => {
    const amount = prompt("How much did they pay? Enter amount in KSh (e.g. 5000)");
    if (!amount) return;
    const updated = partners.map(p => p.partnerId === id ? { ...p, paid: (Number(p.paid) || 0) + Number(amount) } : p);
    saveAll(updated);
  };

  const exportCSV = () => {
    if (partners.length === 0) return alert("No partners to export.");
    const header = "Partner ID,Full Name,Email,WhatsApp,Country,Type,Tier,Currency,Amount,Payment Method,Reminder Date,Paid,Created At,Notes";
    const rows = partners.map(p => [
      p.partnerId, `"${p.fullName}"`, p.email, p.whatsapp, p.country, p.partnerType, p.tier, p.currency, p.amount, p.paymentMethod, p.reminderDate, p.paid || 0, p.createdAt, `"${(p.notes || "").replace(/"/g, "")}"`
    ].join(","));
    const blob = new Blob([[header, ...rows].join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "anazao-partners.csv"; a.click();
  };

  // PIN Gate
  if (!isAdmin) {
    return (
      <div style={{ maxWidth: "450px", margin: "0 auto", padding: "120px 20px", fontFamily: "Montserrat, sans-serif", textAlign: "center" }}>
        <p style={{ color: "#B9975B", letterSpacing: "4px", fontWeight: 800, fontSize: "0.8rem" }}>ANAZAO ADMIN</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem" }}>Admin Dashboard</h1>
        <p style={{ color: "#666" }}>Enter Admin PIN to view partners.<br/>Default PIN is <b>1234</b> — change it in Admin.jsx</p>
        <input type="password" value={pin} onChange={e => setPin(e.target.value)} placeholder="Enter PIN" style={{ width: "100%", padding: "16px", borderRadius: "12px", border: "1px solid #999", fontSize: "1.2rem", textAlign: "center", marginTop: "20px", boxSizing: "border-box" }} />
        <button onClick={() => pin === ADMIN_PIN ? setIsAdmin(true) : alert("Wrong PIN")} style={{ width: "100%", background: "#051224", color: "#fff", border: "none", padding: "16px", borderRadius: "50px", fontWeight: 800, marginTop: "15px", cursor: "pointer", fontSize: "1rem" }}>Enter Dashboard →</button>
        <Link to="/partner"><p style={{ marginTop: "15px", color: "#888" }}>← Back to Partner Page</p></Link>
        <p style={{ background: "#FFF8E1", padding: "12px", borderRadius: "10px", fontSize: "0.85rem", color: "#555", marginTop: "20px" }}>⚠️ This dashboard only shows partners registered on THIS browser. For real multi-device storage, we need Google Sheets next.</p>
      </div>
    );
  }

  const filtered = partners.filter(p => {
    const matchesSearch = (p.fullName + p.whatsapp + p.email + p.partnerId).toLowerCase().includes(search.toLowerCase());
    const matchesTier = filterTier === "All" || p.tier === filterTier;
    return matchesSearch && matchesTier;
  });

  const totalExpected = partners.reduce((s, p) => s + Number(p.amount || 0), 0);
  const totalPaid = partners.reduce((s, p) => s + Number(p.paid || 0), 0);
  const kesPartners = partners.filter(p => p.currency === "KES");

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", background: "#F8F8F8", minHeight: "100vh", padding: "100px 20px 80px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <div>
            <p style={{ color: "#B9975B", letterSpacing: "4px", fontWeight: 800, fontSize: "0.8rem", margin: 0 }}>ANAZAO ADMIN</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", margin: "5px 0" }}>Partner Dashboard</h1>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button onClick={exportCSV} style={{ background: "#D4AF37", border: "none", padding: "12px 20px", borderRadius: "50px", fontWeight: 800, cursor: "pointer" }}>⬇ Export CSV</button>
            <button onClick={() => setIsAdmin(false)} style={{ background: "#fff", border: "1px solid #ddd", padding: "12px 20px", borderRadius: "50px", fontWeight: 700, cursor: "pointer" }}>Lock 🔒</button>
          </div>
        </div>

        {/* STATS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", margin: "25px 0" }}>
          {[
            { label: "Total Partners", value: partners.length },
            { label: "Expected / Month (KES)", value: `KSh ${totalExpected.toLocaleString()}` },
            { label: "Total Recorded Paid", value: `KSh ${totalPaid.toLocaleString()}` },
            { label: "KES Partners", value: kesPartners.length },
          ].map(s => (
            <div key={s.label} style={{ background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 5px 20px rgba(0,0,0,0.05)" }}>
              <p style={{ color: "#888", fontSize: "0.85rem", margin: "0 0 5px", fontWeight: 700 }}>{s.label}</p>
              <p style={{ fontSize: "1.6rem", fontWeight: 800, margin: 0 }}>{s.value}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#FFF8E1", border: "1px solid #F0D98C", borderRadius: "12px", padding: "14px 16px", fontSize: "0.9rem", color: "#555", marginBottom: "20px" }}>
          ⚠️ <b>Local Only:</b> This shows partners saved in THIS browser only. If someone registers on their phone, you won't see them here until we connect Google Sheets. Test: Register as Habert on this laptop → he should appear below.
        </div>

        {/* SEARCH + FILTER */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, phone, email, Partner ID..." style={{ flex: "2 1 250px", padding: "14px", borderRadius: "12px", border: "1px solid #999", fontSize: "1rem" }} />
          <select value={filterTier} onChange={e => setFilterTier(e.target.value)} style={{ flex: "1 1 150px", padding: "14px", borderRadius: "12px", border: "1px solid #999" }}>
            <option value="All">All Tiers</option>
            <option value="friend">Friend</option><option value="kingdom">Kingdom</option><option value="vision">Vision Builder</option><option value="pioneer">Pioneer</option><option value="legacy">Legacy</option><option value="custom">Custom</option>
          </select>
          <button onClick={clearAll} style={{ background: "#fff", color: "#C00", border: "1px solid #F5C6C6", padding: "14px 20px", borderRadius: "12px", fontWeight: 700, cursor: "pointer" }}>Clear All</button>
        </div>

        {filtered.length === 0 ? (
          <div style={{ background: "#fff", borderRadius: "16px", padding: "50px 20px", textAlign: "center" }}>
            <p style={{ fontSize: "3rem", margin: 0 }}>📭</p>
            <h3>No Partners Found</h3>
            <p style={{ color: "#666" }}>No one has registered on THIS browser yet.<br/>Go to <Link to="/partner/register">/partner/register</Link> and test a registration, then come back here.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {filtered.map(p => (
              <div key={p.partnerId} style={{ background: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 5px 20px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{p.fullName} <span style={{ background: "#051224", color: "#fff", fontSize: "0.75rem", padding: "4px 10px", borderRadius: "20px", marginLeft: "8px" }}>{p.partnerId}</span></p>
                    <p style={{ color: "#666", margin: "8px 0 0", lineHeight: 1.7, fontSize: "0.95rem" }}>
                      📱 {p.whatsapp} • ✉️ {p.email}<br/>
                      🌍 {p.country} • {p.partnerType} • Tier: <b>{p.tier}</b><br/>
                      💰 {p.currency === "KES" ? `KSh ${Number(p.amount).toLocaleString()}` : `$${Number(p.amount).toLocaleString()}`} / month • {p.paymentMethod} • Reminder: {p.reminderDate}th<br/>
                      ✅ Paid Recorded: <b>KSh {Number(p.paid || 0).toLocaleString()}</b> • Joined: {new Date(p.createdAt).toLocaleDateString()}
                      {p.notes ? <><br/>📝 {p.notes}</> : null}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <a href={`https://wa.me/${String(p.whatsapp).replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${p.fullName}, this is ANAZAO. Gentle reminder: Your monthly partnership of ${p.currency === "KES" ? `KSh ${Number(p.amount).toLocaleString()}` : `$${Number(p.amount).toLocaleString()}`} is due. Your Partner ID: ${p.partnerId}. Thank you!`)}`} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                      <button style={{ background: "#25D366", color: "#fff", border: "none", padding: "10px 18px", borderRadius: "50px", fontWeight: 800, cursor: "pointer", width: "100%" }}>WhatsApp Reminder →</button>
                    </a>
                    <button onClick={() => markPaid(p.partnerId)} style={{ background: "#051224", color: "#fff", border: "none", padding: "10px 18px", borderRadius: "50px", fontWeight: 700, cursor: "pointer" }}>+ Record Payment</button>
                    <button onClick={() => deletePartner(p.partnerId)} style={{ background: "#fff", color: "#C00", border: "1px solid #F5C6C6", padding: "10px 18px", borderRadius: "50px", fontWeight: 700, cursor: "pointer" }}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
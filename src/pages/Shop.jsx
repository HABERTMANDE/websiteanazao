export default function Shop() {
  const whatsapp = "254700000000"; // <-- PUT YOUR REAL NUMBER HERE AGAIN

  const products = [
    { name: "ANAZAO T-Shirt", desc: "Black premium tee • Gold & White logo • Unisex", price: "KSh 1,000", tag: "BEST SELLER", img: "/merch/tee.jpg" },
    { name: "ANAZAO Tee + Cap Set", desc: "T-Shirt + Cap • Perfect combo", price: "KSh 1,500", tag: "COMBO", img: "/merch/teecap.jpg" },
    { name: "ANAZAO Cap", desc: "Adjustable black cap • Embroidered logo", price: "KSh 500", tag: "NEW", img: "/merch/poster.jpg" },
    { name: "ANAZAO Tracksuit - Eagle Black", desc: "Hoodie + Joggers • Black / Gold Eagle • John 17:21", price: "KSh 4,500", tag: "BEST SELLER", img: "/merch/eagle-set-black.jpg" },
    { name: "ANAZAO Tracksuit - Black", desc: "Hoodie + Joggers • Black / Gold", price: "KSh 4,500", tag: "NEW", img: "/merch/pair.jpg" },
    { name: "ANAZAO Tracksuit - Navy", desc: "Hoodie + Joggers • Navy / Gold", price: "KSh 4,500", tag: "NEW", img: "/merch/pair-navy.jpg" },
    { name: "ANAZAO Tracksuit - White", desc: "Hoodie + Joggers • White / Gold", price: "KSh 4,500", tag: "LIMITED", img: "/merch/pair-white.jpg" },
    { name: "ANAZAO Bomber / Varsity Jacket", desc: "Black, Navy & Maroon • Leather Sleeves", price: "KSh 5,500", tag: "PREMIUM", img: "/merch/bomber.jpg" },
    { name: "ANAZAO Mug + Flask Set", desc: "Black & Gold • The Family of Grace", price: "KSh 2,500", tag: "GIFT SET", img: "/merch/mug-and-flask.jpg" },
    { name: "ANAZAO Collection", desc: "T-Shirts, Sweatshirts & Hoodies • 4 Colours", price: "From KSh 1,000", tag: "4 COLOURS", img: "/merch/slide-a.jpg" },
    { name: "ANAZAO Collection - Slide 2", desc: "More colours & styles • Full collection", price: "From KSh 1,000", tag: "COLLECTION", img: "/merch/slide-b.jpg" },
  ];

  return (
    <section id="merch" style={{ background: "#0a0a0a", padding: "80px 20px", color: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "40px" }}>
        <p style={{ color: "#d4af37", letterSpacing: "4px", textAlign: "center", fontWeight: "700", fontSize: "13px" }}>ANAZAO GLOBAL • OFFICIAL STORE</p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(32px, 6vw, 56px)", fontWeight: "900", lineHeight: "1.05", margin: "12px 0 8px" }}>
          WEAR THE <span style={{ color: "#d4af37" }}>MOVEMENT</span>
        </h2>
        <p style={{ textAlign: "center", opacity: 0.75, maxWidth: "600px", margin: "0 auto 40px", fontSize: "16px" }}>
          Black & Gold. Family of Grace. John 17:21 — That we may be One. Order on WhatsApp, no login, no password needed.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "22px" }}>
          {products.map((p) => (
            <div key={p.name} style={{ background: "#141414", border: "1px solid #2a2a2a", borderRadius: "20px", overflow: "hidden" }}>
              <div style={{ position: "relative" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "340px", objectFit: "cover", display: "block" }} />
                <span style={{ position: "absolute", top: "14px", left: "14px", background: "#d4af37", color: "#000", fontSize: "11px", fontWeight: "800", padding: "6px 12px", borderRadius: "999px", letterSpacing: "1px" }}>{p.tag}</span>
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "19px", fontWeight: "800", margin: "0 0 6px", lineHeight: "1.2" }}>{p.name}</h3>
                <p style={{ opacity: 0.7, fontSize: "14px", margin: "0 0 16px" }}>{p.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ color: "#d4af37", fontSize: "22px", fontWeight: "900" }}>{p.price}</span>
                  <a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hi ANAZAO! I want to order: ${p.name} - ${p.price}`)}`} target="_blank" rel="noreferrer" style={{ background: "#d4af37", color: "#000", padding: "11px 18px", borderRadius: "999px", fontWeight: "800", fontSize: "14px", textDecoration: "none" }}>Order →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: "36px", opacity: 0.6, fontSize: "14px" }}>Sizes: S - 3XL • Delivery countrywide • Pay on M-Pesa</p>
      </div>
    </section>
  );
}
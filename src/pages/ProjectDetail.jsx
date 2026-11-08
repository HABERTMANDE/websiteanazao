import { Link, useParams } from "react-router-dom";

const PROJECTS = {
  "land-acquisition": {
    title: "SECURING THE FOUNDATION — 8 ACRES OF LAND",
    desc: "Eight acres to establish a lasting foundation for the ministry's vision, activities and future development.",
    long: "This land will be the home of the vision — a place for discipleship, leadership training, gatherings, and community transformation. Owning the land secures the future and removes the cost and uncertainty of renting.",
    target: 12000000, raised: 0,
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    bullets: ["Permanent home for ministry activities", "Space for training, events & gatherings", "Foundation for future building projects", "Legacy for generations"],
  },
  "media-equipment": {
    title: "ADVANCING THE MESSAGE — MEDIA INFRASTRUCTURE",
    desc: "Media and communication equipment to broadcast teachings, document ministry and extend reach through digital platforms.",
    long: "Good media carries the message beyond the room. Cameras, sound, lighting and editing tools will allow teachings, testimonies and events to reach people across Kenya and beyond.",
    target: 2000000, raised: 0,
    img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=1200&q=80",
    bullets: ["Cameras, sound & lighting", "Live streaming & recording", "Editing & content creation", "Digital outreach & social media"],
  },
  "bible-distribution": {
    title: "PUTTING THE WORD INTO HANDS — 5,000 BIBLES ANNUALLY",
    desc: "Acquire and distribute 5,000 Bibles every year. Each Bible costs KSh 800.",
    long: "5,000 Bibles every year for evangelism, discipleship, outreach and spiritual growth. KSh 800 puts one Bible in one person's hands. KSh 8,000 puts 10 Bibles in a community.",
    target: 4000000, raised: 0, biblesTarget: 5000, biblesGiven: 0, bibleCost: 800,
    img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200&q=80",
    bullets: ["5,000 Bibles per year", "KSh 800 = 1 Bible", "KSh 8,000 = 10 Bibles", "Evangelism, discipleship & outreach"],
    bibleCalc: true,
  },
  "merchandise": {
    title: "CARRYING THE MESSAGE — MERCHANDISE & PUBLICATIONS",
    desc: "Merchandise and publications to communicate identity, strengthen engagement and extend the message.",
    long: "T-shirts, hoodies, books and publications that carry the message, build identity and fund the vision. Merchandise lets people wear and share what they believe.",
    target: 2400000, raised: 0,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80",
    bullets: ["T-shirts, hoodies & apparel", "Books & publications", "Identity & engagement", "Message that travels"],
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = PROJECTS[slug];

  if (!p) {
    return (
      <div style={{ padding: "120px 20px", textAlign: "center", fontFamily: "Montserrat, sans-serif" }}>
        <h1>Project Not Found</h1>
        <Link to="/partner"><button style={{ background: "#051224", color: "#fff", border: "none", padding: "14px 28px", borderRadius: "50px", fontWeight: 800, cursor: "pointer" }}>← Back to Partner Page</button></Link>
      </div>
    );
  }

  const pct = p.target > 0 ? Math.round((p.raised / p.target) * 100) : 0;
  const remaining = p.target - p.raised;

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", background: "#fff", color: "#1A1A1A" }}>
      <img src={p.img} alt={p.title} style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }} />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px 80px" }}>
        <Link to="/partner" style={{ color: "#B9975B", fontWeight: 700, textDecoration: "none" }}>← All Projects</Link>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", lineHeight: 1.2, margin: "15px 0" }}>{p.title}</h1>
        <p style={{ color: "#666", lineHeight: 1.9, fontSize: "1.05rem" }}>{p.long}</p>

        {p.bibleCalc && (
          <div style={{ background: "#FFF8E1", border: "1px solid #F0D98C", borderRadius: "16px", padding: "20px", margin: "25px 0" }}>
            <p style={{ fontWeight: 800, margin: "0 0 10px" }}>📖 Bible Calculator — See Your Impact</p>
            <p style={{ margin: "6px 0" }}>KSh 800 = <b>1 Bible</b></p>
            <p style={{ margin: "6px 0" }}>KSh 8,000 = <b>10 Bibles</b></p>
            <p style={{ margin: "6px 0" }}>KSh 80,000 = <b>100 Bibles</b></p>
            <p style={{ margin: "6px 0" }}>KSh 400,000 = <b>500 Bibles</b></p>
            <p style={{ margin: "6px 0 0", color: "#666", fontSize: "0.9rem" }}>Annual Goal: {p.biblesTarget.toLocaleString()} Bibles • {(p.biblesGiven || 0).toLocaleString()} given • {(p.biblesTarget - (p.biblesGiven || 0)).toLocaleString()} remaining</p>
          </div>
        )}

        <div style={{ background: "#F8F8F8", borderRadius: "16px", padding: "24px", margin: "25px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 800, flexWrap: "wrap", gap: "8px" }}>
            <span>Raised: KSh {p.raised.toLocaleString()}</span>
            <span style={{ color: "#B9975B" }}>Target: KSh {p.target.toLocaleString()}</span>
          </div>
          <div style={{ background: "#E5E5E5", height: "12px", borderRadius: "20px", overflow: "hidden", margin: "12px 0" }}>
            <div style={{ width: `${pct}%`, background: "#D4AF37", height: "100%" }} />
          </div>
          <p style={{ color: "#666", margin: 0 }}>{pct}% funded • Remaining: <b>KSh {remaining.toLocaleString()}</b></p>
        </div>

        <h3>Why This Matters</h3>
        <ul style={{ lineHeight: 2, color: "#444" }}>
          {p.bullets.map(b => <li key={b}>{b}</li>)}
        </ul>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "30px" }}>
          <Link to={`/partner/give?project=${slug}&type=once`} style={{ textDecoration: "none" }}>
            <button style={{ background: "#D4AF37", color: "#051224", border: "none", padding: "18px 34px", borderRadius: "50px", fontWeight: 800, cursor: "pointer", fontSize: "1rem" }}>Give Once to This Project →</button>
          </Link>
          <Link to={`/partner/register?project=${slug}`} style={{ textDecoration: "none" }}>
            <button style={{ background: "#051224", color: "#fff", border: "none", padding: "18px 34px", borderRadius: "50px", fontWeight: 800, cursor: "pointer", fontSize: "1rem" }}>Become Monthly Partner →</button>
          </Link>
        </div>

        <p style={{ color: "#888", fontSize: "0.9rem", marginTop: "20px" }}>You will be taken to a secure giving form. No money is deducted until you confirm payment.</p>
      </div>
    </div>
  );
}
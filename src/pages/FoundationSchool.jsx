import React, { useState, useEffect } from "react";

const GOLD = "#D4AF37";
const GOLD_LIGHT = "#F5D67B";
const RED = "#C1272D";

const courses = [
  {
    num: "01",
    title: "NEW BIRTH",
    subtitle: "The Foundation of Christian Identity",
    theme: "Becoming a new creation in Christ.",
    overview: "The Christian journey begins with the new birth. This course introduces participants to the fundamental experience of salvation, helping them understand repentance, faith in Jesus Christ, regeneration, and their new identity as children of God. The new birth is not merely a religious experience or a change in outward behaviour. It is a spiritual transformation through which an individual enters a new relationship with God and begins a new life in Christ.",
    primary: ["John 3:3-7", "2 Corinthians 5:17", "Romans 10:9-10", "Acts 3:19", "Ephesians 2:8-10"],
    supporting: ["Romans 8:1-2", "1 Peter 1:23", "Colossians 1:13-14", "Titus 3:4-7", "John 1:12-13"],
    notes: ["Regeneration: The spiritual work of God through which a person receives new life.", "Repentance: A genuine turning towards God, involving a change of mind and direction.", "Salvation: God's gracious work through Jesus Christ, received through faith.", "New Identity: The believer's new standing and relationship with God in Christ.", "Assurance: Understanding the basis of salvation and the believer's confidence in God's promises."],
    objectives: ["Explain what it means to be born again.", "Understand the relationship between repentance and faith.", "Identify the biblical basis of salvation.", "Explain their new identity in Christ.", "Develop confidence in the promises of God.", "Distinguish genuine spiritual transformation from outward religious appearance."],
    application: "Participants should be able to articulate their testimony of faith, identify the implications of their new identity, and begin cultivating a lifestyle consistent with their confession of Christ.",
    memory: "2 Corinthians 5:17"
  },
  {
    num: "02",
    title: "SPIRITUAL MILK",
    subtitle: "The Foundation of Christian Doctrine",
    theme: "Establishing believers in the elementary principles of the Christian faith.",
    overview: "Spiritual growth requires nourishment through the Word of God. This course establishes believers in the foundational doctrines of Christianity, providing the scriptural understanding necessary for spiritual development and doctrinal stability. Hebrews 6:1-2 identifies foundational teachings that every believer should understand as they progress towards maturity.",
    primary: ["Hebrews 5:12-14", "Hebrews 6:1-2", "1 Peter 2:2-3", "Romans 10:17", "Mark 16:16"],
    supporting: ["Matthew 28:19-20", "Acts 2:38", "John 5:24", "1 Corinthians 15:12-28", "Revelation 20:11-15"],
    notes: ["The Word of God: Scripture as the foundation for Christian belief and practice.", "Faith Towards God: Trusting God's character, promises, and revealed truth.", "Repentance from Dead Works: Turning away from works that cannot produce spiritual life.", "Baptisms: Understanding the biblical teaching concerning baptism.", "Laying on of Hands: Its biblical context and significance in the life of the Church.", "Resurrection of the Dead: The Christian hope concerning resurrection.", "Eternal Judgement: The reality of divine judgement and accountability before God."],
    objectives: ["Identify the elementary doctrines of Christ.", "Explain the importance of biblical faith.", "Understand repentance and baptism.", "Explain the significance of resurrection.", "Understand the biblical teaching on eternal judgement.", "Develop a consistent personal relationship with Scripture.", "Recognise the importance of sound doctrine."],
    application: "Participants should develop a regular pattern of Bible reading, personal study, prayer, and application of biblical truth.",
    memory: "Hebrews 6:1-2"
  },
  {
    num: "03",
    title: "GROWING IN LOVE",
    subtitle: "The Foundation of Christian Character",
    theme: "Developing the character and nature of Christ.",
    overview: "Christian maturity is demonstrated not merely through knowledge or spiritual experiences, but through the development of Christlike character. This course explores love as the defining expression of Christian life. Participants are taught to cultivate humility, patience, forgiveness, endurance, compassion, and selfless service. The objective is to move beyond emotional expressions of faith into consistent, practical demonstrations of Christian love.",
    primary: ["1 Corinthians 13:1-13", "John 13:34-35", "Galatians 5:22-23", "Colossians 3:12-14", "Ephesians 4:1-3"],
    supporting: ["Matthew 5:43-48", "1 John 4:7-12", "Romans 5:3-5", "James 1:2-4", "Ephesians 4:32", "Philippians 2:1-5"],
    notes: ["The Nature of Love: Love as the expression of God's character.", "The Fruit of the Spirit: The character produced through the Holy Spirit.", "Forgiveness: Extending forgiveness as those who have received God's forgiveness.", "Humility: Valuing others and rejecting self-centred living.", "Endurance: Remaining steadfast through challenging seasons.", "Service: Expressing love through practical acts of compassion and responsibility."],
    objectives: ["Explain the biblical nature of Christian love.", "Identify the fruit of the Spirit.", "Demonstrate an understanding of forgiveness.", "Practise humility and patience.", "Understand endurance as part of Christian maturity.", "Recognise the importance of serving others.", "Evaluate their conduct against biblical principles of love."],
    application: "Participants should identify practical opportunities to demonstrate forgiveness, compassion, patience, generosity, and selfless service in their families, workplaces, and church community.",
    memory: "John 13:34-35"
  },
  {
    num: "04",
    title: "STEWARDSHIP & LEADERSHIP",
    subtitle: "The Foundation of Kingdom Responsibility",
    theme: "Faithfulness, accountability, integrity, and responsible leadership.",
    overview: "Leadership in the Kingdom of God is fundamentally an expression of stewardship. Every responsibility, gift, opportunity, and resource entrusted to a believer must be managed with faithfulness and integrity. This course emphasises character before position, responsibility before recognition, and service before status. It also examines the biblical standards expected of those entrusted with ministry responsibility.",
    primary: ["1 Corinthians 4:1-2", "Luke 16:10-12", "Mark 10:42-45", "1 Timothy 3:1-13", "1 Peter 5:1-4"],
    supporting: ["1 Peter 4:10-11", "Titus 1:5-9", "Proverbs 11:3", "Colossians 3:23-24", "2 Timothy 2:15", "Matthew 25:14-30"],
    notes: ["Stewardship: Recognising that everything entrusted to believers carries responsibility.", "Faithfulness: Remaining dependable in both visible and unseen responsibilities.", "Servant Leadership: Understanding leadership through the example of Jesus Christ.", "Accountability: Recognising responsibility before God and the people entrusted to one's care.", "Integrity: Maintaining consistency between convictions, conduct, and responsibilities.", "Excellence: Approaching ministry and service with diligence.", "Ministry Character: Understanding the biblical qualifications and ethical standards for spiritual leadership."],
    objectives: ["Explain the biblical principle of stewardship.", "Identify the characteristics of faithful leadership.", "Understand servant leadership.", "Demonstrate accountability and integrity.", "Recognise the importance of excellence in service.", "Understand the biblical qualifications for church leadership.", "Apply responsible management principles to ministry resources."],
    application: "Participants should develop a personal stewardship framework covering time, gifts, resources, relationships, and ministry responsibilities.",
    memory: "1 Corinthians 4:2"
  },
  {
    num: "05",
    title: "ANAZAO CULTURES",
    subtitle: "The Foundation of Church Identity and Community",
    theme: "Understanding the values, practices, and shared responsibilities of the Anazao the Family of Grace Global.",
    overview: "Every spiritual community is strengthened by shared convictions, values, relationships, and practices rooted in biblical truth. ANAZAO Cultures introduces participants to the distinctive values and family lifestyle of ANAZAO THE FAMILY OF GRACE GLOBAL. It establishes an understanding of honour, discipline, unity, teamwork, fellowship, accountability, and mutual responsibility.",
    primary: ["Acts 2:42-47", "Hebrews 10:24-25", "Psalm 133:1-3", "1 Corinthians 12:12-27", "Ephesians 4:11-16"],
    supporting: ["1 Corinthians 14:40", "Romans 12:4-11", "Philippians 2:1-5", "Hebrews 13:7,17", "1 Thessalonians 5:12-13", "1 Peter 5:5-6", "2 Timothy 2:2"],
    notes: ["Spiritual Family: Understanding the Church as the Body of Christ.", "Fellowship: Building relationships through shared faith and mutual encouragement.", "Honour: Demonstrating biblical respect and appreciation for others.", "Unity: Recognising the importance of shared purpose despite different gifts and functions.", "Discipline and Order: Maintaining a healthy community governed by biblical principles.", "Teamwork: Working together towards the mission of the Church.", "Spiritual Growth: Equipping believers to serve and strengthen the Body of Christ.", "Generational Continuity: Entrusting biblical truth to faithful people who can teach others."],
    objectives: ["Explain the biblical understanding of the Church as a spiritual family.", "Understand the values and culture of ANAZAO.", "Recognise the importance of honour and unity.", "Participate responsibly in fellowship and service.", "Understand biblical discipline and order.", "Appreciate teamwork and mutual accountability.", "Contribute positively to the spiritual life of the community."],
    application: "Participants should demonstrate active participation in fellowship, responsible teamwork, respect, mutual care, and commitment to the shared mission of the Church.",
    memory: "Acts 2:42"
  },
];

export default function FoundationSchool() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(0);
  // For Student Portal - will connect real login later
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginMsg("Student Portal is coming soon. Your login details will be issued after enrollment. Please enroll below to receive your Student ID.");
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* HERO - ORIGINAL */}
      <section style={{ textAlign: "center", padding: isMobile ? "110px 1.2rem 60px" : "140px 2rem 90px", position: "relative", overflow: "hidden" }}>
        <p style={{ letterSpacing: "4px", fontSize: "11px", color: GOLD, fontWeight: "700" }}>ANAZAO THE FAMILY OF GRACE GLOBAL</p>
        <h1 style={{ fontSize: isMobile ? "42px" : "72px", lineHeight: "1", margin: "16px 0", color: GOLD, textShadow: "0 0 30px rgba(212,175,55,0.4)" }}>FOUNDATION<br />SCHOOL</h1>
        <p style={{ letterSpacing: "3px", fontSize: isMobile ? "13px" : "16px", fontWeight: "700" }}>ESTABLISHED IN TRUTH. EQUIPPED FOR PURPOSE.</p>
        <p style={{ maxWidth: "720px", margin: "24px auto", lineHeight: "1.7", color: "#ddd" }}>
          Building Strong Foundations. Raising Mature Believers. A structured discipleship and spiritual formation programme to establish believers in truth, cultivate Christlike character, and prepare them for the life and mission of the Church.
        </p>
        <p style={{ fontStyle: "italic", color: GOLD_LIGHT, marginTop: "20px" }}>“A believer must be established in truth before being entrusted with responsibility.”</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "30px" }}>
          <a href="/membership" style={{ background: GOLD, color: "#000", padding: "14px 28px", borderRadius: "30px", fontWeight: "800", textDecoration: "none" }}>ENROLL NOW</a>
          <a href="#courses" style={{ border: `1px solid ${GOLD}`, color: GOLD, padding: "14px 28px", borderRadius: "30px", fontWeight: "800", textDecoration: "none" }}>VIEW THE 5 COURSES ↓</a>
        </div>
        <p style={{ marginTop: "30px", fontSize: "11px", letterSpacing: "3px", color: "#aaa" }}>APOSTOLIC • PROPHETIC • DISCIPLESHIP • TRANSFORMATIONAL</p>
      </section>

      {/* JOURNEY STRIP - ORIGINAL */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.2rem 60px", textAlign: "center" }}>
        <h2 style={{ color: GOLD, fontSize: "28px" }}>THE FOUNDATION SCHOOL JOURNEY</h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(5, 1fr)", gap: "12px", marginTop: "24px" }}>
          {["NEW BIRTH\nIdentity", "SPIRITUAL MILK\nDoctrine", "GROWING IN LOVE\nCharacter", "STEWARDSHIP\nResponsibility", "ANAZAO CULTURES\nFamily & Mission"].map((t, i) => (
            <div key={i} style={{ border: `1px solid ${GOLD}`, borderRadius: "14px", padding: "18px 10px", background: "#0a0a0a", whiteSpace: "pre-line", fontWeight: "700", fontSize: "14px", lineHeight: "1.5" }}>
              <span style={{ color: GOLD, fontSize: "22px" }}>{String(i+1).padStart(2,"0")}</span><br/>{t}
            </div>
          ))}
        </div>
      </section>

      {/* COURSES - ORIGINAL */}
      <section id="courses" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.2rem 80px" }}>
        <h2 style={{ textAlign: "center", color: GOLD, fontSize: "32px", marginBottom: "8px" }}>THE FIVE-COURSE TRAINING PATH</h2>
        <p style={{ textAlign: "center", color: "#bbb", marginBottom: "30px" }}>Click a course to expand full teaching, scriptures, and objectives.</p>
        {courses.map((c, idx) => (
          <div key={idx} style={{ border: `1px solid ${open===idx ? GOLD : "#333"}`, borderRadius: "16px", marginBottom: "16px", overflow: "hidden", background: "#0a0a0a" }}>
            <button onClick={() => setOpen(open===idx ? -1 : idx)} style={{ width: "100%", textAlign: "left", background: "none", border: "none", color: "#fff", padding: "20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span><span style={{ color: GOLD, fontWeight: "900", fontSize: "20px", marginRight: "12px" }}>{c.num}</span><strong style={{ fontSize: "18px" }}>{c.title}</strong><br/><span style={{ color: "#bbb", fontSize: "14px", marginLeft: "42px" }}>{c.subtitle}</span></span>
              <span style={{ color: GOLD, fontSize: "24px" }}>{open===idx ? "−" : "+"}</span>
            </button>
            {open===idx && (
              <div style={{ padding: "0 20px 24px", lineHeight: "1.7", color: "#ddd" }}>
                <p style={{ color: GOLD_LIGHT, fontWeight: "700" }}>Central Theme: {c.theme}</p>
                <p>{c.overview}</p>
                <h4 style={{ color: GOLD }}>Scriptural Foundation</h4>
                <p><strong>Primary:</strong> {c.primary.join(" • ")}</p>
                <p><strong>Supporting:</strong> {c.supporting.join(" • ")}</p>
                <h4 style={{ color: GOLD }}>Doctrinal Notes</h4>
                <ul>{c.notes.map((n,i)=><li key={i}>{n}</li>)}</ul>
                <h4 style={{ color: GOLD }}>Learning Objectives</h4>
                <ul>{c.objectives.map((o,i)=><li key={i}>{o}</li>)}</ul>
                <h4 style={{ color: GOLD }}>Practical Application</h4><p>{c.application}</p>
                <p style={{ background: "#111", borderLeft: `3px solid ${GOLD}`, padding: "12px 16px", marginTop: "16px" }}><strong style={{ color: GOLD }}>Key Memory Scripture:</strong> {c.memory}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* ===== NEW SEGMENT: FULL COURSE OUTLINE - STUDENT LOGIN ===== */}
      <section id="student-portal" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.2rem 80px" }}>
        <div style={{ border: `1px solid ${GOLD}`, borderRadius: "20px", overflow: "hidden", background: "#0a0a0a" }}>
          <div style={{ textAlign: "center", padding: isMobile ? "30px 20px 20px" : "40px 30px 24px" }}>
            <p style={{ letterSpacing: "4px", fontSize: "11px", color: GOLD, fontWeight: "700", margin: 0 }}>ENROLLED STUDENTS ONLY</p>
            <h2 style={{ color: GOLD, fontSize: isMobile ? "26px" : "32px", margin: "12px 0 8px" }}>🔒 FULL COURSE OUTLINE</h2>
            <p style={{ color: "#bbb", maxWidth: "640px", margin: "0 auto", lineHeight: "1.7" }}>
              The complete week-by-week outline, detailed lessons, assignments, and assessments are available inside the Student Portal. Log in with the Student ID issued to you after enrollment.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr", gap: "0", borderTop: `1px solid #222` }}>
            {/* LEFT: What is inside - Preview (blurred/locked) */}
            <div style={{ padding: "26px", borderRight: isMobile ? "none" : "1px solid #222" }}>
              <h3 style={{ color: GOLD_LIGHT, margin: "0 0 16px", fontSize: "18px" }}>WHAT'S INSIDE THE PORTAL</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2.1", color: "#ddd", fontSize: "15px" }}>
                <li>🔒 Course 01 — New Birth • 6 Weeks • 12 Lessons</li>
                <li>🔒 Course 02 — Spiritual Milk • 6 Weeks • 12 Lessons</li>
                <li>🔒 Course 03 — Growing In Love • 6 Weeks • 12 Lessons</li>
                <li>🔒 Course 04 — Stewardship & Leadership • 6 Weeks • 12 Lessons</li>
                <li>🔒 Course 05 — Anazao Cultures • 4 Weeks • 8 Lessons</li>
              </ul>
              <div style={{ background: "#111", borderRadius: "12px", padding: "14px 16px", marginTop: "18px", fontSize: "14px", color: "#bbb", lineHeight: "1.6" }}>
                Includes: Weekly assignments • Memory verse tests • Progress tracking • Certificate upon completion
              </div>
            </div>

            {/* RIGHT: Login Form - Placeholder for later */}
            <div style={{ padding: "26px", background: "#111" }}>
              <h3 style={{ color: "#fff", margin: "0 0 6px", fontSize: "18px" }}>STUDENT LOGIN</h3>
              <p style={{ color: "#999", fontSize: "13px", margin: "0 0 18px" }}>Enter your Student ID and password to access your full outline.</p>
              <form onSubmit={handleLogin}>
                <label style={{ fontSize: "12px", letterSpacing: "1px", color: GOLD, fontWeight: "700" }}>STUDENT ID</label>
                <input
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="e.g. ANAZAO-FS-001"
                  style={{ width: "100%", boxSizing: "border-box", padding: "13px 14px", borderRadius: "10px", border: "1px solid #333", background: "#000", color: "#fff", margin: "8px 0 16px", outline: "none" }}
                />
                <label style={{ fontSize: "12px", letterSpacing: "1px", color: GOLD, fontWeight: "700" }}>PASSWORD</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{ width: "100%", boxSizing: "border-box", padding: "13px 14px", borderRadius: "10px", border: "1px solid #333", background: "#000", color: "#fff", margin: "8px 0 18px", outline: "none" }}
                />
                <button type="submit" style={{ width: "100%", background: GOLD, color: "#000", border: "none", padding: "14px", borderRadius: "30px", fontWeight: "800", cursor: "pointer", fontSize: "15px" }}>
                  LOGIN TO PORTAL →
                </button>
                {loginMsg && <p style={{ background: "#1a1400", border: `1px solid ${GOLD}`, color: GOLD_LIGHT, padding: "12px", borderRadius: "10px", fontSize: "13px", lineHeight: "1.6", marginTop: "16px" }}>{loginMsg}</p>}
              </form>
              <p style={{ textAlign: "center", color: "#888", fontSize: "13px", marginTop: "16px" }}>
                Don't have login details? <a href="/membership" style={{ color: GOLD, fontWeight: "700" }}>Enroll Now</a> — you will receive your Student ID after enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME - ORIGINAL */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.2rem 80px", textAlign: "center" }}>
        <h2 style={{ color: GOLD, fontSize: "30px" }}>FROM FOUNDATION TO MATURITY</h2>
        <p style={{ color: "#ccc", lineHeight: "1.7" }}>Upon completing the five-course pathway, participants should demonstrate:</p>
        <div style={{ textAlign: "left", maxWidth: "600px", margin: "20px auto", lineHeight: "2", color: "#eee" }}>
          ✓ A clear understanding of their identity in Christ<br/>✓ Sound knowledge of foundational Christian doctrine<br/>✓ A growing expression of Christlike character<br/>✓ Responsible stewardship and servant leadership<br/>✓ An understanding of the values and culture of ANAZAO<br/>✓ Readiness to participate meaningfully in fellowship and service
        </div>
        <div style={{ border: `1px solid ${GOLD}`, borderRadius: "16px", padding: "30px 20px", marginTop: "30px" }}>
          <h3 style={{ color: GOLD, fontSize: "22px", margin: "0" }}>ROOTED IN CHRIST. ESTABLISHED IN TRUTH. BUILT TO SERVE.</h3>
          <p style={{ fontStyle: "italic", marginTop: "14px" }}>“For other foundation can no man lay than that is laid, which is Jesus Christ.” — 1 Corinthians 3:11</p>
          <a href="/membership" style={{ display: "inline-block", background: RED, color: "#fff", padding: "14px 30px", borderRadius: "30px", fontWeight: "800", textDecoration: "none", marginTop: "10px" }}>ENROLL IN FOUNDATION SCHOOL</a>
        </div>
      </section>
    </div>
  );
}
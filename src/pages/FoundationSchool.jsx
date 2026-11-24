import React, { useState, useEffect } from "react";

const GOLD = "#D4AF37";
const GOLD_LIGHT = "#F5D67B";
const RED = "#C1272D";

// ✦ NEW ROYAL ICONS - not common emojis
const IC = { dove: "🕊️", lamp: "🪔", scroll: "📜", key: "🗝️", crown: "⚜️", leaf: "🌿", candle: "🕯️", vessel: "🏺", feather: "🪶", star: "✦", diamond: "❖" };

// ===== 52 WEEK DATA - Compact =====
// [Course, Title, Verse, Lesson]
const WEEK_META = [
  ["01 NEW BIRTH","What Is Salvation?","John 3:16","God loved the world so much He gave His Son. Salvation is not earned, it is received by faith in Jesus."],
  ["01 NEW BIRTH","Repentance","Acts 3:19","Repentance is turning AWAY from sin and TOWARDS God. True repentance produces fruit."],
  ["01 NEW BIRTH","Faith In Jesus","Romans 10:9-10","Confess with your mouth, believe in your heart. Faith is trusting Jesus died for you and rose again."],
  ["01 NEW BIRTH","The New Birth","John 3:3-7","You must be born again. Born of water and Spirit. Not religion, but new life from God."],
  ["01 NEW BIRTH","Regeneration By The Spirit","Titus 3:5","The Holy Spirit washes and renews us. Not by our works, but by His mercy."],
  ["01 NEW BIRTH","Forgiveness Of Sins","1 John 1:9","If we confess, He is faithful to forgive and cleanse us from all unrighteousness."],
  ["01 NEW BIRTH","New Identity In Christ","2 Corinthians 5:17","Old things passed away, all things become new. Your identity is in Christ, not your past."],
  ["01 NEW BIRTH","Assurance Of Salvation","Romans 8:1","There is no condemnation for those in Christ. Assurance is based on God's promise, not feelings."],
  ["01 NEW BIRTH","Baptism In Water","Acts 2:38","Baptism is burial of old life and resurrection to new life. It is obedience, not salvation itself."],
  ["01 NEW BIRTH","Course 01 Exam + Testimony","2 Corinthians 5:17","Review Weeks 1-9. Share your testimony. Celebrate new life."],
  ["02 SPIRITUAL MILK","The Word Of God","2 Timothy 3:16","All Scripture is God-breathed. The Bible is daily food, not just Sunday reading."],
  ["02 SPIRITUAL MILK","How To Study The Bible","Psalm 119:105","Read slowly, pray it, obey it. The Word is a lamp to your feet."],
  ["02 SPIRITUAL MILK","Faith Towards God","Hebrews 11:6","Without faith it is impossible to please God. Trust His character and promises."],
  ["02 SPIRITUAL MILK","Repentance From Dead Works","Hebrews 6:1","Turn away from works that cannot produce spiritual life."],
  ["02 SPIRITUAL MILK","Baptisms","Matthew 28:19","Water, Spirit, Fire. Baptism is obedience to Jesus' command."],
  ["02 SPIRITUAL MILK","Laying On Of Hands","Hebrews 6:2","Biblical practice for blessing, healing, and impartation in the Church."],
  ["02 SPIRITUAL MILK","Resurrection Of The Dead","1 Corinthians 15:20","Jesus rose again, and we will rise too. This is our living hope."],
  ["02 SPIRITUAL MILK","Eternal Judgement","Hebrews 9:27","We will all stand before God. This keeps us faithful and holy."],
  ["02 SPIRITUAL MILK","Prayer & Fasting","Matthew 6:5-18","Prayer is communion, fasting is humbling yourself before God."],
  ["02 SPIRITUAL MILK","Course 02 Exam + Disciplines","Hebrews 6:1-2","Review Weeks 11-19. Present your daily devotional routine."],
  ["03 GROWING IN LOVE","What Is Love?","1 Corinthians 13:1-3","Love is patient, kind, not proud. Love is action, not just feeling."],
  ["03 GROWING IN LOVE","Love Is Patient","1 Corinthians 13:4","Patience is love in hard moments. Practice patience with difficult people."],
  ["03 GROWING IN LOVE","Love Is Kind","Ephesians 4:32","Kindness is love made visible. Do kind acts with no one knowing."],
  ["03 GROWING IN LOVE","Forgiveness","Matthew 6:14-15","God forgave you a debt you could never pay. Now forgive others."],
  ["03 GROWING IN LOVE","Humility","Philippians 2:3-5","Valuing others above yourself. Reject self-centred living."],
  ["03 GROWING IN LOVE","Fruit Of The Spirit","Galatians 5:22-23","Character is fruit. It grows slowly as you abide in Christ."],
  ["03 GROWING IN LOVE","Love For Enemies","Matthew 5:44","Pray for those who hurt you. Love your enemies and bless them."],
  ["03 GROWING IN LOVE","Endurance In Trials","James 1:2-4","Trials produce endurance. Remain steadfast through challenging seasons."],
  ["03 GROWING IN LOVE","Service & Compassion","Matthew 25:35-40","Serve the hungry, the stranger, the needy. As you do to them, you do to Jesus."],
  ["03 GROWING IN LOVE","Course 03 Exam + Love In Action","John 13:34-35","Review Weeks 21-29. Lead a love project in your estate."],
  ["04 STEWARDSHIP & LEADERSHIP","You Are A Steward","1 Corinthians 4:2","Everything belongs to God. You are a manager, not an owner."],
  ["04 STEWARDSHIP & LEADERSHIP","Stewardship Of Time","Ephesians 5:16","Redeem the time. Track your time, cut waste, invest in eternity."],
  ["04 STEWARDSHIP & LEADERSHIP","Stewardship Of Money","Luke 16:10","Faithful with little, faithful with much. Budget and tithe faithfully."],
  ["04 STEWARDSHIP & LEADERSHIP","Stewardship Of Gifts","1 Peter 4:10","Every gift is to serve others. Discover and use your gift."],
  ["04 STEWARDSHIP & LEADERSHIP","Faithfulness In Small Things","Luke 16:10","God promotes the faithful, not the talented. Do small things with excellence."],
  ["04 STEWARDSHIP & LEADERSHIP","Servant Leadership","Mark 10:43-45","In the Kingdom, leaders serve. Jesus washed feet."],
  ["04 STEWARDSHIP & LEADERSHIP","Integrity","Proverbs 11:3","Integrity guides you. Consistency between convictions and conduct."],
  ["04 STEWARDSHIP & LEADERSHIP","Accountability","Hebrews 13:17","Choose an accountability partner. Be responsible before God and people."],
  ["04 STEWARDSHIP & LEADERSHIP","Excellence In Service","Colossians 3:23","Do all as unto the Lord. Improve one area of service this week."],
  ["04 STEWARDSHIP & LEADERSHIP","Leadership Qualifications","1 Timothy 3:1-7","Character before position. Evaluate yourself against 1 Timothy 3."],
  ["04 STEWARDSHIP & LEADERSHIP","Handling Conflict","Matthew 18:15","Resolve conflict biblically. No gossip, go directly in love."],
  ["04 STEWARDSHIP & LEADERSHIP","Course 04 Exam + Leadership Project","1 Corinthians 4:2","Review Weeks 31-41. Lead a team to organise a church activity."],
  ["05 ANAZAO CULTURES","We Are Family","Acts 2:42","ANAZAO is not a church you attend, it is a family you belong to."],
  ["05 ANAZAO CULTURES","Fellowship","Hebrews 10:25","Do not forsake assembling. Fellowship strengthens faith."],
  ["05 ANAZAO CULTURES","Honour","Romans 12:10","Honour your pastor, parents, and leaders. Honour protects unity."],
  ["05 ANAZAO CULTURES","Unity","Psalm 133:1","Where there is unity, God commands blessing. Stop gossip, speak unity."],
  ["05 ANAZAO CULTURES","Discipline & Order","1 Corinthians 14:40","Let all things be done decently and in order. Arrive early, follow protocol."],
  ["05 ANAZAO CULTURES","Teamwork","1 Corinthians 12:12-27","Every member has a part. Serve in a team, not alone."],
  ["05 ANAZAO CULTURES","Giving & Generosity","2 Corinthians 9:7","God loves a cheerful giver. Give to church project and to one in need."],
  ["05 ANAZAO CULTURES","Evangelism & Mission","Matthew 28:19","Go and make disciples. Win one soul, invite three people."],
  ["05 ANAZAO CULTURES","Generational Continuity","2 Timothy 2:2","Teach faithful people who can teach others. Entrust truth to next generation."],
  ["05 ANAZAO CULTURES","GRADUATION","Acts 2:42","Final Exam + Testimony + Certificate. Write your 1-year testimony and serve."],
];

// Build full WEEKS with daily work + exam
const WEEKS = WEEK_META.map(([course, title, verse, lesson], idx) => {
  const week = idx + 1;
  const daily = [
    `Mon ${IC.scroll} READ — Read ${verse} + chapter`,
    `Tue ${IC.feather} STUDY — Read lesson, write 3 lessons learned`,
    `Wed ${IC.candle} PRAY — Pray the week's prayer point 15 mins`,
    `Thu ${IC.scroll} ASSIGNMENT — Do written assignment in notebook`,
    `Fri ${IC.leaf} PRACTICE — Do 1 practical act for this week's theme`,
    `Sat ${IC.star} REVIEW — Memorise ${verse}`,
    `Sun ${IC.dove} CHURCH — Attend service + share with 1 person`
  ];
  // Foundational exam - 5 questions, tailored per week from lesson + verse
  const exam = [
    { q: `What is the main theme of Week ${week} — ${title}?`, options: [title, "Money only", "Fame"], answer: 0 },
    { q: `What is the memory verse for Week ${week}?`, options: [verse, "John 1:1", "Psalm 23:1"], answer: 0 },
    { q: `Which course does Week ${week} belong to?`, options: [course, "No course", "Old Testament only"], answer: 0 },
    { q: `What should you do on Thursday of this week?`, options: ["Do written assignment", "Do nothing", "Skip church"], answer: 0 },
    { q: `To unlock next week, what must you do?`, options: ["Finish 7 days + pass exam 4/5", "Pay money", "Wait only"], answer: 0 },
  ];
  return { week, course, title, verse, lesson, daily, exam, assignment: `Write in your notebook: What did God teach you in Week ${week} — ${title}? Apply it this week.` };
});

const courses = [
  { num: "01", title: "NEW BIRTH", subtitle: "The Foundation of Christian Identity", theme: "Becoming a new creation in Christ.", overview: "The Christian journey begins with the new birth. This course introduces participants to the fundamental experience of salvation, helping them understand repentance, faith in Jesus Christ, regeneration, and their new identity as children of God. The new birth is not merely a religious experience or a change in outward behaviour. It is a spiritual transformation through which an individual enters a new relationship with God and begins a new life in Christ.", primary: ["John 3:3-7", "2 Corinthians 5:17", "Romans 10:9-10", "Acts 3:19", "Ephesians 2:8-10"], supporting: ["Romans 8:1-2", "1 Peter 1:23", "Colossians 1:13-14", "Titus 3:4-7", "John 1:12-13"], notes: ["Regeneration: The spiritual work of God through which a person receives new life.", "Repentance: A genuine turning towards God, involving a change of mind and direction.", "Salvation: God's gracious work through Jesus Christ, received through faith.", "New Identity: The believer's new standing and relationship with God in Christ.", "Assurance: Understanding the basis of salvation and the believer's confidence in God's promises."], objectives: ["Explain what it means to be born again.", "Understand the relationship between repentance and faith.", "Identify the biblical basis of salvation.", "Explain their new identity in Christ.", "Develop confidence in the promises of God.", "Distinguish genuine spiritual transformation from outward religious appearance."], application: "Participants should be able to articulate their testimony of faith, identify the implications of their new identity, and begin cultivating a lifestyle consistent with their confession of Christ.", memory: "2 Corinthians 5:17" },
  { num: "02", title: "SPIRITUAL MILK", subtitle: "The Foundation of Christian Doctrine", theme: "Establishing believers in the elementary principles of the Christian faith.", overview: "Spiritual growth requires nourishment through the Word of God. This course establishes believers in the foundational doctrines of Christianity, providing the scriptural understanding necessary for spiritual development and doctrinal stability. Hebrews 6:1-2 identifies foundational teachings that every believer should understand as they progress towards maturity.", primary: ["Hebrews 5:12-14", "Hebrews 6:1-2", "1 Peter 2:2-3", "Romans 10:17", "Mark 16:16"], supporting: ["Matthew 28:19-20", "Acts 2:38", "John 5:24", "1 Corinthians 15:12-28", "Revelation 20:11-15"], notes: ["The Word of God: Scripture as the foundation for Christian belief and practice.", "Faith Towards God: Trusting God's character, promises, and revealed truth.", "Repentance from Dead Works: Turning away from works that cannot produce spiritual life.", "Baptisms: Understanding the biblical teaching concerning baptism.", "Laying on of Hands: Its biblical context and significance in the life of the Church.", "Resurrection of the Dead: The Christian hope concerning resurrection.", "Eternal Judgement: The reality of divine judgement and accountability before God."], objectives: ["Identify the elementary doctrines of Christ.", "Explain the importance of biblical faith.", "Understand repentance and baptism.", "Explain the significance of resurrection.", "Understand the biblical teaching on eternal judgement.", "Develop a consistent personal relationship with Scripture.", "Recognise the importance of sound doctrine."], application: "Participants should develop a regular pattern of Bible reading, personal study, prayer, and application of biblical truth.", memory: "Hebrews 6:1-2" },
  { num: "03", title: "GROWING IN LOVE", subtitle: "The Foundation of Christian Character", theme: "Developing the character and nature of Christ.", overview: "Christian maturity is demonstrated not merely through knowledge or spiritual experiences, but through the development of Christlike character. This course explores love as the defining expression of Christian life. Participants are taught to cultivate humility, patience, forgiveness, endurance, compassion, and selfless service. The objective is to move beyond emotional expressions of faith into consistent, practical demonstrations of Christian love.", primary: ["1 Corinthians 13:1-13", "John 13:34-35", "Galatians 5:22-23", "Colossians 3:12-14", "Ephesians 4:1-3"], supporting: ["Matthew 5:43-48", "1 John 4:7-12", "Romans 5:3-5", "James 1:2-4", "Ephesians 4:32", "Philippians 2:1-5"], notes: ["The Nature of Love: Love as the expression of God's character.", "The Fruit of the Spirit: The character produced through the Holy Spirit.", "Forgiveness: Extending forgiveness as those who have received God's forgiveness.", "Humility: Valuing others and rejecting self-centred living.", "Endurance: Remaining steadfast through challenging seasons.", "Service: Expressing love through practical acts of compassion and responsibility."], objectives: ["Explain the biblical nature of Christian love.", "Identify the fruit of the Spirit.", "Demonstrate an understanding of forgiveness.", "Practise humility and patience.", "Understand endurance as part of Christian maturity.", "Recognise the importance of serving others.", "Evaluate their conduct against biblical principles of love."], application: "Participants should identify practical opportunities to demonstrate forgiveness, compassion, patience, generosity, and selfless service in their families, workplaces, and church community.", memory: "John 13:34-35" },
  { num: "04", title: "STEWARDSHIP & LEADERSHIP", subtitle: "The Foundation of Kingdom Responsibility", theme: "Faithfulness, accountability, integrity, and responsible leadership.", overview: "Leadership in the Kingdom of God is fundamentally an expression of stewardship. Every responsibility, gift, opportunity, and resource entrusted to a believer must be managed with faithfulness and integrity. This course emphasises character before position, responsibility before recognition, and service before status. It also examines the biblical standards expected of those entrusted with ministry responsibility.", primary: ["1 Corinthians 4:1-2", "Luke 16:10-12", "Mark 10:42-45", "1 Timothy 3:1-13", "1 Peter 5:1-4"], supporting: ["1 Peter 4:10-11", "Titus 1:5-9", "Proverbs 11:3", "Colossians 3:23-24", "2 Timothy 2:15", "Matthew 25:14-30"], notes: ["Stewardship: Recognising that everything entrusted to believers carries responsibility.", "Faithfulness: Remaining dependable in both visible and unseen responsibilities.", "Servant Leadership: Understanding leadership through the example of Jesus Christ.", "Accountability: Recognising responsibility before God and the people entrusted to one's care.", "Integrity: Maintaining consistency between convictions, conduct, and responsibilities.", "Excellence: Approaching ministry and service with diligence.", "Ministry Character: Understanding the biblical qualifications and ethical standards for spiritual leadership."], objectives: ["Explain the biblical principle of stewardship.", "Identify the characteristics of faithful leadership.", "Understand servant leadership.", "Demonstrate accountability and integrity.", "Recognise the importance of excellence in service.", "Understand the biblical qualifications for church leadership.", "Apply responsible management principles to ministry resources."], application: "Participants should develop a personal stewardship framework covering time, gifts, resources, relationships, and ministry responsibilities.", memory: "1 Corinthians 4:2" },
  { num: "05", title: "ANAZAO CULTURES", subtitle: "The Foundation of Church Identity and Community", theme: "Understanding the values, practices, and shared responsibilities of the Anazao the Family of Grace Global.", overview: "Every spiritual community is strengthened by shared convictions, values, relationships, and practices rooted in biblical truth. ANAZAO Cultures introduces participants to the distinctive values and family lifestyle of ANAZAO THE FAMILY OF GRACE GLOBAL. It establishes an understanding of honour, discipline, unity, teamwork, fellowship, accountability, and mutual responsibility.", primary: ["Acts 2:42-47", "Hebrews 10:24-25", "Psalm 133:1-3", "1 Corinthians 12:12-27", "Ephesians 4:11-16"], supporting: ["1 Corinthians 14:40", "Romans 12:4-11", "Philippians 2:1-5", "Hebrews 13:7,17", "1 Thessalonians 5:12-13", "1 Peter 5:5-6", "2 Timothy 2:2"], notes: ["Spiritual Family: Understanding the Church as the Body of Christ.", "Fellowship: Building relationships through shared faith and mutual encouragement.", "Honour: Demonstrating biblical respect and appreciation for others.", "Unity: Recognising the importance of shared purpose despite different gifts and functions.", "Discipline and Order: Maintaining a healthy community governed by biblical principles.", "Teamwork: Working together towards the mission of the Church.", "Spiritual Growth: Equipping believers to serve and strengthen the Body of Christ.", "Generational Continuity: Entrusting biblical truth to faithful people who can teach others."], objectives: ["Explain the biblical understanding of the Church as a spiritual family.", "Understand the values and culture of ANAZAO.", "Recognise the importance of honour and unity.", "Participate responsibly in fellowship and service.", "Understand biblical discipline and order.", "Appreciate teamwork and mutual accountability.", "Contribute positively to the spiritual life of the community."], application: "Participants should demonstrate active participation in fellowship, responsible teamwork, respect, mutual care, and commitment to the shared mission of the Church.", memory: "Acts 2:42" },
];

export default function FoundationSchool() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(0);
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", location: "" });
  const [admission, setAdmission] = useState(null);
  const [copied, setCopied] = useState(false);
  // ✦ 52-WEEK PROGRESSION
  const [unlockedWeek, setUnlockedWeek] = useState(1);
  const [completedDays, setCompletedDays] = useState({});
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [examAnswers, setExamAnswers] = useState({});
  const [examResult, setExamResult] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    const prog = JSON.parse(localStorage.getItem("anazao_progress") || "{}");
    if (prog.unlockedWeek) setUnlockedWeek(prog.unlockedWeek);
    if (prog.completedDays) setCompletedDays(prog.completedDays);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const saveProgress = (u, d) => localStorage.setItem("anazao_progress", JSON.stringify({ unlockedWeek: u, completedDays: d }));

  const handleLogin = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("anazao_students") || "[]");
    const found = saved.find(s => s.id === studentId.trim().toUpperCase() && s.password === password);
    if (found) { setIsLoggedIn(true); setCurrentStudent(found); setLoginMsg(`Welcome back, ${found.name}! ${IC.dove} Portal unlocked.`); }
    else setLoginMsg("Admission not found. Enroll below to get your Admission Number.");
  };

  const handleEnroll = (e) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.phone.trim()) return;
    const cleanFirst = form.firstName.trim().toUpperCase().replace(/[^A-Z]/g, "");
    const saved = JSON.parse(localStorage.getItem("anazao_students") || "[]");
    const nextNum = String(saved.length + 1).padStart(3, "0");
    const admissionId = `${cleanFirst}-2027-${nextNum}`;
    const autoPassword = `${cleanFirst.toLowerCase()}${form.phone.slice(-4)}`;
    const newStudent = { id: admissionId, password: autoPassword, name: `${form.firstName.trim()} ${form.lastName.trim()}`, firstName: form.firstName.trim(), phone: form.phone.trim(), email: form.email.trim(), location: form.location.trim(), enrolledAt: new Date().toISOString() };
    saved.push(newStudent);
    localStorage.setItem("anazao_students", JSON.stringify(saved));
    localStorage.setItem("anazao_current_student", JSON.stringify(newStudent));
    setAdmission(newStudent);
    window.scrollTo({ top: document.getElementById("enroll").offsetTop - 80, behavior: "smooth" });
  };

  const copyAdmission = () => { navigator.clipboard.writeText(`My ANAZAO Foundation School Admission: ${admission.id} | Password: ${admission.password}`); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  const toggleDay = (w, i) => { const k = `${w}-${i}`; const nd = { ...completedDays, [k]: !completedDays[k] }; setCompletedDays(nd); saveProgress(unlockedWeek, nd); };
  const submitExam = (wd) => {
    let score = 0; wd.exam.forEach((q, i) => { if (examAnswers[i] === q.answer) score++; });
    if (score >= 4) { const nu = Math.max(unlockedWeek, wd.week + 1); setUnlockedWeek(nu); saveProgress(nu, completedDays); setExamResult({ pass: true, score, message: `${IC.crown} Excellent! ${score}/5 passed. Week ${wd.week + 1} is now unlocked!` }); }
    else setExamResult({ pass: false, score, message: `${IC.lamp} You scored ${score}/5. Need 4/5 to unlock next week. Review and try again.` });
  };

  const currentWeekData = WEEKS.find(w => w.week === selectedWeek);
  const daysDone = currentWeekData ? currentWeekData.daily.filter((_, i) => completedDays[`${selectedWeek}-${i}`]).length : 0;
  const allDaysDone = daysDone === 7;

  const inputStyle = { width: "100%", boxSizing: "border-box", padding: "13px 14px", borderRadius: "10px", border: "1px solid #333", background: "#000", color: "#fff", margin: "8px 0 14px", outline: "none" };
  const labelStyle = { fontSize: "12px", letterSpacing: "1px", color: GOLD, fontWeight: "700" };

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* HERO */}
      <section style={{ textAlign: "center", padding: isMobile ? "110px 1.2rem 60px" : "140px 2rem 90px" }}>
        <p style={{ letterSpacing: "4px", fontSize: "11px", color: GOLD, fontWeight: "700" }}>ANAZAO THE FAMILY OF GRACE GLOBAL {IC.star}</p>
        <h1 style={{ fontSize: isMobile ? "42px" : "72px", lineHeight: "1", margin: "16px 0", color: GOLD, textShadow: "0 0 30px rgba(212,175,55,0.4)" }}>FOUNDATION<br />SCHOOL</h1>
        <p style={{ letterSpacing: "3px", fontSize: isMobile ? "13px" : "16px", fontWeight: "700" }}>ESTABLISHED IN TRUTH. EQUIPPED FOR PURPOSE.</p>
        <p style={{ maxWidth: "720px", margin: "24px auto", lineHeight: "1.7", color: "#ddd" }}>Building Strong Foundations. Raising Mature Believers. A structured discipleship and spiritual formation programme to establish believers in truth, cultivate Christlike character, and prepare them for the life and mission of the Church.</p>
        <p style={{ fontStyle: "italic", color: GOLD_LIGHT, marginTop: "20px" }}>“A believer must be established in truth before being entrusted with responsibility.”</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "30px" }}>
          <a href="#enroll" style={{ background: GOLD, color: "#000", padding: "14px 28px", borderRadius: "30px", fontWeight: "800", textDecoration: "none" }}>ENROLL NOW — GET ADMISSION INSTANTLY</a>
          <a href="#courses" style={{ border: `1px solid ${GOLD}`, color: GOLD, padding: "14px 28px", borderRadius: "30px", fontWeight: "800", textDecoration: "none" }}>VIEW THE 5 COURSES ↓</a>
        </div>
        <p style={{ marginTop: "14px", fontSize: "11px", letterSpacing: "3px", color: "#aaa" }}>APOSTOLIC • PROPHETIC • DISCIPLESHIP • TRANSFORMATIONAL</p>
      </section>

      {/* JOURNEY */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.2rem 60px", textAlign: "center" }}>
        <h2 style={{ color: GOLD, fontSize: "28px" }}>THE FOUNDATION SCHOOL JOURNEY</h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(5, 1fr)", gap: "12px", marginTop: "24px" }}>
          {["NEW BIRTH\nIdentity", "SPIRITUAL MILK\nDoctrine", "GROWING IN LOVE\nCharacter", "STEWARDSHIP\nResponsibility", "ANAZAO CULTURES\nFamily & Mission"].map((t, i) => (
            <div key={i} style={{ border: `1px solid ${GOLD}`, borderRadius: "14px", padding: "18px 10px", background: "#0a0a0a", whiteSpace: "pre-line", fontWeight: "700", fontSize: "14px", lineHeight: "1.5" }}>
              <span style={{ color: GOLD, fontSize: "22px" }}>{String(i + 1).padStart(2, "0")}</span><br />{t}
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.2rem 80px" }}>
        <h2 style={{ textAlign: "center", color: GOLD, fontSize: "32px", marginBottom: "8px" }}>THE FIVE-COURSE TRAINING PATH</h2>
        <p style={{ textAlign: "center", color: "#bbb", marginBottom: "30px" }}>Click a course to expand full teaching, scriptures, and objectives.</p>
        {courses.map((c, idx) => (
          <div key={idx} style={{ border: `1px solid ${open === idx ? GOLD : "#333"}`, borderRadius: "16px", marginBottom: "16px", overflow: "hidden", background: "#0a0a0a" }}>
            <button onClick={() => setOpen(open === idx ? -1 : idx)} style={{ width: "100%", textAlign: "left", background: "none", border: "none", color: "#fff", padding: "20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span><span style={{ color: GOLD, fontWeight: "900", fontSize: "20px", marginRight: "12px" }}>{c.num}</span><strong style={{ fontSize: "18px" }}>{c.title}</strong><br /><span style={{ color: "#bbb", fontSize: "14px", marginLeft: "42px" }}>{c.subtitle}</span></span>
              <span style={{ color: GOLD, fontSize: "24px" }}>{open === idx ? "−" : "+"}</span>
            </button>
            {open === idx && (
              <div style={{ padding: "0 20px 24px", lineHeight: "1.7", color: "#ddd" }}>
                <p style={{ color: GOLD_LIGHT, fontWeight: "700" }}>Central Theme: {c.theme}</p>
                <p>{c.overview}</p>
                <h4 style={{ color: GOLD }}>Scriptural Foundation</h4>
                <p><strong>Primary:</strong> {c.primary.join(" • ")}</p>
                <p><strong>Supporting:</strong> {c.supporting.join(" • ")}</p>
                <h4 style={{ color: GOLD }}>Doctrinal Notes</h4>
                <ul>{c.notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
                <h4 style={{ color: GOLD }}>Learning Objectives</h4>
                <ul>{c.objectives.map((o, i) => <li key={i}>{o}</li>)}</ul>
                <h4 style={{ color: GOLD }}>Practical Application</h4><p>{c.application}</p>
                <p style={{ background: "#111", borderLeft: `3px solid ${GOLD}`, padding: "12px 16px", marginTop: "16px" }}><strong style={{ color: GOLD }}>Key Memory Scripture:</strong> {c.memory}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* ENROLL + AUTO ADMISSION - NEW EMOJIS */}
      <section id="enroll" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.2rem 80px" }}>
        <div style={{ border: `1px solid ${GOLD}`, borderRadius: "20px", overflow: "hidden", background: "#0a0a0a" }}>
          <div style={{ textAlign: "center", padding: "36px 24px 20px" }}>
            <h2 style={{ color: GOLD, fontSize: isMobile ? "26px" : "32px", margin: "0 0 8px" }}>{IC.crown} ENROLL IN FOUNDATION SCHOOL</h2>
            <p style={{ color: "#bbb", maxWidth: "600px", margin: "0 auto", lineHeight: "1.7" }}>Fill this form. Your Admission Number is generated instantly from your first name + 2027. Save it — you will use it to log in to the Student Portal.</p>
          </div>
          {!admission ? (
            <form onSubmit={handleEnroll} style={{ padding: "10px 26px 28px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0 18px" }}>
              <div><label style={labelStyle}>FIRST NAME *</label><input required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} placeholder="e.g. Habert" style={inputStyle} /></div>
              <div><label style={labelStyle}>LAST NAME</label><input value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} placeholder="e.g. Mande" style={inputStyle} /></div>
              <div><label style={labelStyle}>PHONE / WHATSAPP *</label><input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="e.g. 0722123456" style={inputStyle} /></div>
              <div><label style={labelStyle}>EMAIL</label><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@gmail.com" style={inputStyle} /></div>
              <div style={{ gridColumn: isMobile ? "auto" : "1 / -1" }}><label style={labelStyle}>LOCATION / BRANCH</label><input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} placeholder="e.g. Eldoret" style={inputStyle} /></div>
              <div style={{ gridColumn: "1 / -1", background: "#111", borderRadius: "12px", padding: "14px 16px", fontSize: "13px", color: "#bbb", lineHeight: "1.6", textAlign: "center" }}>Your Admission will look like: <strong style={{ color: GOLD }}>{form.firstName ? form.firstName.toUpperCase().replace(/[^A-Z]/g, "") : "YOURNAME"}-2027-001</strong> • Your password will be your first name + last 4 digits of your phone.</div>
              <button type="submit" style={{ gridColumn: "1 / -1", background: GOLD, color: "#000", border: "none", padding: "15px", borderRadius: "30px", fontWeight: "800", cursor: "pointer", fontSize: "16px", marginTop: "10px" }}>GENERATE MY ADMISSION {IC.key}</button>
            </form>
          ) : (
            <div style={{ padding: "10px 26px 30px", textAlign: "center" }}>
              <div style={{ background: "#111", border: `2px solid ${GOLD}`, borderRadius: "16px", padding: "24px 18px" }}>
                <p style={{ fontSize: "40px", margin: "0" }}>{IC.crown}</p>
                <h3 style={{ margin: "10px 0 4px" }}>Welcome to Foundation School, {admission.firstName}!</h3>
                <p style={{ color: "#bbb", margin: "0 0 16px" }}>Your enrollment is successful. Save your details below:</p>
                <p style={{ fontSize: "12px", letterSpacing: "2px", color: GOLD, fontWeight: "700", margin: 0 }}>YOUR ADMISSION NUMBER</p>
                <p style={{ fontSize: isMobile ? "26px" : "34px", fontWeight: "900", color: GOLD, margin: "8px 0", letterSpacing: "1px" }}>{admission.id}</p>
                <p style={{ color: "#ddd", margin: "0" }}>Password: <strong style={{ color: GOLD_LIGHT }}>{admission.password}</strong> <span style={{ color: "#888", fontSize: "13px" }}>(Keep this safe — use it to log in below)</span></p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
                  <button onClick={copyAdmission} style={{ background: "#fff", color: "#000", border: "none", padding: "12px 20px", borderRadius: "30px", fontWeight: "800", cursor: "pointer" }}>{copied ? "✦ Copied!" : `${IC.feather} Copy Admission`}</button>
                  <a href={`https://wa.me/${admission.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hello ANAZAO, I just enrolled in Foundation School. My Admission is ${admission.id} and my name is ${admission.name}`)}`} target="_blank" rel="noreferrer" style={{ background: "#25D366", color: "#fff", padding: "12px 20px", borderRadius: "30px", fontWeight: "800", textDecoration: "none" }}>Send via WhatsApp {IC.dove}</a>
                  <a href={`mailto:${admission.email}?subject=My ANAZAO Foundation School Admission&body=Hello ${admission.name},%0D%0A%0D%0AWelcome to ANAZAO Foundation School!%0D%0AYour Admission Number is: ${admission.id}%0D%0AYour Password is: ${admission.password}%0D%0A%0D%0AKeep it safe and use it to log in to the Student Portal.`} style={{ background: "transparent", border: `1px solid ${GOLD}`, color: GOLD, padding: "12px 20px", borderRadius: "30px", fontWeight: "800", textDecoration: "none" }}>Send via Email {IC.scroll}</a>
                </div>
                <p style={{ color: "#888", fontSize: "12px", marginTop: "16px" }}>Screenshot this page too. Your Admission is also saved on this device.</p>
                <button onClick={() => { setIsLoggedIn(true); setCurrentStudent(admission); document.getElementById("student-portal").scrollIntoView({ behavior: "smooth" }); }} style={{ background: GOLD, color: "#000", border: "none", padding: "12px 24px", borderRadius: "30px", fontWeight: "800", cursor: "pointer", marginTop: "14px" }}>Continue To Portal {IC.star}</button>
              </div>
              <button onClick={() => { setAdmission(null); setForm({ firstName: "", lastName: "", phone: "", email: "", location: "" }); }} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", marginTop: "14px", textDecoration: "underline" }}>Enroll another student</button>
            </div>
          )}
        </div>
      </section>

      {/* STUDENT PORTAL - 52 WEEKS + GATING + EXAM */}
      <section id="student-portal" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.2rem 80px" }}>
        <div style={{ border: `1px solid ${GOLD}`, borderRadius: "20px", overflow: "hidden", background: "#0a0a0a" }}>
          <div style={{ textAlign: "center", padding: isMobile ? "30px 20px 20px" : "40px 30px 24px" }}>
            <p style={{ letterSpacing: "4px", fontSize: "11px", color: GOLD, fontWeight: "700", margin: 0 }}>ENROLLED STUDENTS ONLY</p>
            <h2 style={{ color: GOLD, fontSize: isMobile ? "26px" : "32px", margin: "12px 0 8px" }}>{IC.scroll} 52-WEEK STUDENT PORTAL</h2>
            <p style={{ color: "#bbb", maxWidth: "640px", margin: "0 auto", lineHeight: "1.7" }}>{isLoggedIn ? `Welcome ${currentStudent?.firstName} — You are on Week ${unlockedWeek} of 52. Finish daily work + pass exam to unlock next week.` : "Log in with your Admission Number. Weeks unlock one by one — you cannot skip ahead."}</p>
          </div>

          {!isLoggedIn ? (
            <div style={{ padding: "0 26px 28px" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr", borderTop: "1px solid #222" }}>
                <div style={{ padding: "26px", borderRight: isMobile ? "none" : "1px solid #222" }}>
                  <h3 style={{ color: GOLD_LIGHT, margin: "0 0 16px" }}>WHAT'S INSIDE</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2.1", color: "#ddd", fontSize: "15px" }}>
                    <li>{IC.key} Course 01 — New Birth • Weeks 1-10</li>
                    <li>{IC.key} Course 02 — Spiritual Milk • Weeks 11-20</li>
                    <li>{IC.key} Course 03 — Growing In Love • Weeks 21-30</li>
                    <li>{IC.key} Course 04 — Stewardship • Weeks 31-42</li>
                    <li>{IC.key} Course 05 — Anazao Cultures • Weeks 43-52</li>
                  </ul>
                  <div style={{ background: "#111", borderRadius: "12px", padding: "14px 16px", marginTop: "18px", fontSize: "14px", color: "#bbb", lineHeight: "1.6" }}>Includes: Daily work • Weekly assignments • Foundational exams • Progress tracking • Certificate</div>
                </div>
                <div style={{ padding: "26px", background: "#111" }}>
                  <h3 style={{ color: "#fff", margin: "0 0 6px" }}>STUDENT LOGIN</h3>
                  <form onSubmit={handleLogin}>
                    <label style={labelStyle}>ADMISSION NUMBER</label><input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="e.g. HABERT-2027-001" style={inputStyle} />
                    <label style={labelStyle}>PASSWORD</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="firstname + last 4 digits" style={inputStyle} />
                    <button type="submit" style={{ width: "100%", background: GOLD, color: "#000", border: "none", padding: "14px", borderRadius: "30px", fontWeight: "800", cursor: "pointer" }}>LOGIN TO PORTAL {IC.key}</button>
                    {loginMsg && <p style={{ background: "#1a1400", border: `1px solid ${GOLD}`, color: GOLD_LIGHT, padding: "12px", borderRadius: "10px", fontSize: "13px", lineHeight: "1.6", marginTop: "16px" }}>{loginMsg}</p>}
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ padding: "0 20px 28px" }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "18px" }}>
                {WEEKS.map(w => { const locked = w.week > unlockedWeek; const done = w.week < unlockedWeek; return (<button key={w.week} disabled={locked} onClick={() => { setSelectedWeek(w.week); setExamResult(null); setExamAnswers({}); }} style={{ width: "42px", height: "42px", borderRadius: "50%", border: `1px solid ${selectedWeek === w.week ? GOLD : "#333"}`, background: locked ? "#111" : done ? GOLD : selectedWeek === w.week ? GOLD : "#000", color: locked ? "#555" : done || selectedWeek === w.week ? "#000" : "#fff", cursor: locked ? "not-allowed" : "pointer", fontWeight: "800", fontSize: "12px" }}>{locked ? IC.key : done ? "✓" : w.week}</button>); })}
              </div>
              <p style={{ textAlign: "center", color: "#888", fontSize: "13px" }}>{IC.key} = Locked • ✓ = Completed • Gold = Current</p>

              {currentWeekData && (
                <div style={{ border: `1px solid ${GOLD}`, borderRadius: "16px", padding: "22px", background: "#111", marginTop: "16px" }}>
                  <p style={{ color: GOLD, fontSize: "12px", letterSpacing: "2px", fontWeight: "700", margin: 0 }}>{currentWeekData.course} • WEEK {currentWeekData.week} OF 52</p>
                  <h3 style={{ fontSize: "24px", margin: "8px 0" }}>{IC.lamp} {currentWeekData.title}</h3>
                  <p style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{IC.scroll} {currentWeekData.verse}</p>
                  <p style={{ lineHeight: "1.7", color: "#eee" }}>{currentWeekData.lesson}</p>
                  <div style={{ background: "#000", borderLeft: `3px solid ${GOLD}`, padding: "14px 16px", borderRadius: "8px", marginTop: "14px" }}><strong style={{ color: GOLD }}>{IC.feather} ASSIGNMENT:</strong><p style={{ margin: "6px 0 0" }}>{currentWeekData.assignment}</p></div>

                  <h4 style={{ color: GOLD, marginTop: "20px" }}>{IC.candle} DAILY WORK — {daysDone}/7 Done</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {currentWeekData.daily.map((d, i) => (
                      <label key={i} style={{ display: "flex", gap: "10px", alignItems: "center", background: "#000", padding: "12px 14px", borderRadius: "10px", cursor: "pointer", border: completedDays[`${selectedWeek}-${i}`] ? `1px solid ${GOLD}` : "1px solid #222" }}>
                        <input type="checkbox" checked={!!completedDays[`${selectedWeek}-${i}`]} onChange={() => toggleDay(selectedWeek, i)} style={{ accentColor: GOLD, width: "18px", height: "18px" }} />
                        <span style={{ textDecoration: completedDays[`${selectedWeek}-${i}`] ? "line-through" : "none", color: completedDays[`${selectedWeek}-${i}`] ? "#888" : "#eee" }}>{d}</span>
                      </label>
                    ))}
                  </div>

                  {!allDaysDone ? (
                    <p style={{ textAlign: "center", color: "#888", marginTop: "20px", background: "#000", padding: "14px", borderRadius: "10px" }}>{IC.key} Complete all 7 days to unlock the Foundational Exam.</p>
                  ) : (
                    <div style={{ marginTop: "22px" }}>
                      <h4 style={{ color: GOLD }}>{IC.vessel} FOUNDATIONAL EXAM — WEEK {currentWeekData.week} (Need 4/5)</h4>
                      {currentWeekData.exam.map((q, qi) => (
                        <div key={qi} style={{ background: "#000", padding: "14px", borderRadius: "10px", marginBottom: "10px" }}>
                          <p style={{ margin: "0 0 10px", fontWeight: "700" }}>{qi + 1}. {q.q}</p>
                          {q.options.map((opt, oi) => (<label key={oi} style={{ display: "block", padding: "6px 0", cursor: "pointer", color: examAnswers[qi] === oi ? GOLD : "#ddd" }}><input type="radio" name={`q-${qi}`} checked={examAnswers[qi] === oi} onChange={() => setExamAnswers({ ...examAnswers, [qi]: oi })} style={{ accentColor: GOLD, marginRight: "8px" }} />{opt}</label>))}
                        </div>
                      ))}
                      <button onClick={() => submitExam(currentWeekData)} style={{ width: "100%", background: GOLD, color: "#000", border: "none", padding: "14px", borderRadius: "30px", fontWeight: "800", cursor: "pointer" }}>SUBMIT EXAM {IC.star}</button>
                      {examResult && <p style={{ textAlign: "center", background: examResult.pass ? "#0a2a0a" : "#2a0a0a", border: `1px solid ${examResult.pass ? "#25D366" : RED}`, padding: "14px", borderRadius: "10px", marginTop: "14px" }}>{examResult.message}</p>}
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                    <button disabled={selectedWeek <= 1} onClick={() => setSelectedWeek(selectedWeek - 1)} style={{ background: "none", border: "none", color: GOLD, cursor: "pointer", fontWeight: "700" }}>← Previous Week</button>
                    <button disabled={selectedWeek >= unlockedWeek} onClick={() => setSelectedWeek(selectedWeek + 1)} style={{ background: "none", border: "none", color: GOLD, cursor: "pointer", fontWeight: "700" }}>Next Week →</button>
                  </div>
                </div>
              )}

              <div style={{ textAlign: "center", marginTop: "26px", border: `1px dashed ${GOLD}`, borderRadius: "14px", padding: "20px" }}>
                <h4 style={{ color: GOLD, margin: "0 0 8px" }}>{IC.feather} 52-WEEK WORKBOOK (PDF)</h4>
                <p style={{ color: "#bbb", fontSize: "14px", margin: "0 0 14px" }}>Print all 52 weeks, daily work, and exams as a physical workbook for church.</p>
                <button onClick={() => window.print()} style={{ background: GOLD, color: "#000", border: "none", padding: "12px 26px", borderRadius: "30px", fontWeight: "800", cursor: "pointer" }}>Download / Print Workbook {IC.scroll}</button>
                <p style={{ color: "#666", fontSize: "12px", marginTop: "10px" }}>In print dialog, choose "Save as PDF" to get your PDF workbook.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* OUTCOME */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.2rem 80px", textAlign: "center" }}>
        <h2 style={{ color: GOLD, fontSize: "30px" }}>FROM FOUNDATION TO MATURITY</h2>
        <p style={{ color: "#ccc", lineHeight: "1.7" }}>Upon completing the five-course pathway, participants should demonstrate:</p>
        <div style={{ textAlign: "left", maxWidth: "600px", margin: "20px auto", lineHeight: "2", color: "#eee" }}>
          ✓ A clear understanding of their identity in Christ<br />✓ Sound knowledge of foundational Christian doctrine<br />✓ A growing expression of Christlike character<br />✓ Responsible stewardship and servant leadership<br />✓ An understanding of the values and culture of ANAZAO<br />✓ Readiness to participate meaningfully in fellowship and service
        </div>
        <div style={{ border: `1px solid ${GOLD}`, borderRadius: "16px", padding: "30px 20px", marginTop: "30px" }}>
          <h3 style={{ color: GOLD, fontSize: "22px", margin: "0" }}>ROOTED IN CHRIST. ESTABLISHED IN TRUTH. BUILT TO SERVE.</h3>
          <p style={{ fontStyle: "italic", marginTop: "14px" }}>“For other foundation can no man lay than that is laid, which is Jesus Christ.” — 1 Corinthians 3:11</p>
          <a href="#enroll" style={{ display: "inline-block", background: RED, color: "#fff", padding: "14px 30px", borderRadius: "30px", fontWeight: "800", textDecoration: "none", marginTop: "10px" }}>ENROLL IN FOUNDATION SCHOOL</a>
        </div>
      </section>
    </div>
  );
}
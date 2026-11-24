import React, { useState, useEffect } from "react";

const GOLD = "#D4AF37";
const GOLD_LIGHT = "#F5D67B";
const RED = "#C1272D";
const WHATSAPP = "https://wa.me/254104810505?text=Hello%20ANAZAO%20Foundation%20School%2C%20I%20want%20to%20enroll"; // <-- CHANGE YOUR NUMBER HERE

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
    memory: "2 Corinthians 5:17",
    lessons: [
      { title: "Lesson 1: What Is The New Birth?", scripture: "John 3:3-7", content: "Jesus said you must be born again. This is not joining a church. It is God giving you a new spirit. Your old life of sin is washed, and you receive a new nature that desires God. Just as you did nothing to be born physically, you receive this new birth by faith in Jesus Christ.", assignment: "In 5 lines, write your testimony: What changed when you gave your life to Christ?" },
      { title: "Lesson 2: Repentance & Faith", scripture: "Acts 3:19", content: "Repentance is turning AWAY from sin and turning TOWARDS God. Faith is trusting that Jesus died for your sins and rose again. Repentance without faith is guilt. Faith without repentance is empty. True salvation has both.", assignment: "What is one habit God is asking you to turn away from? Write it down and pray about it." },
      { title: "Lesson 3: Your New Identity", scripture: "2 Corinthians 5:17", content: "You are no longer defined by your past, your failures, or what people called you. In Christ, you are a child of God, forgiven, loved, and new. Your identity is not what you DO, it is who God says you ARE.", assignment: "Memorise 2 Corinthians 5:17 and declare it out loud every morning this week." },
    ]
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
    memory: "Hebrews 6:1-2",
    lessons: [
      { title: "Lesson 1: The Word Is Your Food", scripture: "1 Peter 2:2", content: "A baby cannot grow without milk. A believer cannot grow without the Word. The Bible is not just a book to read on Sunday, it is daily food. Start with 1 chapter a day. Read slowly, pray it, obey it.", assignment: "Read John chapter 1 today. Write down 1 verse that spoke to you." },
      { title: "Lesson 2: Repentance & Baptism", scripture: "Acts 2:38", content: "Baptism is your public burial of the old life and resurrection into new life. It does not save you, it shows you are saved. It is obedience to Jesus' command in Matthew 28:19.", assignment: "If you have not been baptised in water, speak to your leader about baptism." },
      { title: "Lesson 3: Resurrection & Judgement", scripture: "Hebrews 6:1-2", content: "Our hope is not just for this life. Jesus rose again, and we will rise too. And we will all stand before God. This is not to fear us, it is to keep us faithful and holy.", assignment: "What does eternal life mean to you? Write your answer in 3 sentences." },
    ]
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
    memory: "John 13:34-35",
    lessons: [
      { title: "Lesson 1: Love Is The Proof", scripture: "John 13:35", content: "Jesus said people will know you are His disciple by your LOVE, not your title, not your gift, not your prayer. Love is patient, kind, not proud, not rude. Love is action, not just feeling.", assignment: "Show love practically today: Call someone you have not spoken to, forgive one person, help one person." },
      { title: "Lesson 2: Forgiveness", scripture: "Ephesians 4:32", content: "God forgave you a debt you could never pay. Now He asks you to forgive others. Forgiveness does not mean what they did was right. It means you release them to God and free your own heart.", assignment: "Write the name of someone you need to forgive. Pray for them for 3 days." },
      { title: "Lesson 3: Fruit of The Spirit", scripture: "Galatians 5:22-23", content: "Character is fruit. It grows slowly, daily, as you walk with the Holy Spirit. You cannot force fruit. You abide in Christ, and He produces love, joy, peace, patience in you.", assignment: "Which fruit do you need most right now? Ask the Holy Spirit to grow it in you this week." },
    ]
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
    memory: "1 Corinthians 4:2",
    lessons: [
      { title: "Lesson 1: You Are A Steward", scripture: "1 Corinthians 4:2", content: "Everything you have - time, money, gifts, influence - belongs to God. You are a manager, not an owner. God will ask: What did you do with what I gave you?", assignment: "List 3 things God has entrusted to you. How are you managing them?" },
      { title: "Lesson 2: Servant Leadership", scripture: "Mark 10:43-45", content: "In the world, leaders are served. In the Kingdom, leaders serve. Jesus washed feet. True leadership is not a title to be proud of, it is a towel to serve with.", assignment: "Serve someone this week with no one watching. No photo, no praise." },
      { title: "Lesson 3: Faithfulness In Small Things", scripture: "Luke 16:10", content: "God promotes the faithful, not the talented. If you are faithful with cleaning chairs, God can trust you with souls. Do small things with excellence.", assignment: "Arrive early to church this Sunday and serve in any area needed." },
    ]
  },
  {
    num: "05",
    title: "ANAZAO CULTURES",
    subtitle: "The Foundation of Church Identity and Community",
    theme: "Understanding the values, practices, and shared responsibilities of ANAZAO The Family of Grace Global.",
    overview: "Every spiritual community is strengthened by shared convictions, values, relationships, and practices rooted in biblical truth. ANAZAO Cultures introduces participants to the distinctive values and family lifestyle of ANAZAO THE FAMILY OF GRACE GLOBAL. It establishes an understanding of honour, discipline, unity, teamwork, fellowship, accountability, and mutual responsibility.",
    primary: ["Acts 2:42-47", "Hebrews 10:24-25", "Psalm 133:1-3", "1 Corinthians 12:12-27", "Ephesians 4:11-16"],
    supporting: ["1 Corinthians 14:40", "Romans 12:4-11", "Philippians 2:1-5", "Hebrews 13:7,17", "1 Thessalonians 5:12-13", "1 Peter 5:5-6", "2 Timothy 2:2"],
    notes: ["Spiritual Family: Understanding the Church as the Body of Christ.", "Fellowship: Building relationships through shared faith and mutual encouragement.", "Honour: Demonstrating biblical respect and appreciation for others.", "Unity: Recognising the importance of shared purpose despite different gifts and functions.", "Discipline and Order: Maintaining a healthy community governed by biblical principles.", "Teamwork: Working together towards the mission of the Church.", "Spiritual Growth: Equipping believers to serve and strengthen the Body of Christ.", "Generational Continuity: Entrusting biblical truth to faithful people who can teach others."],
    objectives: ["Explain the biblical understanding of the Church as a spiritual family.", "Understand the values and culture of ANAZAO.", "Recognise the importance of honour and unity.", "Participate responsibly in fellowship and service.", "Understand biblical discipline and order.", "Appreciate teamwork and mutual accountability.", "Contribute positively to the spiritual life of the community."],
    application: "Participants should demonstrate active participation in fellowship, responsible teamwork, respect, mutual care, and commitment to the shared mission of the Church.",
    memory: "Acts 2:42",
    lessons: [
      { title: "Lesson 1: We Are Family", scripture: "Acts 2:42-47", content: "ANAZAO is not just a church you attend, it is a family you belong to. Family eats together, prays together, carries each other's burdens, and grows together. You are not a visitor, you are family.", assignment: "Introduce yourself to 3 people in church you don't know yet." },
      { title: "Lesson 2: Honour & Unity", scripture: "Psalm 133:1", content: "Where there is unity, God commands blessing. Honour is how we protect unity. We honour leaders, honour each other, honour the house of God. We don't gossip, we build up.", assignment: "This week, speak honour about someone - to them and about them." },
      { title: "Lesson 3: Serve In The House", scripture: "1 Corinthians 12:27", content: "Every member has a part. You are not just a seat, you are a stone in the building. Find where you can serve - ushering, media, worship, children's church, cleaning - and serve faithfully.", assignment: "Ask your leader: Where can I serve in ANAZAO?" },
    ]
  },
];

export default function FoundationSchool() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(0);
  const [activeLesson, setActiveLesson] = useState(null); // {courseIdx, lessonIdx}
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleComplete = (key) => {
    setCompleted(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const currentLesson = activeLesson ? courses[activeLesson.courseIdx].lessons[activeLesson.lessonIdx] : null;
  const currentCourse = activeLesson ? courses[activeLesson.courseIdx] : null;

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* HERO */}
      <section style={{ textAlign: "center", padding: isMobile ? "110px 1.2rem 60px" : "140px 2rem 90px" }}>
        <p style={{ letterSpacing: "4px", fontSize: "11px", color: GOLD, fontWeight: "700" }}>ANAZAO THE FAMILY OF GRACE GLOBAL</p>
        <h1 style={{ fontSize: isMobile ? "42px" : "72px", lineHeight: "1", margin: "16px 0", color: GOLD, textShadow: "0 0 30px rgba(212,175,55,0.4)" }}>FOUNDATION<br />SCHOOL</h1>
        <p style={{ letterSpacing: "3px", fontSize: isMobile ? "13px" : "16px", fontWeight: "700" }}>ESTABLISHED IN TRUTH. EQUIPPED FOR PURPOSE.</p>
        <p style={{ maxWidth: "720px", margin: "24px auto", lineHeight: "1.7", color: "#ddd" }}>
          Building Strong Foundations. Raising Mature Believers. No videos needed to start — read the lesson, do the assignment, grow in Christ. A structured discipleship programme to establish believers in truth, cultivate Christlike character, and prepare them for the life and mission of the Church.
        </p>
        <p style={{ fontStyle: "italic", color: GOLD_LIGHT, marginTop: "20px" }}>“A believer must be established in truth before being entrusted with responsibility.”</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "30px" }}>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ background: GOLD, color: "#000", padding: "14px 28px", borderRadius: "30px", fontWeight: "800", textDecoration: "none" }}>ENROLL VIA WHATSAPP 💬</a>
          <a href="#courses" style={{ border: `1px solid ${GOLD}`, color: GOLD, padding: "14px 28px", borderRadius: "30px", fontWeight: "800", textDecoration: "none" }}>START READING NOW ↓</a>
        </div>
        <p style={{ marginTop: "20px", fontSize: "13px", color: "#25D366", fontWeight: "700" }}>✅ No Videos Needed • Read + Study + Discuss on WhatsApp</p>
        <p style={{ marginTop: "10px", fontSize: "11px", letterSpacing: "3px", color: "#aaa" }}>APOSTOLIC • PROPHETIC • DISCIPLESHIP • TRANSFORMATIONAL</p>
      </section>

      {/* HOW TO STUDY - NEW */}
      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.2rem 50px" }}>
        <div style={{ border: `1px solid ${GOLD}`, borderRadius: "16px", padding: "24px", background: "#0a0a0a", textAlign: "center" }}>
          <h3 style={{ color: GOLD, margin: "0 0 16px" }}>HOW TO STUDY WITHOUT VIDEOS — 3 SIMPLE STEPS</h3>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "16px", textAlign: "left" }}>
            <div><strong style={{ color: GOLD_LIGHT }}>1. 📖 READ</strong><br/><span style={{ color: "#ccc", fontSize: "14px", lineHeight: "1.6" }}>Click a course below, then click READ LESSON. Read the lesson on your phone — 3 minutes.</span></div>
            <div><strong style={{ color: GOLD_LIGHT }}>2. ✍️ DO ASSIGNMENT</strong><br/><span style={{ color: "#ccc", fontSize: "14px", lineHeight: "1.6" }}>Answer the assignment question in your notebook. This is how truth becomes yours.</span></div>
            <div><strong style={{ color: GOLD_LIGHT }}>3. 💬 SEND ON WHATSAPP</strong><br/><span style={{ color: "#ccc", fontSize: "14px", lineHeight: "1.6" }}>Send your assignment to your Foundation School leader on WhatsApp. Then mark lesson complete.</span></div>
          </div>
        </div>
      </section>

      {/* LESSON READER - NEW */}
      {activeLesson && currentLesson && (
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.2rem 40px" }}>
          <div style={{ border: `2px solid ${GOLD}`, borderRadius: "18px", padding: isMobile ? "20px" : "32px", background: "#111" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
              <p style={{ color: GOLD, fontWeight: "800", letterSpacing: "2px", fontSize: "12px", margin: 0 }}>COURSE {currentCourse.num} • {currentCourse.title}</p>
              <button onClick={() => setActiveLesson(null)} style={{ background: "none", border: `1px solid ${GOLD}`, color: GOLD, padding: "6px 14px", borderRadius: "20px", cursor: "pointer" }}>✕ Close Lesson</button>
            </div>
            <h2 style={{ fontSize: isMobile ? "24px" : "30px", margin: "12px 0 6px" }}>{currentLesson.title}</h2>
            <p style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>📖 {currentLesson.scripture}</p>
            <p style={{ lineHeight: "1.8", color: "#eee", fontSize: "16px" }}>{currentLesson.content}</p>
            <div style={{ background: "#000", borderLeft: `3px solid ${GOLD}`, padding: "16px", marginTop: "20px", borderRadius: "8px" }}>
              <strong style={{ color: GOLD }}>✍️ YOUR ASSIGNMENT:</strong>
              <p style={{ margin: "8px 0 0", lineHeight: "1.7" }}>{currentLesson.assignment}</p>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "22px" }}>
              <a href={`${WHATSAPP}&text=${encodeURIComponent(`Hello, I finished ${currentCourse.title} - ${currentLesson.title}. My assignment: `)}`} target="_blank" rel="noreferrer" style={{ background: "#25D366", color: "#fff", padding: "12px 22px", borderRadius: "30px", fontWeight: "800", textDecoration: "none", fontSize: "14px" }}>Send Assignment on WhatsApp 💬</a>
              <button onClick={() => toggleComplete(`${activeLesson.courseIdx}-${activeLesson.lessonIdx}`)} style={{ background: completed[`${activeLesson.courseIdx}-${activeLesson.lessonIdx}`] ? GOLD : "transparent", color: completed[`${activeLesson.courseIdx}-${activeLesson.lessonIdx}`] ? "#000" : GOLD, border: `1px solid ${GOLD}`, padding: "12px 22px", borderRadius: "30px", fontWeight: "800", cursor: "pointer", fontSize: "14px" }}>
                {completed[`${activeLesson.courseIdx}-${activeLesson.lessonIdx}`] ? "✓ Completed" : "Mark As Complete"}
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
              <button disabled={activeLesson.lessonIdx===0} onClick={() => setActiveLesson({ ...activeLesson, lessonIdx: activeLesson.lessonIdx-1 })} style={{ background: "none", border: "none", color: activeLesson.lessonIdx===0 ? "#555" : GOLD, cursor: "pointer", fontWeight: "700" }}>← Previous Lesson</button>
              <button disabled={activeLesson.lessonIdx===2} onClick={() => setActiveLesson({ ...activeLesson, lessonIdx: activeLesson.lessonIdx+1 })} style={{ background: "none", border: "none", color: activeLesson.lessonIdx===2 ? "#555" : GOLD, cursor: "pointer", fontWeight: "700" }}>Next Lesson →</button>
            </div>
          </div>
        </section>
      )}

      {/* JOURNEY STRIP */}
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

      {/* COURSES */}
      <section id="courses" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.2rem 80px" }}>
        <h2 style={{ textAlign: "center", color: GOLD, fontSize: "32px", marginBottom: "8px" }}>THE FIVE-COURSE TRAINING PATH</h2>
        <p style={{ textAlign: "center", color: "#bbb", marginBottom: "30px" }}>Click a course to expand. Then click READ LESSON to study without video.</p>
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

                {/* STUDY LESSONS - NEW */}
                <h4 style={{ color: GOLD, marginTop: "22px" }}>📖 STUDY LESSONS — No Video Needed</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {c.lessons.map((l, li) => {
                    const key = `${idx}-${li}`;
                    return (
                      <div key={li} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap", background: "#111", border: `1px solid #333`, borderRadius: "12px", padding: "14px 16px" }}>
                        <div><strong>{l.title}</strong><br/><span style={{ color: GOLD_LIGHT, fontSize: "13px" }}>{l.scripture} • 3 min read</span></div>
                        <button onClick={() => { setActiveLesson({ courseIdx: idx, lessonIdx: li }); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ background: GOLD, color: "#000", border: "none", padding: "9px 18px", borderRadius: "20px", fontWeight: "800", cursor: "pointer", whiteSpace: "nowrap" }}>
                          {completed[key] ? "✓ Read Again" : "READ LESSON →"}
                        </button>
                      </div>
                    );
                  })}
                </div>

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

      {/* OUTCOME */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.2rem 80px", textAlign: "center" }}>
        <h2 style={{ color: GOLD, fontSize: "30px" }}>FROM FOUNDATION TO MATURITY</h2>
        <p style={{ color: "#ccc", lineHeight: "1.7" }}>Upon completing the five-course pathway, participants should demonstrate:</p>
        <div style={{ textAlign: "left", maxWidth: "600px", margin: "20px auto", lineHeight: "2", color: "#eee" }}>
          ✓ A clear understanding of their identity in Christ<br/>✓ Sound knowledge of foundational Christian doctrine<br/>✓ A growing expression of Christlike character<br/>✓ Responsible stewardship and servant leadership<br/>✓ An understanding of the values and culture of ANAZAO<br/>✓ Readiness to participate meaningfully in fellowship and service
        </div>
        <div style={{ border: `1px solid ${GOLD}`, borderRadius: "16px", padding: "30px 20px", marginTop: "30px" }}>
          <h3 style={{ color: GOLD, fontSize: "22px", margin: "0" }}>ROOTED IN CHRIST. ESTABLISHED IN TRUTH. BUILT TO SERVE.</h3>
          <p style={{ fontStyle: "italic", marginTop: "14px" }}>“For other foundation can no man lay than that is laid, which is Jesus Christ.” — 1 Corinthians 3:11</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: RED, color: "#fff", padding: "14px 30px", borderRadius: "30px", fontWeight: "800", textDecoration: "none", marginTop: "10px" }}>ENROLL IN FOUNDATION SCHOOL 💬</a>
        </div>
      </section>
    </div>
  );
}
import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin, BookOpen, ArrowRight } from "lucide-react";
import { colors } from "../data/colors";
import eventPoster from "../assets/events/prayer-camp-season3.jpg";

function UpcomingEvent() {
  const event = {
    title: "Prayer Camp Season 3",
    theme: "Highways & Hedges",
    scripture: "Luke 14:23",
    date: "31st July 2026",
    time: "6:00 PM",
    venue: "Great Recovery",
    description:
      "Prayer Camp Season 3 is a divine gathering of believers seeking revival, restoration, healing, prophetic direction and a deeper encounter with God. Through prayer, worship, fasting and the ministry of the Word we prepare a generation for Kingdom assignment.",
  };

  return (
    <section style={{ background: colors.black, padding: "110px 7%", position: "relative", overflow: "hidden" }}>
      {/* GOLD BACKGROUND GLOW */}
      <div style={{ position: "absolute", width: "650px", height: "650px", borderRadius: "50%", background: "rgba(212,175,55,.08)", filter: "blur(120px)", top: "-220px", right: "-180px" }} />
      <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(212,175,55,.05)", filter: "blur(100px)", bottom: "-200px", left: "-150px" }} />

      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "70px" }}>
        <p style={{ color: colors.gold, letterSpacing: "4px", textTransform: "uppercase", fontWeight: "600", marginBottom: "15px" }}>Upcoming Event</p>
        <h2 style={{ fontSize: "3.2rem", color: "#fff", marginBottom: "20px" }}>Experience Revival Together</h2>
        <p style={{ maxWidth: "760px", margin: "0 auto", color: "#bfbfbf", lineHeight: "1.9", fontSize: "1.05rem" }}>
          Join believers from different places for a powerful encounter with God through prayer, worship, prophetic ministry and the teaching of God's Word.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <img src={eventPoster} alt="Prayer Camp" style={{ width: "100%", borderRadius: "25px", border: `2px solid ${colors.gold}`, boxShadow: "0 30px 60px rgba(0,0,0,.45)" }} />
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p style={{ color: colors.gold, fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>Prayer Gathering</p>
          <h2 style={{ fontSize: "3rem", color: "#fff", marginTop: "15px", marginBottom: "10px" }}>{event.title}</h2>
          <h3 style={{ color: colors.gold, fontSize: "1.5rem", marginBottom: "30px" }}>Theme: {event.theme}</h3>
          <p style={{ color: "#d8d8d8", lineHeight: "2", fontSize: "1rem", marginBottom: "35px" }}>{event.description}</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "20px" }}>
            {[
              { Icon: CalendarDays, label: "DATE", val: event.date },
              { Icon: Clock3, label: "TIME", val: event.time },
              { Icon: MapPin, label: "VENUE", val: event.venue },
              { Icon: BookOpen, label: "SCRIPTURE", val: event.scripture },
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} style={{ background: "#111", border: `1px solid ${colors.gold}`, borderRadius: "18px", padding: "20px" }}>
                <item.Icon size={30} color={colors.gold} style={{ marginBottom: "12px" }} />
                <small style={{ color: colors.gold, letterSpacing: "2px" }}>{item.label}</small>
                <h4 style={{ color: "#fff", marginTop: "10px" }}>{item.val}</h4>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: "45px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <motion.a href="https://chat.whatsapp.com/D8HlNteiolD6xElC2S6A8C" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ textDecoration: "none" }}>
              <button style={{ background: "linear-gradient(135deg,#FFD700,#F5C542,#D4AF37)", color: "#000", border: "none", borderRadius: "50px", padding: "18px 42px", cursor: "pointer", fontWeight: "700", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 12px 35px rgba(255,215,0,.35)" }}>
                Register Now <ArrowRight size={18} />
              </button>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Revival Banner */}
      <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} style={{ marginTop: "100px", background: "linear-gradient(135deg,#111,#1b1b1b,#111)", border: `1px solid ${colors.gold}`, borderRadius: "30px", padding: "70px 50px", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,.45)" }}>
        <p style={{ color: colors.gold, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "15px", fontWeight: "700" }}>ANAZAO Prayer Camp 2026</p>
        <h2 style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3.5rem)", marginBottom: "25px", fontFamily: "'Cormorant Garamond', serif" }}>{event.theme}</h2>
        <p style={{ color: "#d7d7d7", maxWidth: "850px", margin: "0 auto", lineHeight: "2", fontSize: "1.05rem" }}>
          "Then the master said to the servant, Go out into the highways and hedges, and compel them to come in, that my house may be filled." <br /><br /> {event.scripture}
        </p>
        <motion.a href="https://chat.whatsapp.com/D8HlNteiolD6xElC2S6A8C" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block", marginTop: "40px", textDecoration: "none" }}>
          <button style={{ background: "linear-gradient(135deg,#FFD700,#F5C542,#D4AF37)", color: "#000", border: "none", borderRadius: "50px", padding: "18px 48px", fontWeight: "700", cursor: "pointer", fontSize: "1rem", boxShadow: "0 15px 40px rgba(255,215,0,.35)" }}>
            Join Prayer Camp
          </button>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default UpcomingEvent;
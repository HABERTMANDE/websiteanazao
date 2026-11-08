import { motion } from "framer-motion";
import { colors } from "../data/colors";
import weeklyImg from "../assets/images/weekly-10pm.jpeg";

function WeeklySessions() {
  const meetLink = "https://meet.google.com/txh-ipho-gsr";
  return (
    <section style={{ background: "#000", padding: "80px 1.5rem", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", justifyContent: "center" }}>
        
        {/* LEFT - BIG POSTER */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ flex: "1 1 480px", maxWidth: "620px" }}>
          <a href={meetLink} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
            <motion.img whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} src={weeklyImg} alt="Weekly 10PM Sessions" style={{ width: "100%", borderRadius: "24px", border: `2px solid ${colors.gold}`, boxShadow: "0 25px 70px rgba(255,215,0,.30)", cursor: "pointer", display: "block" }} />
          </a>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", margin: "14px 0 0", textAlign: "center", letterSpacing: "1.5px" }}>TAP IMAGE OR SCAN QR CODE TO JOIN</p>
        </motion.div>

        {/* RIGHT - BIG INFO */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ flex: "1 1 420px", maxWidth: "560px", textAlign: "left" }}>
          <p style={{ color: colors.gold, fontSize: "13px", letterSpacing: "4px", fontWeight: "800", margin: "0 0 14px" }}>WEEKLY 10 PM • MON - FRI</p>
          <h2 style={{ color: "#fff", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontFamily: "Montserrat, sans-serif", fontWeight: "800", margin: "0 0 14px", lineHeight: "1.1" }}>The Days of<br/>Jacob&apos;s Trouble</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", margin: "0 0 10px", fontStyle: "italic", lineHeight: "1.5" }}>The Word of the Season — Jeremiah 30:7</p>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", margin: "0 0 28px", lineHeight: "1.7" }}>
            Join us every weekday night for prayer, the Word, and prophetic impartation. Come as you are — bring your family, bring your expectation.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "28px" }}>
            <span style={{ background: "rgba(255,215,0,.12)", border: `1px solid ${colors.gold}`, color: "#fff", padding: "10px 18px", borderRadius: "50px", fontSize: "14px", fontWeight: "700" }}>🕙 10:00 PM - Midnight</span>
            <span style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.2)", color: "#fff", padding: "10px 18px", borderRadius: "50px", fontSize: "14px", fontWeight: "700" }}>📅 Mon - Fri</span>
            <span style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.2)", color: "#fff", padding: "10px 18px", borderRadius: "50px", fontSize: "14px", fontWeight: "700" }}>📍 Google Meet</span>
          </div>

          <a href={meetLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <motion.button whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} style={{ background: "linear-gradient(135deg,#FFD700,#F5C542,#D4AF37)", color: "#000", padding: "20px 44px", borderRadius: "50px", border: "none", cursor: "pointer", fontWeight: "800", fontSize: "1.15rem", boxShadow: "0 15px 40px rgba(255,215,0,.45)", fontFamily: "Montserrat, sans-serif", width: "100%", maxWidth: "420px" }}>Join Google Meet → Mon - Fri • 10 PM</motion.button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
export default WeeklySessions;
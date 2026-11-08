import { motion } from "framer-motion";
import { colors } from "../data/colors";
import weeklyImg from "../assets/images/weekly-10pm.jpeg";

function WeeklySessions() {
  const meetLink = "https://meet.google.com/txh-ipho-gsr";
  return (
    <section style={{ background: "#000", padding: "60px 1.2rem", textAlign: "center" }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 5vw, 2.4rem)", fontFamily: "Montserrat, sans-serif", fontWeight: "800", margin: "0 0 10px", lineHeight: "1.3" }}>The Days of Jacob&apos;s Trouble</h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", margin: "0 0 28px", fontStyle: "italic" }}>The Word of the Season — Jeremiah 30:7</p>
        <a href={meetLink} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none" }}>
          <motion.img whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} src={weeklyImg} alt="Weekly 10PM Sessions" style={{ width: "100%", maxWidth: "650px", borderRadius: "20px", border: `1px solid ${colors.gold}`, boxShadow: "0 20px 60px rgba(255,215,0,.25)", cursor: "pointer", display: "block", margin: "0 auto" }} />
        </a>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", margin: "14px 0 24px", letterSpacing: "1px" }}>TAP IMAGE OR SCAN QR CODE TO JOIN</p>
        <a href={meetLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <motion.button whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} style={{ background: "linear-gradient(135deg,#FFD700,#F5C542,#D4AF37)", color: "#000", padding: "18px 42px", borderRadius: "50px", border: "none", cursor: "pointer", fontWeight: "800", fontSize: "1.05rem", boxShadow: "0 15px 40px rgba(255,215,0,.45)", fontFamily: "Montserrat, sans-serif" }}>Join Google Meet → Mon - Fri • 10 PM</motion.button>
        </a>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: "18px 0 0" }}>Mon - Fri • 10:00 PM - Midnight • On Google Meet</p>
      </motion.div>
    </section>
  );
}
export default WeeklySessions;
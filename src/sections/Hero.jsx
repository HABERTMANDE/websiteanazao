import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { colors } from "../data/colors";
import { motion } from "framer-motion";
import heroBg from "../assets/images/anazao-hero.jpeg";

// ✅ YOUR REAL LINKS - DONE
const FACEBOOK_URL = "https://web.facebook.com/profile.php?id=61573461963343";
const INSTAGRAM_URL = "https://www.instagram.com/anazao_thefamilyofgraceglobal";

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        minHeight: isMobile ? "auto" : "100vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: isMobile ? "55px 1.2rem 25px" : "140px 2rem 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroBg}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.30,
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(0,0,0,.35), rgba(5,18,45,.35), rgba(0,0,0,.60))",
          zIndex: 1,
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, rgba(255,215,0,0.08) 0%, transparent 60%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,215,0,.14) 0%, rgba(255,215,0,.05) 35%, transparent 70%)",
          filter: "blur(35px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -35, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 6 + i, repeat: Infinity }}
          style={{
            position: "absolute",
            width: 6 + i,
            height: 6 + i,
            borderRadius: "50%",
            background: "#FFD700",
            left: `${8 + i * 7}%`,
            top: `${20 + (i % 5) * 15}%`,
            filter: "blur(1px)",
            zIndex: 2,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{ maxWidth: "1300px", width: "100%", zIndex: 5 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            color: "#FFD700",
            fontSize: "1.15rem",
            letterSpacing: "5px",
            textTransform: "uppercase",
            marginBottom: "22px",
            fontWeight: "700",
          }}
        >
          Apostolic • Prophetic • Discipleship • Transformational
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "clamp(3.6rem,14vw,11rem)",
            letterSpacing: "12px",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: "800",
            marginBottom: "18px",
            lineHeight: "1",
            background: "linear-gradient(180deg,#FFFBE6 0%,#FFE873 15%,#FFD700 35%,#F5C542 60%,#D4AF37 80%,#B8860B 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: `drop-shadow(0 0 10px rgba(255,215,0,.8)) drop-shadow(0 0 25px rgba(255,215,0,.5)) drop-shadow(0 0 60px rgba(255,215,0,.35))`,
          }}
        >
          ANAZAO
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            color: colors.white,
            fontSize: "clamp(1.3rem,4vw,3.4rem)",
            marginBottom: "25px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            lineHeight: "1.5",
            textShadow: "0 0 15px rgba(0,0,0,.65)",
          }}
        >
          Transforming Nations Through a Generation of Truth
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            color: "#ECECEC",
            fontSize: "clamp(.95rem,2vw,1.35rem)",
            lineHeight: "1.9",
            maxWidth: "950px",
            margin: isMobile ? "0 auto 35px" : "0 auto 60px",
            textShadow: "0 0 12px rgba(0,0,0,.7)",
          }}
        >
          ANAZAO exists to raise disciples, equip leaders, and establish truth-centered communities that transform generations, cities, and nations through the power of God&apos;s Word and Kingdom principles.
        </motion.p>

        <div style={{ display: "flex", justifyContent: "center", gap: "22px", flexWrap: "wrap" }}>
          <Link to="/membership" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(135deg,#FFD700,#F5C542,#D4AF37)",
                color: "#000",
                padding: "18px 42px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "1.05rem",
                boxShadow: "0 15px 40px rgba(255,215,0,.45)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Join The Movement
            </motion.button>
          </Link>

          <Link to="/partner" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(135deg,#7A0000,#B11226,#D7263D)",
                color: "#FFF",
                padding: "18px 42px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "1.05rem",
                boxShadow: "0 15px 40px rgba(193,18,31,.45)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Partner With Us
            </motion.button>
          </Link>
        </div>

        {/* ✅ Facebook + Instagram - Your real links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginTop: isMobile ? "35px" : "55px" }}
        >
          <motion.a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,215,0,0.5)", backdropFilter: "blur(6px)", color: "#fff", padding: "12px 22px", borderRadius: "50px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", fontFamily: "Montserrat, sans-serif" }}
          >
            <span style={{ background: "#1877F2", color: "#fff", width: "28px", height: "28px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1.1rem" }}>f</span>
            Facebook
          </motion.a>

          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,215,0,0.5)", backdropFilter: "blur(6px)", color: "#fff", padding: "12px 22px", borderRadius: "50px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", fontFamily: "Montserrat, sans-serif" }}
          >
            <span style={{ background: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)", color: "#fff", width: "28px", height: "28px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>◎</span>
            Instagram
          </motion.a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.75rem", marginTop: "12px", letterSpacing: "2px", fontWeight: 600 }}
        >
          FOLLOW ANAZAO FOR DAILY TRUTH & UPDATES
        </motion.p>

      </motion.div>

      {!isMobile && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: "absolute",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#FFD700",
            fontSize: "1.8rem",
            zIndex: 5,
          }}
        >
          ↓
        </motion.div>
      )}
    </section>
  );
}

export default Hero;
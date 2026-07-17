import { colors } from "../data/colors";
import { motion } from "framer-motion";
import heroBg from "../assets/images/anazao-hero.jpeg";

function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        backgroundImage: `
          linear-gradient(
            rgba(5, 18, 45, 0.88),
            rgba(5, 18, 45, 0.92)
          ),
          url(${heroBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "100px 2rem 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          maxWidth: "950px",
          zIndex: 2,
        }}
      >
        {/* Ministry Identity */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{
            color: "#FFD700",
            fontSize: "0.95rem",
            letterSpacing: "7px",
            textTransform: "uppercase",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Apostolic • Prophetic • Transformational
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          style={{
            fontSize: "clamp(5rem, 12vw, 9rem)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: "700",
            letterSpacing: "14px",
            marginBottom: "25px",
            lineHeight: "1",

            background:
              "linear-gradient(180deg,#FFFBE6 0%,#FFE873 15%,#FFD700 35%,#F5C542 60%,#D4AF37 80%,#B8860B 100%)",

            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

            filter: `
              drop-shadow(0 0 8px rgba(255,215,0,0.55))
              drop-shadow(0 0 15px rgba(255,215,0,0.45))
              drop-shadow(0 0 30px rgba(212,175,55,0.35))
            `,
          }}
        >
          ANAZAO
        </motion.h1>

        {/* Vision Statement */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          style={{
            color: colors.white,
            fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
            marginBottom: "30px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            lineHeight: "1.5",
            textShadow: "0 0 12px rgba(0,0,0,0.6)",
          }}
        >
          Transforming Nations Through a Generation of Truth
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            color: "#E0E0E0",
            fontSize: "1.15rem",
            lineHeight: "2",
            maxWidth: "760px",
            margin: "0 auto 50px",
            textShadow: "0 0 10px rgba(0,0,0,0.6)",
          }}
        >
          ANAZAO exists to raise disciples, equip leaders, and establish
          truth-centered communities that transform generations, cities,
          and nations through the power of God's Word and Kingdom principles.
        </motion.p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Join The Movement */}
          <a
            href="https://chat.whatsapp.com/D8HlNteiolD6xElC2S6A8C"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <motion.button
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              whileTap={{
                scale: 0.95,
              }}
              style={{
                background:
                  "linear-gradient(135deg,#FFD700,#F5C542,#D4AF37)",
                color: "#000000",
                padding: "18px 42px",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
                boxShadow:
                  "0 0 30px rgba(255,215,0,0.45)",
                transition: "0.3s ease",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Join The Movement
            </motion.button>
          </a>

          {/* Partner With Us */}
          <motion.button
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            style={{
              background:
                "linear-gradient(135deg,#7A0000,#B11226,#D7263D)",
              color: "#FFFFFF",
              padding: "18px 42px",
              borderRadius: "50px",
              fontWeight: "700",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              boxShadow:
                "0 0 25px rgba(193,18,31,0.45)",
              transition: "0.3s ease",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Partner With Us
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
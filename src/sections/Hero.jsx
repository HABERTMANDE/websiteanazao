import { colors } from "../data/colors";
import { motion } from "framer-motion";
import heroBg from "../assets/images/anazao-hero.jpeg";

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,.72),
            rgba(5,18,45,.84),
            rgba(0,0,0,.92)
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
        padding: "120px 1.2rem 70px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Zoom */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
          linear-gradient(
            rgba(0,0,0,.72),
            rgba(5,18,45,.84),
            rgba(0,0,0,.92)
          ),
          url(${heroBg})
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Golden Glow */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,215,0,.14) 0%, rgba(255,215,0,.05) 35%, transparent 70%)",
          filter: "blur(35px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Floating Gold Orbs */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -35, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            width: 6 + i,
            height: 6 + i,
            borderRadius: "50%",
            background: "#FFD700",
            left: `${8 + i * 7}%`,
            top: `${20 + (i % 5) * 15}%`,
            filter: "blur(1px)",
            zIndex: 1,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          maxWidth: "1100px",
          zIndex: 5,
        }}
      >
        {/* Identity */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            color: "#FFD700",
            fontSize: "1rem",
            letterSpacing: "8px",
            textTransform: "uppercase",
            marginBottom: "18px",
            fontWeight: "700",
          }}
        >
          Apostolic • Prophetic • Transformational
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "clamp(3.6rem,12vw,8rem)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: "800",
            letterSpacing: "8px",
            marginBottom: "18px",
            lineHeight: "1",

            background:
              "linear-gradient(180deg,#FFFBE6 0%,#FFE873 15%,#FFD700 35%,#F5C542 60%,#D4AF37 80%,#B8860B 100%)",

            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

            filter: `
            drop-shadow(0 0 10px rgba(255,215,0,.8))
            drop-shadow(0 0 25px rgba(255,215,0,.5))
            drop-shadow(0 0 60px rgba(255,215,0,.35))
          `,
          }}
        >
          ANAZAO
        </motion.h1>

        {/* Vision */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            color: colors.white,
            fontSize: "clamp(1.3rem,5vw,2.5rem)",
            marginBottom: "25px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "500",
            lineHeight: "1.5",
            textShadow: "0 0 15px rgba(0,0,0,.65)",
          }}
        >
          Transforming Nations Through a Generation of Truth
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            color: "#ECECEC",
            fontSize: "clamp(.95rem,3vw,1.12rem)",
            lineHeight: "2",
            maxWidth: "760px",
            margin: "0 auto 60px",
            textShadow: "0 0 12px rgba(0,0,0,.7)",
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
            justifyContent: "center",
            gap: "22px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://chat.whatsapp.com/D8HlNteiolD6xElC2S6A8C"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <motion.button
              whileHover={{
                scale: 1.08,
                y: -6,
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background:
                  "linear-gradient(135deg,#FFD700,#F5C542,#D4AF37)",
                color: "#000",
                padding: "18px 42px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "1.05rem",
                boxShadow:
                  "0 15px 40px rgba(255,215,0,.45)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Join The Movement
            </motion.button>
          </a>

          <motion.button
            whileHover={{
              scale: 1.08,
              y: -6,
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background:
                "linear-gradient(135deg,#7A0000,#B11226,#D7263D)",
              color: "#FFF",
              padding: "18px 42px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "1.05rem",
              boxShadow:
                "0 15px 40px rgba(193,18,31,.45)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Partner With Us
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
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
    </section>
  );
}

export default Hero;
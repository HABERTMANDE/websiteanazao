import { colors } from "../data/colors";
import { motion } from "framer-motion";

function About() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: colors.black,
        color: colors.white,
        minHeight: "100vh",
      }}
    >
      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          padding: "120px 50px 80px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#FFD700",
            fontSize: "7rem",
            marginBottom: "10px",
            textShadow: `
              0 0 8px rgba(255,215,0,0.8),
              0 0 20px rgba(255,215,0,0.5)
            `,
          }}
        >
          WHO WE ARE
        </h1>

        {/* MODIFICATION 1: ANAZAO SUBTITLE ADDED */}
        <h2
          style={{
            color: colors.white,
            fontSize: "1.5rem",
            letterSpacing: "8px",
            marginBottom: "20px",
          }}
        >
          ANAZAO
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "2",
            fontSize: "1.35rem",
            color: "#E5E5E5",
            fontWeight: "400",
          }}
        >
          ANAZAO is an apostolic and transformational movement committed to
          raising a generation grounded in truth and equipped to influence
          nations for the Kingdom of God.
        </p>
      </motion.section>

      {/* Vision */}
      <motion.section
        {...sectionAnimation}
        style={{
          padding: "80px 50px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: colors.gold,
            marginBottom: "20px",
          }}
        >
          Our Vision
        </h2>

        <p style={{ lineHeight: "1.8" }}>
          Transforming Nations Through a Generation of Truth.
        </p>
      </motion.section>

      {/* Mission */}
      <motion.section
        {...sectionAnimation}
        style={{
          padding: "80px 50px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: colors.gold,
            marginBottom: "20px",
          }}
        >
          Our Mission
        </h2>

        <p style={{ lineHeight: "1.8" }}>
          Bringing together diverse talents, gifts, skills, and abilities
          individually and collectively, raising a generation transformed
          in truth and blessed with unlimited potential.
        </p>
      </motion.section>

      {/* Governance Principle */}
      <motion.section
        {...sectionAnimation}
        style={{
          padding: "80px 50px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: colors.gold,
            marginBottom: "20px",
          }}
        >
          Governance Principle
        </h2>

        <p style={{ lineHeight: "1.8" }}>
          Spiritual Leadership, Shared Responsibility, and Collaborative
          Stewardship.
        </p>
      </motion.section>

      {/* MODIFICATION 2: WHAT WE DO + BUTTON ADDED */}
      <motion.section
        {...sectionAnimation}
        style={{
          padding: "60px 50px 120px",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: colors.gold,
            marginBottom: "20px",
          }}
        >
          What We Do
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "30px" }}>
          Conferences, Youth Gatherings, Leadership Training, and Community
          Outreach — raising young people to live set apart for God's purpose.
        </p>
        <a
          href="/events"
          style={{
            backgroundColor: "#FFD700",
            color: "#000",
            padding: "14px 30px",
            borderRadius: "30px",
            fontWeight: "bold",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          See Our Events →
        </a>
      </motion.section>
    </motion.div>
  );
}

export default About;
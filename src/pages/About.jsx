import { colors } from "../data/colors";
import { motion } from "framer-motion";

function About() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };

  // MODIFICATION: Card style from your screenshot
  const cardStyle = {
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: "16px",
    padding: "30px 22px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: "#0A1A3A", // MODIFICATION: Changed from black to dark blue like your screenshot
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
        {/* MODIFICATION: Small label like screenshot */}
        <p
          style={{
            color: "#D4AF37",
            letterSpacing: "4px",
            fontSize: "0.9rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          WHO WE ARE
        </p>

        {/* MODIFICATION: Big title from screenshot */}
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: "3.2rem",
            lineHeight: "1.2",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Transforming Nations Through
          <br />
          <span style={{ color: "#FFD700" }}>A Generation of Truth</span>
        </h1>

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

        {/* MODIFICATION: New description from screenshot */}
        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "2",
            fontSize: "1.15rem",
            color: "#E5E5E5",
            fontWeight: "400",
          }}
        >
          ANAZAO is an apostolic and transformational movement committed to
          raising disciples, equipping leaders, and establishing truth-centered
          communities that influence families, cities, nations, and generations
          through the power of God's Word and Kingdom principles.
        </p>
      </motion.section>

      {/* Vision + Mission - NOW AS CARDS LIKE SCREENSHOT */}
      <motion.section
        {...sectionAnimation}
        style={{
          padding: "20px 50px",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        <div style={cardStyle}>
          <h2 style={{ color: colors.gold, marginBottom: "12px" }}>
            Our Vision
          </h2>
          <p style={{ lineHeight: "1.8" }}>
            Transforming Nations Through a Generation of Truth.
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: colors.gold, marginBottom: "12px" }}>
            Our Mission
          </h2>
          <p style={{ lineHeight: "1.8" }}>
            Bringing together diverse talents, gifts, skills, and abilities
            individually and collectively, raising a generation transformed
            in truth and blessed with unlimited potential.
          </p>
        </div>
      </motion.section>

      {/* MODIFICATION 3: 3 NEW CARDS FROM SCREENSHOT - THIS WAS MISSING! */}
      <motion.section
        {...sectionAnimation}
        style={{
          padding: "20px 50px",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "16px",
        }}
      >
        <div style={cardStyle}>
          <div style={{ fontSize: "1.8rem", marginBottom: "10px" }}>📖</div>
          <h3 style={{ color: "white", marginBottom: "10px" }}>
            Kingdom Truth
          </h3>
          <p style={{ lineHeight: "1.7", color: "#E5E5E5" }}>
            Teaching God's Word with clarity, integrity, and power to build
            mature disciples.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: "1.8rem", marginBottom: "10px" }}>👥</div>
          <h3 style={{ color: "white", marginBottom: "10px" }}>
            Leadership Development
          </h3>
          <p style={{ lineHeight: "1.7", color: "#E5E5E5" }}>
            Equipping servant leaders to influence families, churches,
            communities, and nations.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: "1.8rem", marginBottom: "10px" }}>🌍</div>
          <h3 style={{ color: "white", marginBottom: "10px" }}>
            Nation Transformation
          </h3>
          <p style={{ lineHeight: "1.7", color: "#E5E5E5" }}>
            Impacting society through biblical values, excellence, and Kingdom
            culture.
          </p>
        </div>
      </motion.section>

      {/* Governance Principle */}
      <motion.section
        {...sectionAnimation}
        style={{
          padding: "20px 50px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={cardStyle}>
          <h2 style={{ color: colors.gold, marginBottom: "12px" }}>
            Governance Principle
          </h2>
          <p style={{ lineHeight: "1.8" }}>
            Spiritual Leadership, Shared Responsibility, and Collaborative
            Stewardship.
          </p>
        </div>
      </motion.section>

      {/* What We Do + Buttons */}
      <motion.section
        {...sectionAnimation}
        style={{
          padding: "40px 50px 120px",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: colors.gold, marginBottom: "20px" }}>
          What We Do
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "30px" }}>
          Conferences, Youth Gatherings, Leadership Training, and Community
          Outreach — raising young people to live set apart for God's purpose.
        </p>

        {/* MODIFICATION: Learn More button from screenshot + Your Events button */}
        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <a
            href="/"
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
            Learn More →
          </a>
          <a
            href="/events"
            style={{
              backgroundColor: "transparent",
              color: "#FFD700",
              padding: "14px 30px",
              borderRadius: "30px",
              fontWeight: "bold",
              textDecoration: "none",
              display: "inline-block",
              border: "2px solid #FFD700",
            }}
          >
            See Our Events →
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default About;
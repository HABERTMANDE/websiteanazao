import { motion } from "framer-motion";
import { colors } from "../data/colors";

function Leadership() {
  const cardStyle = {
    backgroundColor: "#111111",
    border: `1px solid ${colors.gold}`,
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "30px",
    transition: "0.3s ease",
  };

  const titleStyle = {
    color: colors.gold,
    fontSize: "2rem",
    marginBottom: "20px",
  };

  const roleStyle = {
    color: colors.gold,
    marginBottom: "5px",
  };

  const cardAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
    whileHover: {
      y: -8,
      boxShadow: "0 15px 40px rgba(212,175,55,0.2)",
    },
  };

  return (
    <div
      style={{
        backgroundColor: colors.black,
        color: colors.white,
        minHeight: "100vh",
        padding: "120px 40px 80px",
      }}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto 60px",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            color: colors.gold,
            marginBottom: "20px",
          }}
        >
          ANAZAO Leadership
        </h1>

        <p
          style={{
            color: "#C5C5C5",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          Spiritual Leadership, Shared Responsibility, and Collaborative
          Stewardship.
        </p>
      </motion.div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Spiritual Oversight */}
        <motion.div style={cardStyle} {...cardAnimation}>
          <h2 style={titleStyle}>Spiritual Oversight</h2>

          <h3 style={roleStyle}>Prophet Habert Murunga</h3>
          <p><strong>Overseer</strong></p>

          <ul style={{ marginTop: "20px", paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>Provides spiritual oversight and direction.</li>
            <li>Guards the vision, doctrine, and prophetic mandate of ANAZAO.</li>
            <li>Oversees leadership development and strategic growth.</li>
            <li>Provides apostolic and prophetic guidance for the ministry.</li>
          </ul>
        </motion.div>

        {/* Vision */}
        <motion.div style={cardStyle} {...cardAnimation}>
          <h2 style={titleStyle}>Vision and Strategic Direction</h2>

          <h3 style={roleStyle}>Pastor Grace Onjula</h3>
          <p><strong>Vision Bearer</strong></p>

          <ul style={{ marginTop: "20px", paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>Preserves and communicates the ministry vision.</li>
            <li>Ensures all programs align with the vision and mission.</li>
            <li>Works closely with the Overseer in strategic planning and implementation.</li>
          </ul>
        </motion.div>

        {/* Administration */}
        <motion.div style={cardStyle} {...cardAnimation}>
          <h2 style={titleStyle}>Administration & Operations</h2>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={roleStyle}>Minister Grace Ngari</h3>
            <p><strong>Administrator</strong></p>

            <ul style={{ marginTop: "15px", paddingLeft: "20px", lineHeight: "1.8" }}>
              <li>Coordinates ministry operations.</li>
              <li>Oversees planning and implementation of programs.</li>
              <li>Supports departmental coordination and communication.</li>
            </ul>
          </div>

          <div
            style={{
              borderTop: `1px solid ${colors.gold}`,
              paddingTop: "25px",
            }}
          >
            <h3 style={roleStyle}>Counselor Esther Kevin</h3>
            <p><strong>Administrator</strong></p>

            <ul style={{ marginTop: "15px", paddingLeft: "20px", lineHeight: "1.8" }}>
              <li>Oversees member care and counseling support.</li>
              <li>Assists with organizational systems and administration.</li>
              <li>Supports discipleship and pastoral care initiatives.</li>
            </ul>
          </div>
        </motion.div>

        {/* Finance */}
        <motion.div style={cardStyle} {...cardAnimation}>
          <h2 style={titleStyle}>Finance and Stewardship</h2>

          <h3 style={roleStyle}>Minister Lavendar Otieno</h3>
          <p><strong>Treasurer</strong></p>

          <ul style={{ marginTop: "20px", paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>Oversees ministry finances and accountability.</li>
            <li>Maintains financial records and reports.</li>
            <li>Coordinates giving channels and stewardship initiatives.</li>
            <li>Supports budgeting for events and projects.</li>
          </ul>
        </motion.div>

        {/* Governance */}
        <motion.div style={cardStyle} {...cardAnimation}>
          <h2 style={titleStyle}>Governance and Records</h2>

          <h3 style={roleStyle}>Minister Eunice Wambale</h3>
          <p><strong>Secretary</strong></p>

          <ul style={{ marginTop: "20px", paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>Maintains ministry records and documentation.</li>
            <li>Records meetings and resolutions.</li>
            <li>Coordinates official correspondence and scheduling.</li>
          </ul>
        </motion.div>

        {/* Communications */}
        <motion.div style={cardStyle} {...cardAnimation}>
          <h2 style={titleStyle}>Communications and Public Relations</h2>

          <h3 style={roleStyle}>Minister Samson Elim</h3>
          <p><strong>Communications Director</strong></p>
        </motion.div>

        {/* Media */}
        <motion.div style={cardStyle} {...cardAnimation}>
          <h2 style={titleStyle}>Media Department</h2>

          <h3 style={roleStyle}>Minister Simon Peter</h3>
          <p><strong>Media Director</strong></p>
        </motion.div>

        {/* Hospitality */}
        <motion.div style={cardStyle} {...cardAnimation}>
          <h2 style={titleStyle}>Hospitality and Member Experience</h2>

          <h3 style={roleStyle}>Minister Mercy Atieno</h3>
          <p><strong>Hospitality Director</strong></p>
        </motion.div>
      </div>
    </div>
  );
}

export default Leadership;
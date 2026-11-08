import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { colors } from "../data/colors";

const leaders = [
  {
    role: "Overseer",
    name: "Prophet Habert Murunga",
    initials: "HM",
    desc: "Provides spiritual oversight, guards the vision and doctrine, and gives prophetic direction to ANAZAO.",
  },
  {
    role: "Vision Bearer",
    name: "Pastor Grace Onjula",
    initials: "GO",
    desc: "Champions the ministry vision and guides the team in advancing the mission of ANAZAO.",
  },
  {
    role: "Administrator",
    name: "Minister Grace Ngari",
    initials: "GN",
    desc: "Coordinates ministry operations, administration, communication, and organizational excellence.",
  },
  {
    role: "Counselor and Administrator",
    name: "Counselor Esther Kevin",
    initials: "EK",
    desc: "Supports counseling, administration, discipleship, and the care of ministry members.",
  },
  {
    role: "Treasurer",
    name: "Minister Lavendar Otieno",
    initials: "LO",
    desc: "Oversees financial stewardship, accountability, and responsible management of ministry resources.",
  },
  {
    role: "Secretary",
    name: "Minister Eunice Wambale",
    initials: "EW",
    desc: "Coordinates records, official communications, documentation, and organizational follow-up.",
  },

];

function LeadershipPreview() {
  return (
    <section
      id="leadership"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.10), transparent 55%), #050505",
        padding: "clamp(75px, 9vw, 120px) 20px",
        color: colors.white,
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            marginBottom: "65px",
          }}
        >
          <p
            style={{
              color: colors.gold,
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontSize: "0.78rem",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            Our Leadership
          </p>

          <h2
            style={{
              color: colors.white,
              fontSize: "clamp(2.3rem, 5vw, 4.2rem)",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              lineHeight: 1.15,
              marginBottom: "25px",
            }}
          >
            Servant Leaders Called
            <br />
            <span style={{ color: colors.gold }}>
              To Transform Nations
            </span>
          </h2>

          <div
            style={{
              width: "100px",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
              margin: "0 auto 28px",
            }}
          />

          <p
            style={{
              maxWidth: "780px",
              margin: "0 auto",
              color: "#CFCFCF",
              lineHeight: 1.95,
              fontSize: "1rem",
            }}
          >
            ANAZAO is led by a dedicated team of spiritual leaders who
            provide vision, oversight, governance, and stewardship as they
            equip a generation to walk in truth and Kingdom purpose.
          </p>
        </motion.div>

        {/* Nine leadership cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "25px",
            alignItems: "stretch",
          }}
        >
          {leaders.map((leader, index) => (
            <motion.article
              key={leader.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.1,
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 22px 45px rgba(212,175,55,0.12)",
              }}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "38px 25px",
                minWidth: 0,
                background:
                  "linear-gradient(145deg, #151515, #090909)",
                border: "1px solid rgba(212,175,55,0.3)",
                borderRadius: "16px",
                boxSizing: "border-box",
                transition: "box-shadow 0.3s ease",
              }}
            >
              {/* Card number */}
              <span
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "18px",
                  color: "rgba(212,175,55,0.65)",
                  fontSize: "0.7rem",
                  letterSpacing: "2px",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Initial badge */}
              <div
                style={{
                  width: "85px",
                  height: "85px",
                  padding: "2px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #FFD700, #D4AF37, #8B6B00)",
                  marginBottom: "25px",
                  boxSizing: "border-box",
                  boxShadow: "0 0 25px rgba(212,175,55,0.12)",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "#101010",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: colors.gold,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                  }}
                >
                  {leader.initials}
                </div>
              </div>

              {/* Role */}
              <p
                style={{
                  color: colors.gold,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  fontSize: "0.73rem",
                  fontWeight: 700,
                  lineHeight: 1.7,
                  margin: "0 0 12px",
                }}
              >
                {leader.role}
              </p>

              {/* Name */}
              <h3
                style={{
                  color: colors.white,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  lineHeight: 1.35,
                  margin: "0 0 20px",
                  overflowWrap: "anywhere",
                }}
              >
                {leader.name}
              </h3>

              <div
                style={{
                  width: "45px",
                  height: "2px",
                  background: colors.gold,
                  marginBottom: "20px",
                }}
              />

              {/* Description */}
              <p
                style={{
                  color: "#BDBDBD",
                  fontSize: "0.91rem",
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                {leader.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Full leadership button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginTop: "70px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#BDBDBD",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.3rem",
              fontStyle: "italic",
              marginBottom: "30px",
            }}
          >
            United in vision. Committed to truth. Dedicated to transformation.
          </p>

          <motion.div
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-block",
            }}
          >
            <Link
              to="/leadership"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "19px 38px",
                border: "1px solid #D4AF37",
                borderRadius: "50px",
                background:
                  "linear-gradient(135deg, #FFD700, #D4AF37, #B8860B)",
                color: "#050505",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 800,
                letterSpacing: "1px",
                boxShadow: "0 8px 30px rgba(212,175,55,0.25)",
                cursor: "pointer",
              }}
            >
              VIEW FULL LEADERSHIP
              <span style={{ fontSize: "1.3rem" }}>?</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Closing statement */}
        <p
          style={{
            marginTop: "75px",
            color: colors.gold,
            textAlign: "center",
            fontSize: "0.72rem",
            letterSpacing: "2px",
            fontWeight: 600,
          }}
        >
          LEADERSHIP THROUGH SERVICE
        </p>
      </div>
    </section>
  );
}

export default LeadershipPreview;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { colors } from "../data/colors";

function LeadershipPreview() {
  const leaders = [
    {
      role: "Overseer",
      name: "Prophet Habert Murunga",
      desc: "Provides apostolic oversight, guards the vision, and gives prophetic direction to the ministry.",
    },
    {
      role: "Vision Bearer",
      name: "Pastor Grace Onjula",
      desc: "Champions the ministry vision and ensures every department advances the mission of ANAZAO.",
    },
    {
      role: "Administrator",
      name: "Min. Grace Ngari",
      desc: "Coordinates ministry operations, administration, communication, and organizational excellence.",
    },
    {
      role: "Counselor and Administrator",
      name: "Counselor Esther Kevin",
      desc: "Supports the ministry through counseling, administration, and the care of its members.",
    },
    {
      role: "Treasurer",
      name: "Minister Lavendar Otieno",
      desc: "Oversees financial stewardship, accountability, and responsible management of ministry resources.",
    },
    {
      role: "Secretary General",
      name: "Minister Eunice Wambale",
      desc: "Coordinates records, official communications, documentation, and organizational follow-up.",
    },
  ];

  const gold = colors?.gold || "#D4AF37";
  const white = colors?.white || "#FFFFFF";

  return (
    <section
      id="leadership"
      style={{
        background: "#050505",
        padding: "clamp(75px, 9vw, 120px) 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "-180px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(212,175,55,0.055)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-180px",
          bottom: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(212,175,55,0.045)",
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            marginBottom: "65px",
          }}
        >
          <p
            style={{
              color: gold,
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontSize: "0.78rem",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            Leadership
          </p>

          <h2
            style={{
              color: white,
              fontSize: "clamp(2.3rem, 5vw, 4.2rem)",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              lineHeight: 1.15,
              margin: "0 auto 25px",
              maxWidth: "900px",
            }}
          >
            Servant Leaders Called
            <br />
            <span style={{ color: gold }}>
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
              fontSize: "clamp(0.95rem, 1.5vw, 1.08rem)",
            }}
          >
            ANAZAO is led by a dedicated team of spiritual leaders who
            provide vision, oversight, governance, and stewardship as they
            equip a generation to walk in truth and Kingdom purpose.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 245px), 1fr))",
            gap: "25px",
            alignItems: "stretch",
          }}
        >
          {leaders.map((leader, index) => (
            <motion.article
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.12,
              }}
              whileHover={{
                y: -8,
                borderColor: "rgba(212,175,55,0.75)",
                boxShadow: "0 22px 50px rgba(212,175,55,0.10)",
              }}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "35px 25px 32px",
                minWidth: 0,
                background:
                  "linear-gradient(145deg, #141414 0%, #090909 100%)",
                border: "1px solid rgba(212,175,55,0.25)",
                borderRadius: "18px",
                transition:
                  "border-color 0.3s ease, box-shadow 0.3s ease",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "15%",
                  width: "70%",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                }}
              />

              <div
                style={{
                  width: "82px",
                  height: "82px",
                  flexShrink: 0,
                  marginBottom: "24px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #FFD700, #D4AF37, #8B6B00)",
                  padding: "2px",
                  boxShadow: "0 0 30px rgba(212,175,55,0.12)",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#101010",
                    color: gold,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.3rem",
                    fontWeight: 600,
                  }}
                >
                  {leader.name.charAt(0)}
                </div>
              </div>

              <p
                style={{
                  color: gold,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  lineHeight: 1.7,
                  marginBottom: "12px",
                }}
              >
                {leader.role}
              </p>

              <h3
                style={{
                  color: white,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.55rem",
                  fontWeight: 600,
                  lineHeight: 1.35,
                  margin: "0 0 18px",
                  overflowWrap: "anywhere",
                }}
              >
                {leader.name}
              </h3>

              <div
                style={{
                  width: "45px",
                  height: "1px",
                  background: gold,
                  opacity: 0.7,
                  marginBottom: "20px",
                }}
              />

              <p
                style={{
                  color: "#AFAFAF",
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                  marginTop: "auto",
                }}
              >
                {leader.desc}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginTop: "65px",
            textAlign: "center",
          }}
        >
          <Link
            to="/leadership"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              padding: "17px 35px",
              borderRadius: "50px",
              textDecoration: "none",
              background:
                "linear-gradient(135deg, #FFD700, #D4AF37, #B8860B)",
              color: "#080808",
              fontWeight: 700,
              fontSize: "0.92rem",
              letterSpacing: "0.3px",
              boxShadow: "0 8px 30px rgba(212,175,55,0.16)",
            }}
          >
            Meet The Leadership Team
            <span aria-hidden="true" style={{ fontSize: "1.25rem" }}>
              →
            </span>
          </Link>

          <p
            style={{
              color: "#777",
              fontSize: "0.82rem",
              lineHeight: 1.8,
              marginTop: "20px",
            }}
          >
            United in vision. Committed to truth. Dedicated to transformation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{
            marginTop: "85px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <span
            style={{
              width: "clamp(20px, 8vw, 100px)",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, #D4AF37)",
            }}
          />

          <p
            style={{
              color: gold,
              textAlign: "center",
              fontSize: "0.72rem",
              letterSpacing: "2px",
              lineHeight: 1.8,
              fontWeight: 600,
            }}
          >
            LEADERSHIP THROUGH SERVICE
          </p>

          <span
            style={{
              width: "clamp(20px, 8vw, 100px)",
              height: "1px",
              background:
                "linear-gradient(90deg, #D4AF37, transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Leadership;

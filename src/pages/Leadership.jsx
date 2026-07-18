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
  ];

  return (
    <section
      style={{
        background: colors.black,
        padding: "110px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              color: colors.gold,
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontWeight: "700",
              marginBottom: "18px",
            }}
          >
            OUR LEADERSHIP
          </p>

          <h2
            style={{
              color: colors.white,
              fontSize: "clamp(2.2rem,5vw,3.8rem)",
              fontFamily: "'Cormorant Garamond', serif",
              marginBottom: "25px",
            }}
          >
            Shepherding With Truth & Grace
          </h2>

          <p
            style={{
              color: "#CFCFCF",
              maxWidth: "760px",
              margin: "0 auto",
              lineHeight: "2",
              fontSize: "1.05rem",
            }}
          >
            ANAZAO is guided by servant leaders committed to sound doctrine,
            spiritual growth, and raising a generation that transforms
            communities and nations through Kingdom leadership.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: index * .2,
              }}
              whileHover={{
                y: -10,
              }}
              style={{
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,215,0,.25)",
                borderRadius: "22px",
                padding: "40px 35px",
                backdropFilter: "blur(12px)",
                transition: ".35s",
              }}
            >
              <div
                style={{
                  width: "85px",
                  height: "85px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#FFD700,#D4AF37)",
                  marginBottom: "28px",
                }}
              />

              <p
                style={{
                  color: colors.gold,
                  fontWeight: "700",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}
              >
                {leader.role}
              </p>

              <h3
                style={{
                  color: colors.white,
                  marginBottom: "18px",
                  fontSize: "1.55rem",
                }}
              >
                {leader.name}
              </h3>

              <p
                style={{
                  color: "#D5D5D5",
                  lineHeight: "1.9",
                }}
              >
                {leader.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            marginTop: "70px",
            textAlign: "center",
          }}
        >
          <Link
            to="/leadership"
            style={{
              textDecoration: "none",
            }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: .95,
              }}
              style={{
                background:
                  "linear-gradient(135deg,#FFD700,#D4AF37)",
                color: "#000",
                border: "none",
                padding: "18px 45px",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "1rem",
                boxShadow:
                  "0 0 30px rgba(255,215,0,.35)",
              }}
            >
              View Full Leadership →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LeadershipPreview;
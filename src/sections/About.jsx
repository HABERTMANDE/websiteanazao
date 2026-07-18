import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { colors } from "../data/colors";
import {
  FaGlobeAfrica,
  FaUsers,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  const cardStyle = {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,215,0,.18)",
    borderRadius: "24px",
    padding: "35px",
    transition: ".35s ease",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,.25)",
  };

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg,#05122D 0%,#071A40 50%,#05122D 100%)",
        color: colors.white,
        padding: "120px 20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle,rgba(255,215,0,.08),transparent 70%)",
          borderRadius: "50%",
          top: "-250px",
          right: "-250px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              color: colors.gold,
              letterSpacing: "8px",
              textTransform: "uppercase",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            Who We Are
          </p>

          <div
            style={{
              width: "90px",
              height: "4px",
              background: colors.gold,
              margin: "0 auto 35px",
              borderRadius: "50px",
            }}
          />

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.7rem,6vw,4.8rem)",
              marginBottom: "25px",
              color: colors.white,
            }}
          >
            Transforming Nations Through
            <br />
            <span
              style={{
                color: colors.gold,
              }}
            >
              A Generation of Truth
            </span>
          </h2>

          <p
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              fontSize: "1.15rem",
              color: "#D9D9D9",
              lineHeight: "2",
            }}
          >
            ANAZAO is an apostolic and transformational movement committed to
            raising disciples, equipping leaders, and establishing
            truth-centered communities that influence families, cities,
            nations, and generations through the power of God's Word and
            Kingdom principles.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
            gap: "30px",
            marginBottom: "70px",
          }}
        >
          <motion.div
            whileHover={{
              y: -8,
              borderColor: "#FFD700",
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            style={cardStyle}
          >
            <h3
              style={{
                color: colors.gold,
                marginBottom: "20px",
                fontSize: "1.6rem",
              }}
            >
              Our Vision
            </h3>

            <p
              style={{
                color: "#DDDDDD",
                lineHeight: "2",
              }}
            >
              Transforming Nations Through a Generation of Truth.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            style={cardStyle}
          >
            <h3
              style={{
                color: colors.gold,
                marginBottom: "20px",
                fontSize: "1.6rem",
              }}
            >
              Our Mission
            </h3>

            <p
              style={{
                color: "#DDDDDD",
                lineHeight: "2",
              }}
            >
              Bringing together diverse talents, gifts, skills, and abilities
              individually and collectively, raising a generation transformed
              in truth and blessed with unlimited potential.
            </p>
          </motion.div>
        </div>

        {/* Ministry Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "30px",
            marginBottom: "80px",
          }}
        >
          {[
            {
              icon: <FaBookOpen size={34} />,
              title: "Kingdom Truth",
              text: "Teaching God's Word with clarity, integrity, and power to build mature disciples.",
            },
            {
              icon: <FaUsers size={34} />,
              title: "Leadership Development",
              text: "Equipping servant leaders to influence families, churches, communities, and nations.",
            },
            {
              icon: <FaGlobeAfrica size={34} />,
              title: "Nation Transformation",
              text: "Impacting society through biblical values, excellence, and Kingdom culture.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: .7,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              style={{
                ...cardStyle,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: colors.gold,
                  marginBottom: "25px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  color: colors.white,
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#D6D6D6",
                  lineHeight: "1.9",
                }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Governance Principle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,215,0,.15)",
            borderRadius: "24px",
            padding: "40px",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h3
            style={{
              color: colors.gold,
              fontSize: "2rem",
              marginBottom: "20px",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Governance Principle
          </h3>

          <p
            style={{
              color: "#E5E5E5",
              fontSize: "1.15rem",
              lineHeight: "2",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Spiritual Leadership, Shared Responsibility, and Collaborative
            Stewardship.
          </p>
        </motion.div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: "center" }}
        >
          <Link
            to="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "linear-gradient(135deg,#FFD700,#D4AF37)",
              color: "#000",
              padding: "16px 36px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "700",
              boxShadow: "0 0 25px rgba(255,215,0,.35)",
            }}
          >
            Learn More
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
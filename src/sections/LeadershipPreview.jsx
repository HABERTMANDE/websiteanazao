import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { colors } from "../data/colors";

function LeadershipPreview() {
  const leaders = [
    {
      role: "Overseer",
      name: "Prophet Habert Murunga",
    },
    {
      role: "Vision Bearer",
      name: "Pastor Grace Onjula",
    },
    {
      role: "Administrator",
      name: "Minister Grace Ngari",
    },
    {
      role: "Treasurer",
      name: "Minister Lavendar Otieno",
    },
  ];

  return (
    <section
      style={{
        background: "#050505",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            color: colors.gold,
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "15px",
            fontWeight: "600",
          }}
        >
          Leadership
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            color: colors.white,
            fontSize: "clamp(2.5rem,6vw,4rem)",
            fontFamily: "'Cormorant Garamond', serif",
            marginBottom: "25px",
          }}
        >
          Servant Leaders Called To Transform Nations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            maxWidth: "750px",
            margin: "0 auto 70px",
            color: "#CFCFCF",
            lineHeight: "1.9",
            fontSize: "1.05rem",
          }}
        >
          ANAZAO is led by a dedicated team of spiritual leaders who provide
          vision, oversight, governance, and stewardship as they equip a
          generation to walk in truth and Kingdom purpose.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "30px",
          }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(255,215,0,.15)",
              }}
              style={{
                background: "#111",
                border: "1px solid rgba(255,215,0,.25)",
                borderRadius: "20px",
                padding: "35px 25px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 20px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#FFD700,#D4AF37,#8B6B00)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#000",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                {leader.name.charAt(0)}
              </div>

              <h3
                style={{
                  color: colors.gold,
                  marginBottom: "10px",
                  fontSize: "1.3rem",
                }}
              >
                {leader.role}
              </h3>

              <p
                style={{
                  color: "#EEE",
                  lineHeight: "1.7",
                }}
              >
                {leader.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: "70px",
          }}
        >
          <Link
            to="/leadership"
            style={{
              display: "inline-block",
              padding: "18px 45px",
              borderRadius: "50px",
              textDecoration: "none",
              background:
                "linear-gradient(135deg,#FFD700,#D4AF37,#B8860B)",
              color: "#000",
              fontWeight: "700",
              fontSize: "1rem",
              transition: ".3s",
              boxShadow: "0 0 25px rgba(255,215,0,.3)",
            }}
          >
            Meet The Leadership Team →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default LeadershipPreview;
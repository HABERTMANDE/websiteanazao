import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { colors } from "../data/colors";

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

        {/* LEADER CARDS REMOVED FROM HOME - LEADERS ONLY ON /leadership PAGE */}

        {/* Full leadership button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginTop: "10px",
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
              onClick={() => window.scrollTo(0, 0)}
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
              <span style={{ fontSize: "1.3rem" }}>→</span>
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
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

        {/* Full leadership button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginTop: "10px",
            textAlign: "center",
            marginBottom: "70px",
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

        {/* ===== ANNUAL PRAYER CAMPS - TIMELESS / ANNUAL ===== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: "linear-gradient(145deg, #151515, #090909)",
            border: "1px solid rgba(212,175,55,0.35)",
            borderRadius: "20px",
            padding: "clamp(30px, 5vw, 50px) 25px",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto 60px",
            boxShadow: "0 20px 45px rgba(0,0,0,0.4)",
          }}
        >
          <p
            style={{
              color: colors.gold,
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            Prayer Gathering • Every Year
          </p>

          <h3
            style={{
              color: colors.white,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              marginBottom: "8px",
            }}
          >
            Annual Prayer Camps
          </h3>

          <p
            style={{
              color: colors.gold,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.4rem",
              fontStyle: "italic",
              marginBottom: "18px",
            }}
          >
            A Yearly Gathering Of Believers
          </p>

          <div
            style={{
              width: "60px",
              height: "2px",
              background: colors.gold,
              margin: "0 auto 20px",
            }}
          />

          <p
            style={{
              color: "#CFCFCF",
              lineHeight: 1.9,
              fontSize: "1rem",
              maxWidth: "700px",
              margin: "0 auto 25px",
            }}
          >
            Every year, we come together as one family to seek God in
            prayer, worship, and the Word — a divine gathering for
            revival, restoration, healing, prophetic direction and a
            deeper encounter with God for Kingdom assignment.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "15px",
              marginBottom: "30px",
            }}
          >
            <div style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "14px", padding: "16px", textAlign: "center" }}>
              <p style={{ color: "#fff", fontWeight: 700, margin: "0 0 6px" }}>🙏 Prayer</p>
              <p style={{ color: "#BDBDBD", fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>Deep intercession & seeking God</p>
            </div>
            <div style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "14px", padding: "16px", textAlign: "center" }}>
              <p style={{ color: "#fff", fontWeight: 700, margin: "0 0 6px" }}>🔥 Worship</p>
              <p style={{ color: "#BDBDBD", fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>Worship, praise & consecration</p>
            </div>
            <div style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "14px", padding: "16px", textAlign: "center" }}>
              <p style={{ color: "#fff", fontWeight: 700, margin: "0 0 6px" }}>📖 Word</p>
              <p style={{ color: "#BDBDBD", fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>Teaching, prophecy & direction</p>
            </div>
          </div>

          <p
            style={{
              color: "#AAAAAA",
              fontSize: "0.9rem",
              fontStyle: "italic",
              marginBottom: "25px",
            }}
          >
            Join us every year — all are welcome.
          </p>

          <Link
            to="/events"
            onClick={() => window.scrollTo(0, 0)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 30px",
              borderRadius: "50px",
              background: "linear-gradient(135deg,#FFD700,#D4AF37)",
              color: "#000",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 800,
              letterSpacing: "1px",
              boxShadow: "0 0 25px rgba(255,215,0,.35)",
            }}
          >
            VIEW PRAYER CAMPS →
          </Link>
        </motion.div>

        {/* Closing statement */}
        <p
          style={{
            marginTop: "20px",
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
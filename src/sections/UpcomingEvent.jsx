import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { colors } from "../data/colors";
import eventPoster from "../assets/events/alive-youth-2027.jpeg";

function UpcomingEvent() {
  const event = {
    title: "Alive Youth Conference 2027",
    theme: "HAGIAZO — Set Apart for God's Purpose",
    scripture: "1 Peter 2:9",
    date: "13th - 16th January 2027",
    time: "All Day",
    venue: "Mityana, Uganda",
    image: eventPoster,
    description:
      "Alive Youth Conference 2027 is a life-changing gathering for the youth — set apart for God's purpose. Four days of worship, prayer, the Word, discipleship and encounters that will mark a generation for Kingdom assignment. Come ready to be separated, sanctified and sent.",
  };

  return (
    <section
      style={{
        background: colors.black,
        padding: "90px 20px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* GOLD BACKGROUND GLOW */}
      <div style={{ position: "absolute", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)", top: "-100px", right: "-100px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)", bottom: "-100px", left: "-100px", pointerEvents: "none" }} />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <p
          style={{
            color: colors.gold,
            letterSpacing: "5px",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            fontWeight: 700,
            marginBottom: "15px",
          }}
        >
          Upcoming Event
        </p>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "3rem",
            color: "#fff",
            marginBottom: "15px",
            lineHeight: 1.1,
          }}
        >
          Experience Revival Together
        </h2>

        <p
          style={{
            color: "#C5C5C5",
            maxWidth: "700px",
            margin: "0 auto 50px",
            lineHeight: 1.8,
            fontSize: "1.05rem",
          }}
        >
          Join believers from different places for a powerful encounter with God through prayer,
          worship, prophetic ministry and the teaching of God's Word.
        </p>

        {/* CARD */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            background: "#111111",
            border: `1px solid ${colors.gold}`,
            borderRadius: "20px",
            overflow: "hidden",
            textAlign: "left",
          }}
        >
          {/* IMAGE - ALIVE POSTER */}
          <div style={{ minHeight: "380px", background: "#000" }}>
            <img
              src={event.image}
              alt="Alive Youth Conference 2027 - Hagiazo - Mityana Uganda"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "380px" }}
            />
          </div>

          {/* DETAILS */}
          <div style={{ padding: "40px 30px" }}>
            <p
              style={{
                color: colors.gold,
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontSize: "0.78rem",
                fontWeight: 700,
                marginBottom: "15px",
              }}
            >
              Youth Conference • Save The Date
            </p>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2.5rem",
                color: "#fff",
                marginBottom: "10px",
                lineHeight: 1.1,
              }}
            >
              {event.title}
            </h3>

            <p
              style={{
                color: colors.gold,
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.25rem",
                fontStyle: "italic",
                marginBottom: "18px",
                lineHeight: 1.4,
              }}
            >
              Theme: {event.theme}
            </p>

            <p style={{ color: "#fff", fontWeight: 700, marginBottom: "6px" }}>
              📅 {event.date}
            </p>
            <p style={{ color: "#fff", fontWeight: 700, marginBottom: "6px" }}>
              📍 {event.venue}
            </p>
            <p style={{ color: "#C5C5C5", fontSize: "0.9rem", marginBottom: "18px" }}>
              Scripture: {event.scripture} • {event.time}
            </p>

            <p style={{ color: "#C5C5C5", lineHeight: 1.8, marginBottom: "25px" }}>
              {event.description}
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link
                to="/events"
                onClick={() => window.scrollTo(0, 0)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "13px 28px",
                  borderRadius: "50px",
                  background: "linear-gradient(135deg,#FFD700,#D4AF37)",
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  letterSpacing: "0.5px",
                }}
              >
                VIEW EVENT →
              </Link>

              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "13px 28px",
                  borderRadius: "50px",
                  border: `1px solid ${colors.gold}`,
                  color: colors.gold,
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                }}
              >
                REGISTER INTEREST
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default UpcomingEvent;
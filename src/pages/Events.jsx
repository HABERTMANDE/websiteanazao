import { Link } from "react-router-dom";
import { colors } from "../data/colors";

function Events() {
  const cardStyle = {
    backgroundColor: "#111111",
    border: `1px solid ${colors.gold}`,
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "30px",
  };

  const titleStyle = {
    color: colors.gold,
    marginBottom: "15px",
    fontSize: "1.8rem",
  };

  // MODIFICATION: Button styles for Alive card
  const goldBtn = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 30px",
    borderRadius: "50px",
    background: "linear-gradient(135deg,#FFD700,#D4AF37)",
    color: "#000",
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: 800,
    letterSpacing: "1px",
    boxShadow: "0 0 25px rgba(255,215,0,.35)",
  };

  const outlineBtn = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 30px",
    borderRadius: "50px",
    border: "1px solid #FFD700",
    color: "#FFD700",
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: 800,
    letterSpacing: "1px",
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
      {/* Hero */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto 60px",
        }}
      >
        <h1
          style={{
            color: colors.gold,
            fontSize: "4rem",
            marginBottom: "20px",
          }}
        >
          ANAZAO Events
        </h1>

        <p
          style={{
            color: "#C5C5C5",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Gatherings designed to disciple generations,
          equip leaders, and transform nations through The Truth.
        </p>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* ===== MODIFICATION: UPCOMING EVENTS HEADER - DECENT ORDER STARTS HERE ===== */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <p style={{ color: colors.gold, letterSpacing: "4px", textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 700, marginBottom: "8px" }}>
            Upcoming Events • Every Year
          </p>
          <h2 style={{ color: "white", fontSize: "2rem", margin: 0 }}>Don't Miss What God Is Doing</h2>
        </div>

        {/* ===== MODIFICATION 1: NEW CARD - ALIVE YOUTH CONFERENCE 2027 - ADDED FIRST ===== */}
        <div style={cardStyle}>
          <p style={{ color: colors.gold, letterSpacing: "4px", textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 700, marginBottom: "12px" }}>
            Featured Event • January 2027
          </p>

          <h2 style={titleStyle}>Alive Youth Conference 2027</h2>

          <p style={{ color: colors.gold, fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontStyle: "italic", marginBottom: "15px" }}>
            Theme: HAGIAZO — Set Apart for God's Purpose
          </p>

          <p style={{ marginBottom: "8px", fontWeight: 700 }}>📅 Date: 13th - 16th January 2027</p>
          <p style={{ marginBottom: "8px", fontWeight: 700 }}>📍 Location: Mityana, Uganda</p>
          <p style={{ marginBottom: "15px", color: "#AAAAAA" }}>Scripture: 1 Peter 2:9 • All Day</p>

          <p style={{ color: "#C5C5C5", lineHeight: 1.8, marginBottom: "25px" }}>
            Alive Youth Conference 2027 is a life-changing gathering for the youth — set apart for God's purpose. Four days of worship, prayer, the Word, discipleship and encounters that will mark a generation for Kingdom assignment. Come ready to be separated, sanctified and sent.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={goldBtn}>
              MORE →
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={outlineBtn}>
              REGISTER INTEREST
            </Link>
          </div>
        </div>

        {/* ===== UPCOMING EVENTS - ANNUAL PRAYER CAMP - TIMELESS ===== */}
        <div style={cardStyle}>
          <p
            style={{
              color: colors.gold,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            Upcoming Events • Every Year
          </p>

          <h2 style={titleStyle}>Annual Prayer Camp</h2>

          <p
            style={{
              color: colors.gold,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.3rem",
              fontStyle: "italic",
              marginBottom: "15px",
            }}
          >
            A Yearly Gathering Of Believers
          </p>

          <p style={{ marginBottom: "15px", fontWeight: 700 }}>
            Date: LAST WEEK OF APRIL ANNUALLY
          </p>

          <p style={{ color: "#C5C5C5", lineHeight: 1.8, marginBottom: "20px" }}>
            Every year, we come together as one family to seek God in
            prayer, worship, and the Word — a divine gathering for
            revival, restoration, healing, prophetic direction and a
            deeper encounter with God for Kingdom assignment.
          </p>

          <p style={{ color: "#C5C5C5", lineHeight: 1.8, marginBottom: "25px" }}>
            A gathering focused on equipping sons and daughters of God to be intercessors and
            leaders for transformational impact.
          </p>

          {/* 3 Pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "15px",
              marginBottom: "25px",
            }}
          >
            <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "14px", padding: "16px", textAlign: "center" }}>
              <p style={{ color: "#fff", fontWeight: 700, margin: "0 0 6px" }}>🙏 Prayer</p>
              <p style={{ color: "#C5C5C5", fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>Deep intercession & seeking God</p>
            </div>
            <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "14px", padding: "16px", textAlign: "center" }}>
              <p style={{ color: "#fff", fontWeight: 700, margin: "0 0 6px" }}>🔥 Worship</p>
              <p style={{ color: "#C5C5C5", fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>Worship, praise & consecration</p>
            </div>
            <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "14px", padding: "16px", textAlign: "center" }}>
              <p style={{ color: "#fff", fontWeight: 700, margin: "0 0 6px" }}>📖 Word</p>
              <p style={{ color: "#C5C5C5", fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>Teaching, prophecy & direction</p>
            </div>
          </div>

          <p style={{ color: "#AAAAAA", fontSize: "0.9rem", fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>
            Join us every year — all are welcome.
          </p>

          <div style={{ textAlign: "center" }}>
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
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
              REGISTER INTEREST →
            </Link>
          </div>
        </div>

        {/* Weekly Gatherings */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Weekly Gatherings</h2>

          <ul
            style={{
              paddingLeft: "20px",
              lineHeight: "2",
            }}
          >
            <li>The School of Prayer and Intercession</li>
            <li>Discipleship Classes</li>
            <li>Leadership Development Sessions</li>
            <li>Family and Community Fellowship</li>
          </ul>
        </div>

        {/* Annual Conferences */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Annual Conferences</h2>

          <p style={{ color: "#C5C5C5" }}>
            Signature ANAZAO conferences bringing together
            leaders, disciples, innovators, and communities
            from different regions and nations.
          </p>
        </div>

        {/* Missions */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Missions & Outreach</h2>

          <p style={{ color: "#C5C5C5" }}>
            Community transformation initiatives,
            evangelism outreaches, training programs,
            and strategic kingdom engagements.
          </p>
        </div>

        {/* CTA - CONTACT US ACTIVATED */}
        <div
          style={{
            ...cardStyle,
            textAlign: "center",
          }}
        >
          <h2 style={titleStyle}>Host or Partner With ANAZAO</h2>

          <p
            style={{
              marginBottom: "25px",
              color: "#C5C5C5",
            }}
          >
            Interested in hosting an ANAZAO gathering,
            conference, or leadership training?
          </p>

          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.gold,
              background: "linear-gradient(135deg,#FFD700,#D4AF37)",
              color: colors.black,
              border: "none",
              padding: "15px 35px",
              borderRadius: "50px",
              fontWeight: "800",
              fontSize: "0.9rem",
              letterSpacing: "0.5px",
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 0 25px rgba(255,215,0,.35)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Events;
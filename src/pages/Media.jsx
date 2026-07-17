import { colors } from "../data/colors";

function Media() {
  const cardStyle = {
    backgroundColor: "#111111",
    border: `1px solid ${colors.gold}`,
    borderRadius: "20px",
    padding: "30px",
    transition: "0.3s ease",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    marginTop: "50px",
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
          Media Center
        </h1>

        <p
          style={{
            color: "#C5C5C5",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Truth communicated through teaching, media, creativity,
          and digital discipleship.
        </p>
      </div>

      {/* Content Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={gridStyle}>
          <div style={cardStyle}>
            <h2 style={{ color: colors.gold, marginBottom: "15px" }}>
              Sermons & Teachings
            </h2>

            <p style={{ color: "#C5C5C5", lineHeight: "1.8" }}>
              Access apostolic teachings, prophetic messages,
              discipleship classes, and leadership training sessions.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={{ color: colors.gold, marginBottom: "15px" }}>
              Articles & Publications
            </h2>

            <p style={{ color: "#C5C5C5", lineHeight: "1.8" }}>
              Read ministry articles, devotionals,
              leadership resources, and thought leadership content.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={{ color: colors.gold, marginBottom: "15px" }}>
              Video Library
            </h2>

            <p style={{ color: "#C5C5C5", lineHeight: "1.8" }}>
              Watch conferences, sermons, interviews,
              testimonies, and event highlights.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={{ color: colors.gold, marginBottom: "15px" }}>
              Podcast & Audio
            </h2>

            <p style={{ color: "#C5C5C5", lineHeight: "1.8" }}>
              Listen to teachings, discussions,
              leadership conversations, and devotional content.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={{ color: colors.gold, marginBottom: "15px" }}>
              Photo Gallery
            </h2>

            <p style={{ color: "#C5C5C5", lineHeight: "1.8" }}>
              Explore moments from conferences,
              missions, gatherings, and outreach events.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={{ color: colors.gold, marginBottom: "15px" }}>
              Digital Discipleship
            </h2>

            <p style={{ color: "#C5C5C5", lineHeight: "1.8" }}>
              Online classes, study guides,
              training resources, and discipleship pathways.
            </p>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div
        style={{
          maxWidth: "900px",
          margin: "80px auto 0",
          textAlign: "center",
          border: `1px solid ${colors.gold}`,
          borderRadius: "20px",
          padding: "40px",
          backgroundColor: "#111111",
        }}
      >
        <h2
          style={{
            color: colors.gold,
            marginBottom: "20px",
          }}
        >
          Share the Message
        </h2>

        <p
          style={{
            color: "#C5C5C5",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Help us spread truth to cities and nations by sharing
          ANAZAO teachings and resources with your community.
        </p>

        <button
          style={{
            backgroundColor: colors.gold,
            color: colors.black,
            border: "none",
            padding: "15px 35px",
            borderRadius: "50px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Explore Resources
        </button>
      </div>
    </div>
  );
}

export default Media;
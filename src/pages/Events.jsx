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
          equip leaders, and transform nations through truth.
        </p>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Upcoming Events */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Upcoming Events</h2>

          <h3 style={{ color: colors.gold }}>
            Kingdom Leadership Summit
          </h3>

          <p style={{ marginBottom: "10px" }}>
            Date: Coming Soon
          </p>

          <p style={{ color: "#C5C5C5" }}>
            A gathering focused on equipping emerging
            leaders for transformational impact.
          </p>
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
            <li>Prayer and Intercession Meetings</li>
            <li>Discipleship Classes</li>
            <li>Leadership Development Sessions</li>
            <li>Community Fellowship Gatherings</li>
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

        {/* CTA */}
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
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;
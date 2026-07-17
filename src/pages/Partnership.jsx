import { colors } from "../data/colors";

function Partnership() {
  const cardStyle = {
    backgroundColor: "#111111",
    border: `1px solid ${colors.gold}`,
    borderRadius: "20px",
    padding: "30px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginTop: "50px",
  };

  return (
    <div
      style={{
        backgroundColor: colors.black,
        color: colors.white,
        minHeight: "100vh",
        padding: "100px 40px 80px",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto 70px",
        }}
      >
        <h1
          style={{
            color: colors.gold,
            fontSize: "4rem",
            marginBottom: "20px",
          }}
        >
          Partnership
        </h1>

        <p
          style={{
            color: "#C5C5C5",
            lineHeight: "1.9",
            fontSize: "1.1rem",
          }}
        >
          Partnership is an opportunity to participate in the work of
          discipleship, leadership development, and national transformation
          through prayer, resources, expertise, and collaboration.
        </p>
      </div>

      {/* Partnership Areas */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: colors.gold,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Ways To Partner
        </h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={{ color: colors.gold }}>
              Prayer Partnership
            </h3>

            <p style={{ color: "#C5C5C5", lineHeight: "1.8" }}>
              Stand with ANAZAO through strategic intercession and prayer
              coverage for leaders, initiatives, and nations.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: colors.gold }}>
              Financial Partnership
            </h3>

            <p style={{ color: "#C5C5C5", lineHeight: "1.8" }}>
              Support discipleship programs, leadership training,
              missions, media outreach, and transformational initiatives.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: colors.gold }}>
              Ministry Partnership
            </h3>

            <p style={{ color: "#C5C5C5", lineHeight: "1.8" }}>
              Collaborate with churches, ministries, and organizations
              that share a passion for raising truth-centered generations.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: colors.gold }}>
              Professional Partnership
            </h3>

            <p style={{ color: "#C5C5C5", lineHeight: "1.8" }}>
              Contribute skills, expertise, mentorship, innovation,
              and professional services to support the mission.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: colors.gold }}>
              Missions Partnership
            </h3>

            <p style={{ color: "#C5C5C5", lineHeight: "1.8" }}>
              Join outreach initiatives, leadership forums,
              conferences, and regional transformation efforts.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: colors.gold }}>
              Media Partnership
            </h3>

            <p style={{ color: "#C5C5C5", lineHeight: "1.8" }}>
              Help amplify the message through digital media,
              content creation, publishing, and broadcasting.
            </p>
          </div>
        </div>

        {/* Partnership Principle */}
        <div
          style={{
            ...cardStyle,
            marginTop: "60px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: colors.gold,
              marginBottom: "20px",
            }}
          >
            Partnership Philosophy
          </h2>

          <p
            style={{
              color: "#C5C5C5",
              lineHeight: "1.9",
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >
            We believe that transformation happens when individuals,
            ministries, organizations, and communities work together
            with shared vision, stewardship, and kingdom purpose.
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          <button
            style={{
              backgroundColor: colors.gold,
              color: colors.black,
              border: "none",
              padding: "16px 40px",
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Become A Partner
          </button>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
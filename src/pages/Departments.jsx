import { colors } from "../data/colors";

function Departments() {
  const cardStyle = {
    backgroundColor: "#111111",
    border: `1px solid ${colors.gold}`,
    borderRadius: "20px",
    padding: "30px",
    transition: "0.3s ease",
  };

  const departmentTitle = {
    color: colors.gold,
    fontSize: "1.7rem",
    marginBottom: "10px",
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
          ANAZAO Departments
        </h1>

        <p
          style={{
            color: "#C5C5C5",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          Every department exists to support the mission of
          transforming nations through a generation of truth.
        </p>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Current Departments */}
        <h2
          style={{
            color: colors.gold,
            marginBottom: "30px",
          }}
        >
          Current Departments
        </h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={departmentTitle}>Administration</h3>
            <p>
              Coordinates ministry operations, systems,
              planning and execution across all departments.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={departmentTitle}>Finance & Stewardship</h3>
            <p>
              Oversees budgeting, accountability, stewardship,
              giving channels and financial reporting.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={departmentTitle}>Communications</h3>
            <p>
              Manages announcements, public relations,
              engagement and outreach communication.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={departmentTitle}>Media</h3>
            <p>
              Oversees digital media, livestreams, graphics,
              social media and content production.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={departmentTitle}>Hospitality</h3>
            <p>
              Creates welcoming environments and coordinates
              guest experiences and community care.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={departmentTitle}>Governance & Records</h3>
            <p>
              Maintains ministry documentation, records,
              resolutions and official correspondence.
            </p>
          </div>
        </div>

        {/* Future Expansion */}
        <h2
          style={{
            color: colors.gold,
            marginTop: "80px",
            marginBottom: "30px",
          }}
        >
          Future Expansion Departments
        </h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={departmentTitle}>Prayer & Intercession</h3>
            <p>
              Covering the ministry and nations through strategic prayer.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={departmentTitle}>Worship & Creative Arts</h3>
            <p>
              Raising worshippers and creatives who carry truth through art.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={departmentTitle}>Discipleship & Training</h3>
            <p>
              Equipping believers through structured learning pathways.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={departmentTitle}>Missions & Evangelism</h3>
            <p>
              Extending ANAZAO's impact to cities and nations.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={departmentTitle}>Technology & Digital Platforms</h3>
            <p>
              Building digital systems that support discipleship and outreach.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={departmentTitle}>Youth & Campus Networks</h3>
            <p>
              Raising young leaders in schools, universities and communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departments;
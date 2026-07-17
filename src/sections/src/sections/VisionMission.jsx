import { colors } from "../data/colors";

function VisionMission() {
  return (
    <section
      style={{
        background: colors.white,
        color: colors.black,
        padding: "100px 50px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
        }}
      >
        {/* Vision */}
        <div
          style={{
            padding: "40px",
            border: `2px solid ${colors.gold}`,
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: colors.gold,
              fontSize: "2rem",
              marginBottom: "20px",
            }}
          >
            Our Vision
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            Transforming Nations Through a Generation of Truth.
          </p>
        </div>

        {/* Mission */}
        <div
          style={{
            padding: "40px",
            background: colors.black,
            color: colors.white,
            borderRadius: "20px",
          }}
        >
          <h2
            style={{
              color: colors.gold,
              fontSize: "2rem",
              marginBottom: "20px",
            }}
          >
            Our Mission
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              fontSize: "1.1rem",
            }}
          >
            To raise disciples, equip leaders, and establish truth-centered
            communities that transform generations, cities, and nations through
            the power of God's Word and Kingdom principles.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
import { colors } from "../data/colors";

function Give() {
  const cardStyle = {
    backgroundColor: "#111111",
    border: `1px solid ${colors.gold}`,
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  };

  const buttonStyle = {
    background: `linear-gradient(135deg, ${colors.gold}, #F4D03F)`,
    color: colors.black,
    border: "none",
    padding: "18px 45px",
    borderRadius: "50px",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: `0 8px 25px rgba(212,175,55,0.35)`,
    transition: "all 0.3s ease",
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
      <div style={cardStyle}>
        <h1
          style={{
            color: colors.gold,
            fontSize: "4rem",
            marginBottom: "20px",
          }}
        >
          Give
        </h1>

        <p
          style={{
            color: "#C5C5C5",
            lineHeight: "1.9",
            fontSize: "1.1rem",
            marginBottom: "40px",
          }}
        >
          Your generosity enables discipleship, leadership development,
          missions, media outreach, and transformational initiatives that
          impact generations and nations through truth.
        </p>

        <button
          style={buttonStyle}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow =
              "0 12px 35px rgba(212,175,55,0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0px)";
            e.target.style.boxShadow =
              "0 8px 25px rgba(212,175,55,0.35)";
          }}
        >
          GIVE NOW
        </button>

        <p
          style={{
            marginTop: "30px",
            color: "#999",
            fontSize: "0.95rem",
          }}
        >
          "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
— 2 Corinthians 9:7."
        </p>
      </div>
    </div>
  );
}

export default Give;
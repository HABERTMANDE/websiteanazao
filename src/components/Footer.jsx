import { Link } from "react-router-dom";
import { colors } from "../data/colors";

function Footer() {
  const linkStyle = {
    color: "#C5C5C5",
    textDecoration: "none",
    display: "block",
    marginBottom: "10px",
    transition: "0.3s",
  };

  return (
    <footer
      style={{
        backgroundColor: "#0A0A0A",
        borderTop: `1px solid ${colors.gold}`,
        padding: "60px 40px 30px",
        color: colors.white,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
        }}
      >
        {/* Logo and Vision */}
        <div>
          <h2
            style={{
              color: colors.gold,
              marginBottom: "15px",
              fontSize: "2rem",
              letterSpacing: "3px",
            }}
          >
            ANAZAO
          </h2>

          <p
            style={{
              color: "#C5C5C5",
              lineHeight: "1.8",
            }}
          >
            Transforming Nations Through a Generation of Truth
          </p>
        </div>

        {/* Quick Links */}
<div>
  <h3 style={{ color: colors.gold, marginBottom: "20px" }}>Quick Links</h3>

  {[
    { name: "About", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    { name: "Events", path: "/events" },
    { name: "Give", path: "/give" },
    { name: "Contact", path: "/contact" },
    { name: "Join The Movement", path: "/membership" },
  ].map((link) => (
    <Link
      key={link.path}
      to={link.path}
      style={linkStyle}
      onMouseEnter={(e) => (e.target.style.color = colors.gold)}
      onMouseLeave={(e) => (e.target.style.color = "#C5C5C5")}
    >
      {link.name} →
    </Link>
  ))}
</div>
        {/* Contact */}
        <div>
          <h3
            style={{
              color: colors.gold,
              marginBottom: "20px",
            }}
          >
            Contact
          </h3>

          <p style={{ color: "#C5C5C5", marginBottom: "10px" }}>
            WhatsApp:
          </p>

          <a
            href="https://wa.me/254782233163"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: colors.white,
              textDecoration: "none",
            }}
          >
            +254 782 233 163
          </a>

          <p
            style={{
              color: "#C5C5C5",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Email:
          </p>

          <a
            href="mailto:emetanazao@gmail.com"
            style={{
              color: colors.white,
              textDecoration: "none",
            }}
          >
            emetanazao@gmail.com
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: `1px solid rgba(212,175,55,0.3)`,
          marginTop: "50px",
          paddingTop: "25px",
          textAlign: "center",
          color: "#888",
          fontSize: "0.9rem",
        }}
      >
        © 2026 ANAZAO. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
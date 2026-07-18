import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { colors } from "../data/colors";
import logo from "../assets/logos/anazao-logo.png";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = {
    color: colors.white,
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
    transition: "0.3s ease",
  };

  return (
    <nav
      style={{
        background: "#000",
        borderBottom: `1px solid ${colors.gold}`,
        position: "sticky",
        top: 0,
        zIndex: 9999,
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none",
            flex: 1,
            minWidth: 0,
          }}
        >
          <img
            src={logo}
            alt="ANAZAO"
            style={{
              width: "58px",
              height: "58px",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />

          <div style={{ minWidth: 0 }}>
            <h1
              style={{
                margin: 0,
                color: "#FFD700",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem,3vw,2.6rem)",
                letterSpacing: "4px",
                lineHeight: 1,
                whiteSpace: "nowrap",
                textShadow: `
                  0 0 6px rgba(255,215,0,.9),
                  0 0 15px rgba(255,215,0,.6),
                  0 0 30px rgba(255,215,0,.4)
                `,
              }}
            >
              ANAZAO
            </h1>

            <p
              style={{
                margin: "4px 0 0",
                color: colors.white,
                fontSize: "0.85rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              The Family of Grace
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "28px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li><Link to="/about" style={navLinkStyle}>About</Link></li>
          <li><Link to="/leadership" style={navLinkStyle}>Leadership</Link></li>
          <li><Link to="/departments" style={navLinkStyle}>Departments</Link></li>
          <li><Link to="/media" style={navLinkStyle}>Media Center</Link></li>
          <li><Link to="/partnership" style={navLinkStyle}>Partnership</Link></li>
          <li><Link to="/give" style={navLinkStyle}>Give</Link></li>
          <li><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "transparent",
            border: "none",
            color: "#FFD700",
            fontSize: "2rem",
            cursor: "pointer",
            marginLeft: "15px",
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          style={{
            background: "#050505",
            borderTop: `1px solid ${colors.gold}`,
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            padding: "25px",
            gap: "22px",
          }}
        >
          <Link to="/about" style={navLinkStyle} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/leadership" style={navLinkStyle} onClick={() => setMenuOpen(false)}>Leadership</Link>
          <Link to="/departments" style={navLinkStyle} onClick={() => setMenuOpen(false)}>Departments</Link>
          <Link to="/media" style={navLinkStyle} onClick={() => setMenuOpen(false)}>Media Center</Link>
          <Link to="/partnership" style={navLinkStyle} onClick={() => setMenuOpen(false)}>Partnership</Link>
          <Link to="/give" style={navLinkStyle} onClick={() => setMenuOpen(false)}>Give</Link>
          <Link to="/contact" style={navLinkStyle} onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
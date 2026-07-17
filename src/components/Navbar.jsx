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
        backgroundColor: colors.black,
        borderBottom: `1px solid ${colors.gold}`,
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "25px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo Section */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img
            src={logo}
            alt="ANAZAO Logo"
            style={{
              height: "110px",
              width: "auto",
              objectFit: "contain",
            }}
          />

          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "2.5rem",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: "700",
                letterSpacing: "5px",
                lineHeight: 1,
                color: "#FFD700",
                textShadow: `
                  0 0 5px rgba(255,215,0,0.9),
                  0 0 10px rgba(255,215,0,0.8),
                  0 0 20px rgba(255,215,0,0.7),
                  0 0 35px rgba(255,215,0,0.5)
                `,
              }}
            >
              ANAZAO
            </h1>

            <p
              style={{
                margin: 0,
                color: colors.white,
                fontSize: "0.8rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginTop: "6px",
                fontWeight: "500",
              }}
            >
              The Family of Grace
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "30px",
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

        {/* Hamburger Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#FFD700",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#111111",
            borderTop: `1px solid ${colors.gold}`,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <Link to="/about" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/leadership" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
            Leadership
          </Link>

          <Link to="/departments" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
            Departments
          </Link>

          <Link to="/media" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
            Media Center
          </Link>

          <Link to="/partnership" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
            Partnership
          </Link>

          <Link to="/give" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
            Give
          </Link>

          <Link to="/contact" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
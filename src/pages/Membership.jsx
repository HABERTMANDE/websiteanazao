import { useState } from "react";
import { Link } from "react-router-dom";

function Membership() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    interest: "",
    category: "",
    hearAbout: "",
    bornAgain: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,215,0,0.3)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    fontSize: "1rem",
    outline: "none",
    fontFamily: "Montserrat, sans-serif",
  };

  const labelStyle = {
    display: "block",
    color: "#FFD700",
    fontWeight: "700",
    marginBottom: "8px",
    fontSize: "0.9rem",
  };

  // SUCCESS SCREEN
  if (submitted) {
    return (
      <section style={{ minHeight: "100vh", background: "#050A1A", display: "flex", justifyContent: "center", alignItems: "center", padding: "100px 1.2rem 50px", textAlign: "center" }}>
        <div style={{ maxWidth: "650px", background: "rgba(255,255,255,0.05)", padding: "40px 30px", borderRadius: "20px", border: "1px solid rgba(255,215,0,0.3)" }}>
          <div style={{ fontSize: "3.5rem" }}>🎉</div>
          <h1 style={{ color: "#FFD700", fontSize: "2rem", margin: "15px 0" }}>Welcome to ANAZAO, {form.fullName.split(" ")[0]}!</h1>
          <p style={{ color: "#ECECEC", lineHeight: "1.8" }}>
            Thank you for joining the movement. You are now part of a generation of truth transforming nations.
            <br /><br />
            <b style={{ color: "#fff" }}>Next Steps:</b><br />
            1. Join our WhatsApp Community below<br />
            2. Our team will contact you on {form.phone}<br />
            3. You will be connected to your department: <b style={{ color: "#FFD700" }}>{form.interest}</b>
          </p>
          <a href="https://chat.whatsapp.com/D8HlNteiolD6xElC2S6A8C" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: "25px", background: "#25D366", color: "#fff", padding: "16px 32px", borderRadius: "50px", fontWeight: "700", textDecoration: "none" }}>
            Join WhatsApp Community →
          </a>
          <br />
          <Link to="/" style={{ display: "inline-block", marginTop: "20px", color: "#FFD700", textDecoration: "none" }}>← Back to Home</Link>
        </div>
      </section>
    );
  }

  // FORM SCREEN
  return (
    <section style={{ minHeight: "100vh", background: "linear-gradient(180deg, #050A1A, #000)", padding: "110px 1.2rem 60px", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "650px", width: "100%" }}>
        <p style={{ color: "#FFD700", letterSpacing: "4px", textTransform: "uppercase", fontWeight: "700", textAlign: "center" }}>Anazao • Join The Movement</p>
        <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 6vw, 3rem)", textAlign: "center", margin: "10px 0 10px" }}>Membership Registration</h1>
        <p style={{ color: "#ECECEC", textAlign: "center", marginBottom: "35px", lineHeight: "1.7" }}>Fill this form to become part of ANAZAO. We will contact you and connect you to your department.</p>

        <form onSubmit={handleSubmit} style={{ background: "rgba(255,255,255,0.05)", padding: "30px 25px", borderRadius: "20px", border: "1px solid rgba(255,215,0,0.2)", display: "flex", flexDirection: "column", gap: "20px" }}>

          <div><label style={labelStyle}>1. Full Name *</label><input style={inputStyle} name="fullName" value={form.fullName} onChange={handleChange} placeholder="e.g. John Kamau" required /></div>

          <div><label style={labelStyle}>2. Phone Number *</label><input style={inputStyle} name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. 0712 345 678" required /></div>

          <div><label style={labelStyle}>3. Email Address</label><input style={inputStyle} type="email" name="email" value={form.email} onChange={handleChange} placeholder="e.g. you@email.com" /></div>

          <div><label style={labelStyle}>4. Location *</label><input style={inputStyle} name="location" value={form.location} onChange={handleChange} placeholder="e.g. Eldoret, Kenya" required /></div>

          <div>
            <label style={labelStyle}>5. Area of Interest / Department *</label>
            <select style={inputStyle} name="interest" value={form.interest} onChange={handleChange} required>
              <option value="" style={{ color: "#000" }}>Select Department</option>
              <option style={{ color: "#000" }}>Worship & Music</option>
              <option style={{ color: "#000" }}>Media & Production</option>
              <option style={{ color: "#000" }}>Intercession & Prayer</option>
              <option style={{ color: "#000" }}>Discipleship & Teaching</option>
              <option style={{ color: "#000" }}>Children & Youth</option>
              <option style={{ color: "#000" }}>Evangelism & Outreach</option>
              <option style={{ color: "#000" }}>Hospitality & Ushering</option>
              <option style={{ color: "#000" }}>Administration</option>
              <option style={{ color: "#000" }}>Not Sure Yet - Help Me Decide</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>6. Membership Category *</label>
            <select style={inputStyle} name="category" value={form.category} onChange={handleChange} required>
              <option value="" style={{ color: "#000" }}>Select Category</option>
              <option style={{ color: "#000" }}>New Believer</option>
              <option style={{ color: "#000" }}>Regular Member</option>
              <option style={{ color: "#000" }}>Partner</option>
              <option style={{ color: "#000" }}>Leader / Minister</option>
              <option style={{ color: "#000" }}>Student</option>
              <option style={{ color: "#000" }}>Online / Diaspora Member</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>7. How did you hear about ANAZAO?</label>
            <select style={inputStyle} name="hearAbout" value={form.hearAbout} onChange={handleChange}>
              <option value="" style={{ color: "#000" }}>Select One</option>
              <option style={{ color: "#000" }}>WhatsApp</option>
              <option style={{ color: "#000" }}>Facebook</option>
              <option style={{ color: "#000" }}>Instagram</option>
              <option style={{ color: "#000" }}>Friend / Family</option>
              <option style={{ color: "#000" }}>Church Service</option>
              <option style={{ color: "#000" }}>Other</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>8. Are you born again?</label>
            <select style={inputStyle} name="bornAgain" value={form.bornAgain} onChange={handleChange}>
              <option value="" style={{ color: "#000" }}>Select One</option>
              <option style={{ color: "#000" }}>Yes</option>
              <option style={{ color: "#000" }}>No</option>
              <option style={{ color: "#000" }}>Not Sure Yet</option>
            </select>
          </div>

          <button type="submit" style={{ background: "linear-gradient(135deg,#FFD700,#F5C542,#D4AF37)", color: "#000", padding: "18px", borderRadius: "50px", border: "none", fontWeight: "700", fontSize: "1.05rem", cursor: "pointer", marginTop: "10px" }}>
            Complete Registration
          </button>

        </form>
      </div>
    </section>
  );
}

export default Membership;
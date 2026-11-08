import { useState } from "react";
import { colors } from "../data/colors";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myWhatsAppNumber = "254782233163";

    const message = `💬 NEW CONTACT MESSAGE - ANAZAO 💬

1. Name: ${form.name}
2. Phone: ${form.phone}
3. Message: ${form.message}`;

    window.open(`https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(message)}`, "_blank");
    setSent(true);
  };

  const cardStyle = {
    backgroundColor: "#111111",
    border: `1px solid ${colors.gold}`,
    borderRadius: "20px",
    padding: "50px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    backgroundColor: colors.gold,
    color: colors.black,
    padding: "16px 35px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "1rem",
    marginTop: "20px",
    marginBottom: "30px",
    border: "none",
    cursor: "pointer",
    width: "100%",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: `1px solid ${colors.gold}`,
    backgroundColor: "#1a1a1a",
    color: colors.white,
    fontSize: "1rem",
    marginBottom: "15px",
    outline: "none",
    boxSizing: "border-box",
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
        <h1 style={{ color: colors.gold, fontSize: "4rem", marginBottom: "20px" }}>
          Contact ANAZAO
        </h1>

        <p style={{ color: "#C5C5C5", lineHeight: "1.8", marginBottom: "30px" }}>
          We'd love to hear from you. Reach out for partnership,
          discipleship, events, prayer requests, or ministry inquiries.
        </p>

        {/* WhatsApp Direct Button - NOW WITH MESSAGE */}
        <a
          href="https://wa.me/254782233163?text=Hello%20ANAZAO!%20I%20would%20like%20to%20get%20in%20touch."
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          💬 Chat on WhatsApp
        </a>

        <p style={{ color: "#C5C5C5", margin: "10px 0 25px" }}>— OR send a message below —</p>

        {sent ? (
          <div style={{ backgroundColor: "#1a2e1a", border: `1px solid #25D366`, padding: "25px", borderRadius: "15px" }}>
            <h2 style={{ color: "#25D366" }}>✅ Message Ready!</h2>
            <p style={{ color: "#C5C5C5", marginTop: "10px" }}>WhatsApp opened with your message. Press Send to deliver it to us.</p>
            <button onClick={() => setSent(false)} style={{ ...buttonStyle, width: "auto", marginTop: "20px" }}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
            <input
              style={inputStyle}
              type="text"
              name="name"
              placeholder="Your Full Name *"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              style={inputStyle}
              type="tel"
              name="phone"
              placeholder="Your Phone Number *"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <textarea
              style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
              name="message"
              placeholder="Your Message... (Partnership, Prayer, Event, Question) *"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" style={buttonStyle}>
              Send Message via WhatsApp →
            </button>
          </form>
        )}

        <div style={{ marginTop: "20px", lineHeight: "2" }}>
          <h3 style={{ color: colors.gold }}>WhatsApp</h3>
          <p>+254 782 233 163</p>
          <h3 style={{ color: colors.gold, marginTop: "30px" }}>Email</h3>
          <p>emetanazao@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
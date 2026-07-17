import { colors } from "../data/colors";

function Contact() {
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
          Contact ANAZAO
        </h1>

        <p
          style={{
            color: "#C5C5C5",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          We'd love to hear from you. Reach out for partnership,
          discipleship, events, prayer requests, or ministry inquiries.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/254782233163"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 8.016 0C3.59 0 0 3.59 0 8.016c0 1.414.37 2.795 1.073 4.013L0 16l4.085-1.066a8.015 8.015 0 0 0 3.93 1.003h.003c4.425 0 8.015-3.59 8.015-8.015a7.964 7.964 0 0 0-2.432-5.596zM8.018 14.5a6.48 6.48 0 0 1-3.301-.901l-.236-.14-2.424.633.647-2.363-.153-.243a6.482 6.482 0 0 1-1.006-3.47c0-3.585 2.887-6.5 6.473-6.5a6.49 6.49 0 0 1 4.601 1.905 6.452 6.452 0 0 1 1.899 4.595c0 3.585-2.887 6.484-6.5 6.484zm3.562-4.867c-.195-.098-1.156-.57-1.336-.635-.18-.065-.312-.098-.443.098-.13.195-.507.634-.622.764-.114.13-.228.147-.423.049-.195-.098-.823-.303-1.568-.967-.58-.517-.972-1.156-1.086-1.351-.114-.195-.012-.301.086-.398.088-.087.195-.228.293-.342.098-.114.13-.195.195-.326.065-.13.033-.244-.016-.342-.049-.098-.443-1.07-.607-1.465-.16-.384-.322-.332-.443-.338h-.377c-.13 0-.342.049-.521.244-.179.195-.684.668-.684 1.628 0 .96.7 1.888.797 2.018.098.13 1.378 2.104 3.338 2.95.466.201.83.321 1.113.411.468.149.894.128 1.231.078.376-.056 1.156-.472 1.319-.928.163-.456.163-.846.114-.928-.048-.081-.179-.13-.374-.228z"/>
          </svg>

          Chat on WhatsApp
        </a>

        <div
          style={{
            marginTop: "20px",
            lineHeight: "2",
          }}
        >
          <h3 style={{ color: colors.gold }}>WhatsApp</h3>
          <p>+254 782 233 163</p>

          <h3
            style={{
              color: colors.gold,
              marginTop: "30px",
            }}
          >
            Email
          </h3>

          <p>emetanazao@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
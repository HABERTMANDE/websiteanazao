import { motion } from "framer-motion";
import { colors } from "../data/colors";
import prayerCamp from "../assets/events/prayer-camp-season3.jpg";

function UpcomingEvent() {
  const event = {
    title: "PRAYER CAMP SEASON 3",
    theme: "Highways & Hedges",
    scripture: "Luke 14:23",
    date: "31 July 2026",
    focus: "Great Recovery",
    description:
      "Prayer Camp Season 3 is a divine gathering designed to awaken hearts, restore destinies, and prepare believers for Kingdom assignment. Through prayer, worship, sound teaching and the prophetic, participants will experience transformation, healing and fresh encounters with God.",
    location: "ANAZAO Prayer Camp",
  };

  return (
    <section
      style={{
        background: "#000",
        padding: "110px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(255,215,0,.10), transparent 70%)",
          borderRadius: "50%",
          top: "-250px",
          right: "-250px",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              color: colors.gold,
              letterSpacing: "6px",
              textTransform: "uppercase",
              fontWeight: "700",
              marginBottom: "18px",
            }}
          >
            Upcoming Event
          </p>

          <h2
            style={{
              color: colors.white,
              fontSize: "clamp(2.3rem,6vw,4.2rem)",
              fontFamily: "'Cormorant Garamond', serif",
              marginBottom: "18px",
            }}
          >
            Experience the Next Divine Encounter
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#cfcfcf",
              lineHeight: "1.9",
              fontSize: "1.05rem",
            }}
          >
            Join believers from different places as we gather for a powerful
            season of prayer, worship, teaching and spiritual renewal.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Flyer */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
            }}
          >
            <img
              src={prayerCamp}
              alt="Prayer Camp Season 3"
              style={{
                width: "100%",
                borderRadius: "28px",
                border: "2px solid #D4AF37",
                boxShadow:
                  "0 25px 60px rgba(0,0,0,.55),0 0 35px rgba(212,175,55,.25)",
              }}
            />
          </motion.div>

          {/* Event Information */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(17,17,17,.92)",
              border: "1px solid rgba(212,175,55,.35)",
              borderRadius: "28px",
              padding: "45px",
              backdropFilter: "blur(15px)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: "rgba(212,175,55,.12)",
                color: colors.gold,
                padding: "10px 20px",
                borderRadius: "40px",
                fontWeight: "700",
                letterSpacing: "2px",
                marginBottom: "24px",
                border: "1px solid rgba(212,175,55,.3)",
              }}
            >
              FEATURED EVENT
            </span>

            <h2
              style={{
                color: colors.white,
                fontSize: "clamp(2rem,5vw,3.3rem)",
                fontFamily: "'Cormorant Garamond', serif",
                marginBottom: "18px",
              }}
            >
              {event.title}
            </h2>

            <h3
              style={{
                color: colors.gold,
                fontSize: "1.4rem",
                marginBottom: "30px",
              }}
            >
              {event.theme}
            </h3>
                        <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: "18px",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  background: "#0d0d0d",
                  border: "1px solid rgba(212,175,55,.25)",
                  borderRadius: "16px",
                  padding: "18px",
                }}
              >
                <p
                  style={{
                    color: "#999",
                    marginBottom: "8px",
                    fontSize: ".85rem",
                    textTransform: "uppercase",
                  }}
                >
                  Date
                </p>

                <h4
                  style={{
                    color: colors.white,
                    margin: 0,
                  }}
                >
                  {event.date}
                </h4>
              </div>

              <div
                style={{
                  background: "#0d0d0d",
                  border: "1px solid rgba(212,175,55,.25)",
                  borderRadius: "16px",
                  padding: "18px",
                }}
              >
                <p
                  style={{
                    color: "#999",
                    marginBottom: "8px",
                    fontSize: ".85rem",
                    textTransform: "uppercase",
                  }}
                >
                  Scripture
                </p>

                <h4
                  style={{
                    color: colors.gold,
                    margin: 0,
                  }}
                >
                  {event.scripture}
                </h4>
              </div>

              <div
                style={{
                  background: "#0d0d0d",
                  border: "1px solid rgba(212,175,55,.25)",
                  borderRadius: "16px",
                  padding: "18px",
                }}
              >
                <p
                  style={{
                    color: "#999",
                    marginBottom: "8px",
                    fontSize: ".85rem",
                    textTransform: "uppercase",
                  }}
                >
                  Theme
                </p>

                <h4
                  style={{
                    color: colors.white,
                    margin: 0,
                  }}
                >
                  {event.theme}
                </h4>
              </div>
  <p>Focus</p>
  <h4>{event.focus}</h4>
</div>
            </div>

            <p
              style={{
                color: "#D8D8D8",
                lineHeight: "2",
                fontSize: "1rem",
                marginBottom: "35px",
              }}
            >
              {event.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "18px",
              }}
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="https://chat.whatsapp.com/D8HlNteiolD6xElC2S6A8C"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                }}
              >
                <button
                  style={{
                    background:
                      "linear-gradient(135deg,#FFD700,#F5C542,#D4AF37)",
                    color: "#000",
                    border: "none",
                    borderRadius: "50px",
                    padding: "16px 34px",
                    fontWeight: "700",
                    cursor: "pointer",
                    fontSize: "1rem",
                    boxShadow:
                      "0 12px 30px rgba(212,175,55,.35)",
                  }}
                >
                  Join Prayer Camp
                </button>
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="/events"
                style={{
                  textDecoration: "none",
                }}
              >
                <button
                  style={{
                    background: "transparent",
                    color: colors.gold,
                    border: "1px solid #D4AF37",
                    borderRadius: "50px",
                    padding: "16px 34px",
                    fontWeight: "700",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  View All Events
                </button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvent;
import { motion } from "framer-motion";
import "../styles/statistics.css";

function Statistics() {
  const statistics = [
    {
      value: "01",
      label: "Generation",
      description: "Raising a generation grounded in truth.",
    },
    {
      value: "03",
      label: "Departments",
      description:
        "Equipping people through diverse expressions of ministry.",
    },
    {
      value: "∞",
      label: "Impact",
      description:
        "Cohorting diverse talents, abilities, gifts and skills individually together.",
    },
    {
      value: "01",
      label: "Vision",
      description:
        "One unified vision raising a transformed generation blessed with unlimited potential.",
    },
  ];

  return (
    <section className="anazao-statistics">
      <div className="statistics-container">

        {/* SECTION INTRODUCTION */}
        <motion.div
          className="statistics-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="statistics-eyebrow">
            OUR FOUNDATION
          </span>

          <h2>
            One Vision.
            <span> Lasting Impact.</span>
          </h2>

          <p>
            Four expressions of one unified vision:
            transforming nations through a generation
            grounded in truth.
          </p>

          <div className="statistics-header-line">
            <span />
          </div>
        </motion.div>

        {/* STATISTICS GRID */}
        <div className="statistics-grid">
          {statistics.map((stat, index) => (
            <motion.article
              key={stat.label}
              className="statistics-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
            >
              {/* CARD TOP */}
              <div className="statistics-card-top">
                <span className="statistics-number">
                  {stat.value}
                </span>

                <span className="statistics-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* GOLD DIVIDER */}
              <div className="statistics-divider" />

              {/* CARD CONTENT */}
              <div className="statistics-card-content">
                <h3>{stat.label}</h3>

                <p>{stat.description}</p>
              </div>

              {/* BOTTOM ACCENT */}
              <div className="statistics-card-accent" />
            </motion.article>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
        <motion.div
          className="statistics-footer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="statistics-footer-line" />

          <p>
            WE ARE A GENERATION TRANSFORMED BY TRUTH
            <span> — JOHN 6:63</span>
          </p>

          <span className="statistics-footer-line" />
        </motion.div>

      </div>
    </section>
  );
}

export default Statistics;
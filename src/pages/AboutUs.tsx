import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/about-contact-redesign.css";
import { motion } from "motion/react";
import {
  ArrowRight,
  MoveRight,
  Orbit,
  ShieldCheck,
  Sparkles,
  Target,
  Waypoints,
} from "lucide-react";
import { Link } from "react-router-dom";

const manifest = [
  "We shape ventures with a portfolio mindset instead of isolated decision-making.",
  "We care about commercial logic and the sensory quality of the final experience.",
  "We build for durability, not noise, and growth is expected to compound across the group.",
];

const stats = [
  { value: "29+", label: "years of momentum" },
  { value: "05", label: "business verticals" },
  { value: "Global", label: "commercial outlook" },
];

const pillars = [
  {
    icon: Orbit,
    title: "Portfolio intelligence",
    body: "Every business is expected to strengthen the wider group, not just itself.",
  },
  {
    icon: Sparkles,
    title: "Taste in execution",
    body: "Good strategy is not enough. The final experience also has to feel refined and intentional.",
  },
  {
    icon: ShieldCheck,
    title: "Operational discipline",
    body: "Structure, trust, and delivery quality are treated as part of the product.",
  },
  {
    icon: Target,
    title: "Selective ambition",
    body: "We enter spaces where conviction, timing, and stewardship can create lasting relevance.",
  },
];

const trajectory = [
  {
    label: "Foundation",
    year: "1996",
    body: "The group begins with entrepreneurial discipline and a long-view approach to value creation.",
  },
  {
    label: "Expansion",
    year: "Scale",
    body: "ARNN grows across multiple sectors while keeping a deliberate posture toward opportunity and execution.",
  },
  {
    label: "Current mode",
    year: "Today",
    body: "The business operates as a connected platform where partnerships, design, and operations reinforce each other.",
  },
];

export function AboutUs() {
  return (
    <div className="ar2-shell ar2-about">
      <Header />

      <main className="ar2-main">
        <section className="ar2-hero">
          <div className="ar2-noise" />
          <div className="ar2-beam ar2-beam-a" />
          <div className="ar2-beam ar2-beam-b" />

          <div className="ar2-container">
            <motion.div
              className="ar2-about-hero"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <div className="ar2-about-stage">
                <div className="ar2-about-copy">
                  <div className="ar2-chip">
                    <Waypoints size={14} />
                    <span>About ARNN Group</span>
                  </div>
                  <p className="ar2-kicker">Built with precision. Expanded with intent.</p>
                  <h1 className="ar2-display">
                    A modern group platform where strategy, design quality, and execution move together.
                  </h1>
                  <p className="ar2-lead">
                    ARNN Group develops businesses with a long-horizon operating view. The work is not
                    about creating generic scale. It is about building ventures that are commercially
                    sharp, structurally disciplined, and credible in how they present themselves to the world.
                  </p>

                  <div className="ar2-actions">
                    <Link to="/contact" className="ar2-button ar2-button-solid">
                      Contact the group
                      <ArrowRight size={18} />
                    </Link>
                    <a href="#ar2-about-story" className="ar2-button ar2-button-outline">
                      Read the story
                    </a>
                  </div>
                </div>

                <div className="ar2-about-aside">
                  <div className="ar2-about-panel">
                    <div className="ar2-panel-head">
                      <span>Manifest</span>
                      <span>01</span>
                    </div>
                    <div className="ar2-manifest-list">
                      {manifest.map((item, index) => (
                        <article key={item} className="ar2-manifest-item">
                          <span>{`0${index + 1}`}</span>
                          <p>{item}</p>
                        </article>
                      ))}
                    </div>
                  </div>

                  <div className="ar2-about-microstat">
                    <span>Group signal</span>
                    <strong>Long-horizon value with sharp execution discipline.</strong>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="ar2-section ar2-section-tight">
          <div className="ar2-container">
            <div className="ar2-stat-ribbon">
              {stats.map((item) => (
                <article key={item.label} className="ar2-stat-cell">
                  <p className="ar2-stat-value">{item.value}</p>
                  <p className="ar2-stat-label">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ar2-about-story" className="ar2-section">
          <div className="ar2-container">
            <div className="ar2-editorial-grid">
              <motion.article
                className="ar2-editorial-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55 }}
              >
                <div className="ar2-chip">
                  <Sparkles size={14} />
                  <span>Identity</span>
                </div>
                <h2 className="ar2-heading">
                  We build ventures that feel deliberate from the inside out.
                </h2>
                <p className="ar2-body">
                  The group’s edge comes from pairing business discipline with strong judgment on
                  positioning, experience, and long-term value. That combination makes the portfolio
                  feel coherent rather than accidental.
                </p>
                <p className="ar2-body">
                  ARNN Group is less interested in looking busy than in building businesses that are
                  credible, differentiated, and able to mature well over time.
                </p>
              </motion.article>

              <motion.aside
                className="ar2-quote-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.08 }}
              >
                <p className="ar2-quote-mark">"</p>
                <p className="ar2-quote-text">
                  The goal is not simply to own multiple businesses. The goal is to shape a group
                  where each decision adds weight, clarity, and trust to the whole.
                </p>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="ar2-section">
          <div className="ar2-container">
            <div className="ar2-section-head">
              <div className="ar2-chip">
                <Target size={14} />
                <span>How we operate</span>
              </div>
              <h2 className="ar2-heading">A sharper operating philosophy behind every vertical.</h2>
            </div>

            <div className="ar2-pillar-grid">
              {pillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    className={`ar2-pillar-card ar2-pillar-${index + 1}`}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.48, delay: index * 0.07 }}
                  >
                    <div className="ar2-icon-wrap">
                      <Icon size={20} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ar2-section">
          <div className="ar2-container">
            <div className="ar2-trajectory-shell">
              <div className="ar2-section-head ar2-section-head-compact">
                <div className="ar2-chip">
                  <Orbit size={14} />
                  <span>Trajectory</span>
                </div>
                <h2 className="ar2-heading">Progress shaped by intent rather than volume.</h2>
              </div>

              <div className="ar2-trajectory-list">
                {trajectory.map((item, index) => (
                  <motion.article
                    key={item.label}
                    className="ar2-trajectory-item"
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div className="ar2-trajectory-meta">
                      <span>{item.label}</span>
                      <strong>{item.year}</strong>
                    </div>
                    <p>{item.body}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ar2-section ar2-section-end">
          <div className="ar2-container">
            <motion.div
              className="ar2-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="ar2-kicker">Next step</p>
                <h2 className="ar2-heading">
                  If the opportunity matters, the conversation should be direct.
                </h2>
              </div>
              <Link to="/contact" className="ar2-button ar2-button-solid">
                Start a conversation
                <MoveRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/about-contact-redesign.css";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const officeAddress = "Office No. 215, Al Makhawi Building, Oud Metha, Dubai";
const mapSearchAddress = "Al Makhawi Building, Oud Metha, Dubai";

const channels = [
  {
    icon: Phone,
    label: "Phone",
    value: "+971 4 297 1774",
    detail: "Direct line for serious business enquiries",
    href: "tel:+97142971774",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@arnngroup.com",
    detail: "Partnership, media, and project communication",
    href: "mailto:info@arnngroup.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Office No. 215,\nAl Makhawi Building,\nOud Metha, Dubai",
    detail: "Regional headquarters",
    href: null,
  },
  {
    icon: Clock3,
    label: "Hours",
    value: "Sunday - Thursday,\n9:00 AM - 6:00 PM GST",
    detail: "Reply window during standard business hours",
    href: null,
  },
];

const responseNotes = [
  "Messages are reviewed during standard business hours.",
  "Clear scope and timeline help us route enquiries faster.",
  "Phone and email remain available for direct contact.",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        window.setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ar2-shell ar2-contact">
      <Header />

      <main className="ar2-main">
        <section className="ar2-hero">
          <div className="ar2-noise" />
          <div className="ar2-beam ar2-beam-c" />
          <div className="ar2-beam ar2-beam-d" />

          <div className="ar2-container">
            <motion.div
              className="ar2-contact-hero"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <div className="ar2-contact-stage ar2-contact-stage-clean">
                <div className="ar2-contact-copy">
                  <div className="ar2-chip">
                    <Sparkles size={14} />
                    <span>Contact ARNN Group</span>
                  </div>
                  <p className="ar2-kicker">Direct business communication.</p>
                  <h1 className="ar2-display">
                    Reach out for partnerships, projects, strategic enquiries, or media conversations.
                  </h1>
                  <p className="ar2-lead">
                    Use the form for detailed enquiries, or contact the group directly through phone
                    or email. Clear briefs with scope and timeline help us route your message faster.
                  </p>
                </div>

                <div className="ar2-contact-quickgrid">
                  {channels.map((item, index) => {
                    const Icon = item.icon;
                    const Wrapper = item.href ? "a" : "div";

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <Wrapper
                          {...(item.href ? { href: item.href } : {})}
                          className="ar2-quick-card"
                        >
                          <div className="ar2-quick-card-top">
                            <div className="ar2-quick-icon">
                              <Icon size={18} />
                            </div>
                            <div className="ar2-quick-card-meta">
                              <p className="ar2-quick-label">{item.label}</p>
                              <span className="ar2-quick-index">{`0${index + 1}`}</span>
                            </div>
                          </div>
                          <div className="ar2-quick-copy">
                            <h2>
                              {item.value.split("\n").map((line, lineIndex) => (
                                <span
                                  key={`${item.label}-${lineIndex}`}
                                  className="ar2-quick-line"
                                >
                                  {line}
                                </span>
                              ))}
                            </h2>
                            <p>{item.detail}</p>
                          </div>
                          <div className="ar2-quick-card-bottom">
                            <span className="ar2-quick-footnote">
                              {item.href ? "Direct channel" : "Business info"}
                            </span>
                            {item.href ? <ArrowRight size={16} /> : <span className="ar2-quick-dot" />}
                          </div>
                        </Wrapper>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="ar2-section ar2-section-end">
          <div className="ar2-container">
            <motion.div
              className="ar2-form-shell ar2-form-shell-wide"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.5 }}
            >
              <div className="ar2-form-topbar">
                {responseNotes.map((item, index) => (
                  <div key={item} className="ar2-topbar-item">
                    <span>{`0${index + 1}`}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="ar2-form-layout">
                <div className="ar2-form-head">
                  <div className="ar2-chip ar2-chip-dark">
                    <Send size={14} />
                    <span>Send a message</span>
                  </div>
                  <h2 className="ar2-heading ar2-heading-light">
                    Write with enough detail for a meaningful reply.
                  </h2>
                  <p className="ar2-form-copy">
                    For partnerships, commercial proposals, media requests, or project discussions,
                    use the form below and include the relevant context.
                  </p>
                </div>

                <form className="ar2-form" onSubmit={handleSubmit}>
                  <div className="ar2-form-grid">
                    <label className="ar2-field">
                      <span>Name</span>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((current) => ({ ...current, name: e.target.value }))
                        }
                        required
                        placeholder="Your name"
                      />
                    </label>

                    <label className="ar2-field">
                      <span>Email</span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((current) => ({ ...current, email: e.target.value }))
                        }
                        required
                        placeholder="you@company.com"
                      />
                    </label>
                  </div>

                  <label className="ar2-field">
                    <span>Subject</span>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData((current) => ({ ...current, subject: e.target.value }))
                      }
                      required
                      placeholder="Partnership, project, media, or strategic enquiry"
                    />
                  </label>

                  <label className="ar2-field">
                    <span>Message</span>
                    <textarea
                      rows={7}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((current) => ({ ...current, message: e.target.value }))
                      }
                      required
                      placeholder="Describe the opportunity, context, timeline, and preferred next step."
                    />
                  </label>

                  <button
                    type="submit"
                    className="ar2-button ar2-button-solid ar2-form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send enquiry"}
                    <ArrowRight size={18} />
                  </button>

                  {submitStatus === "success" && (
                    <div className="ar2-status ar2-status-success">
                      <CheckCircle2 size={18} />
                      <span>Your message was sent successfully.</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="ar2-status ar2-status-error">
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="ar2-section ar2-map-section">
          <div className="ar2-container">
            <motion.div
              className="ar2-map-shell"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="ar2-map-copy">
                <div className="ar2-chip">
                  <MapPin size={14} />
                  <span>Office location</span>
                </div>
                <h2 className="ar2-heading">Visit our Dubai office.</h2>
                <p className="ar2-body">
                  For scheduled meetings, partnership discussions, and in-person business
                  conversations, our office is located in Oud Metha, Dubai.
                </p>
                <div className="ar2-map-address">
                  <span>Address</span>
                  <strong>{officeAddress}</strong>
                  <a
                    className="ar2-map-link"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapSearchAddress)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Google Maps
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="ar2-map-frame">
                <iframe
                  title="ARNN Group office map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(mapSearchAddress)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

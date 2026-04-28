import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/about-contact-redesign.css";

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
  "A complete brief helps us assign the right team faster.",
  "Every submission arrives with reply-ready contact details.",
];

const briefingItems = [
  {
    icon: BriefcaseBusiness,
    title: "Commercial context",
    body: "Share the business objective, stakeholder type, and what outcome you want from the conversation.",
  },
  {
    icon: Globe2,
    title: "Timeline and geography",
    body: "Include target market, launch timing, and any constraints around approvals, delivery, or travel.",
  },
  {
    icon: ShieldCheck,
    title: "Decision readiness",
    body: "If relevant, mention budget range, urgency, or whether you are exploring, shortlisting, or ready to proceed.",
  },
];

type FormValues = {
  name: string;
  email: string;
  company: string;
  phoneCountry: string;
  phone: string;
  enquiryType: string;
  subject: string;
  timeline: string;
  message: string;
  botcheck: boolean;
};

type Web3FormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  enquiry_type?: string;
  preferred_timeline?: string;
  replyto?: string;
};

function getDefaultPhoneCountry() {
  if (typeof window === "undefined") return "ae";

  const localeRegion = navigator.language.split("-")[1]?.toLowerCase();
  if (localeRegion) return localeRegion;

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeZoneMap: Record<string, string> = {
    "Asia/Dubai": "ae",
    "Asia/Riyadh": "sa",
    "Asia/Qatar": "qa",
    "Asia/Kuwait": "kw",
    "Asia/Bahrain": "bh",
    "Asia/Muscat": "om",
    "Asia/Kolkata": "in",
    "Asia/Karachi": "pk",
    "Asia/Dhaka": "bd",
    "Africa/Cairo": "eg",
    "Europe/London": "gb",
    "America/New_York": "us",
    "America/Chicago": "us",
    "America/Denver": "us",
    "America/Los_Angeles": "us",
  };

  return timeZoneMap[timeZone] || "ae";
}

function buildDefaultValues(): FormValues {
  return {
    name: "",
    email: "",
    company: "",
    phoneCountry: getDefaultPhoneCountry(),
    phone: "",
    enquiryType: "Strategic partnership",
    subject: "New business enquiry from ARNN Group website",
    timeline: "Within 30 days",
    message: "",
    botcheck: false,
  };
}

function buildEmailBody(values: FormValues) {
  const company = values.company.trim() || "Not provided";
  const phone = values.phone.trim() || "Not provided";
  const brief = values.message.trim();

  return [
    "NEW BUSINESS ENQUIRY",
    "",
    "Contact Summary",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${phone}`,
    `Company / Organization: ${company}`,
    "",
    "Enquiry Profile",
    `Enquiry Type: ${values.enquiryType}`,
    `Preferred Timeline: ${values.timeline}`,
    `Subject: ${values.subject.trim()}`,
    "",
    "Message Brief",
    brief,
    "",
    "Reply Guidance",
    "Use the sender email as the primary reply channel. Phone is included when supplied.",
  ].join("\n");
}

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    mode: "onTouched",
    defaultValues: buildDefaultValues(),
  });

  const watchedName = useWatch({ control, name: "name" });
  const watchedEnquiryType = useWatch({ control, name: "enquiryType" });

  useEffect(() => {
    const nameSegment = watchedName?.trim() || "New";
    setValue("subject", `${nameSegment} | ${watchedEnquiryType} | ARNN Group website`, {
      shouldDirty: false,
      shouldTouch: false,
      shouldValidate: false,
    });
  }, [setValue, watchedEnquiryType, watchedName]);

  const { submit } = useWeb3Forms<Web3FormPayload>({
    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
    settings: {
      from_name: "ARNN Group Website",
    },
    onSuccess: (message) => {
      setSubmitStatus("success");
      setSubmitMessage(message || "Your message was sent successfully.");
      reset(buildDefaultValues());
      window.setTimeout(() => {
        setSubmitStatus("idle");
        setSubmitMessage("");
      }, 5000);
    },
    onError: (message) => {
      setSubmitStatus("error");
      setSubmitMessage(message || "Something went wrong. Please try again.");
    },
  });

  const handleFormSubmit = (values: FormValues) => {
    setSubmitStatus("idle");
    setSubmitMessage("");

    return submit({
      name: values.name.trim(),
      email: values.email.trim(),
      replyto: values.email.trim(),
      subject: values.subject.trim(),
      phone: values.phone.trim() || undefined,
      company: values.company.trim() || undefined,
      enquiry_type: values.enquiryType,
      preferred_timeline: values.timeline,
      message: buildEmailBody(values),
    });
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
                    Use the contact desk below to send a structured business brief. The form is set
                    up to deliver a cleaner, more decision-ready submission to our inbox.
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
                    <span>Executive contact desk</span>
                  </div>
                  <h2 className="ar2-heading ar2-heading-light">
                    Send a polished brief with the right context from the first message.
                  </h2>
                  <p className="ar2-form-copy">
                    The form uses the official Web3Forms React integration and submits structured
                    enquiry data so your email notifications are easier to review and reply to.
                  </p>

                  <div className="ar2-briefing-grid">
                    {briefingItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div key={item.title} className="ar2-briefing-card">
                          <div className="ar2-briefing-icon">
                            <Icon size={18} />
                          </div>
                          <div>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <form className="ar2-form" onSubmit={handleSubmit(handleFormSubmit)}>
                  <input
                    type="checkbox"
                    tabIndex={-1}
                    autoComplete="off"
                    className="ar2-botcheck"
                    {...register("botcheck")}
                  />

                  <div className="ar2-form-grid">
                    <label className="ar2-field">
                      <span>Full name</span>
                      <input
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Your full name"
                      />
                    </label>

                    <label className="ar2-field">
                      <span>Business email</span>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="you@company.com"
                      />
                    </label>
                  </div>

                  <div className="ar2-form-grid">
                    <label className="ar2-field">
                      <span>Company or organization</span>
                      <input
                        type="text"
                        {...register("company")}
                        placeholder="Company name"
                      />
                    </label>

                    <label className="ar2-field">
                      <span>Enquiry type</span>
                      <select {...register("enquiryType", { required: true })}>
                        <option value="Strategic partnership">Strategic partnership</option>
                        <option value="Project discussion">Project discussion</option>
                        <option value="Investment opportunity">Investment opportunity</option>
                        <option value="Media request">Media request</option>
                        <option value="General business enquiry">General business enquiry</option>
                      </select>
                    </label>
                  </div>

                  <div className="ar2-form-grid">
                    <div className="ar2-field">
                      <span>Phone</span>
                      <div className="ar2-phone-shell ar2-phone-shell-world">
                        <PhoneInput
                          defaultCountry={watch("phoneCountry")}
                          value={watch("phone")}
                          onChange={(phone, meta) => {
                            setValue("phone", phone, { shouldDirty: true });
                            setValue("phoneCountry", meta.country.iso2, { shouldDirty: true });
                          }}
                          forceDialCode
                          disableDialCodePrefill={false}
                          inputProps={{
                            name: "phone_ui",
                            autoComplete: "tel",
                            "aria-label": "Phone number",
                          }}
                          placeholder="50 123 4567"
                          className="ar2-phone-input"
                        />
                      </div>
                      <input type="hidden" {...register("phone")} />
                      <input type="hidden" {...register("phoneCountry")} />
                    </div>

                    <label className="ar2-field">
                      <span>Preferred timeline</span>
                      <select {...register("timeline", { required: true })}>
                        <option value="Immediate">Immediate</option>
                        <option value="Within 30 days">Within 30 days</option>
                        <option value="This quarter">This quarter</option>
                        <option value="Exploratory discussion">Exploratory discussion</option>
                      </select>
                    </label>
                  </div>

                  <label className="ar2-field">
                    <span>Subject line</span>
                    <input
                      type="text"
                      {...register("subject", { required: true })}
                      placeholder="Subject line"
                    />
                  </label>

                  <label className="ar2-field">
                    <span>Message brief</span>
                    <textarea
                      rows={7}
                      {...register("message", { required: true })}
                      placeholder="Describe the opportunity, scope, timeline, market, and preferred next step."
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
                      <span>{submitMessage || "Your message was sent successfully."}</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="ar2-status ar2-status-error">
                      <span>{submitMessage || "Something went wrong. Please try again."}</span>
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
                  title="ARNN Group office location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(mapSearchAddress)}&output=embed`}
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

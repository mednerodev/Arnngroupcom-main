import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "motion/react";
import { 
  Sparkles,
  Shield,
  Award,
  TrendingUp,
  Globe,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Building2,
  CheckCircle,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  end,
  duration = 2,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1,
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function AboutUs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.2],
  );
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0],
  );
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 relative overflow-hidden">
      <Header />

      {/* Solar System Background Animation */}
      <div className="fixed inset-0 pointer-events-none opacity-25 z-0">
        {/* Central Sun */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orbital Rings */}
        {[200, 350, 500, 650].map((size, index) => (
          <div
            key={`ring-${index}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-blue-300/20 rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        ))}

        {/* Planet 1 - Small Blue */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          style={{ marginLeft: "-6px", marginTop: "-6px" }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"
            style={{
              transform: "translateX(100px)",
            }}
          />
        </motion.div>

        {/* Planet 2 - Medium Purple */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          style={{ marginLeft: "-8px", marginTop: "-8px" }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg"
            style={{
              transform: "translateX(175px) rotate(45deg)",
            }}
          />
        </motion.div>

        {/* Planet 3 - Large Indigo */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          style={{ marginLeft: "-10px", marginTop: "-10px" }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-lg"
            style={{
              transform: "translateX(250px) rotate(120deg)",
            }}
          />
        </motion.div>

        {/* Planet 4 - Small Cyan */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          style={{ marginLeft: "-5px", marginTop: "-5px" }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 65,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg"
            style={{
              transform: "translateX(325px) rotate(200deg)",
            }}
          />
        </motion.div>

        {/* Scattered Stars */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className={`absolute w-1 h-1 rounded-full bg-blue-400 ${i >= 10 ? 'hidden md:block' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating Asteroids */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`asteroid-${i}`}
            className={`absolute w-2 h-2 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 ${i >= 3 ? 'hidden md:block' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Global Floating Background Animation */}
      <div className="fixed inset-0 pointer-events-none opacity-40 z-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-indigo-300/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-2 h-2 rounded-full ${i >= 13 ? 'hidden md:block' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, ${
                i % 3 === 0
                  ? "rgba(59, 130, 246, 0.6)"
                  : i % 3 === 1
                    ? "rgba(147, 51, 234, 0.6)"
                    : "rgba(236, 72, 153, 0.6)"
              }, transparent)`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Section with Video Background */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Video Background with Parallax */}
        <motion.div
          style={{ scale: videoScale }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://cdn.pixabay.com/video/2021/10/12/91744-636709154_large.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-blue-50/80 to-indigo-100/85"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>

        {/* Content with Parallax */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative h-full flex items-center justify-center px-8 z-10"
        >
          <div className="text-center max-w-[1100px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6"
            >
              <div className="inline-block px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-blue-200/50 mb-8 shadow-lg">
                <span
                  className="text-indigo-600 uppercase tracking-[0.3em]"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  Established 1996
                </span>
              </div>
              <h1
                className="mb-8"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 8rem)",
                  fontWeight: "800",
                  letterSpacing: "-0.04em",
                  lineHeight: "0.95",
                }}
              >
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-slate-700 max-w-[800px] mx-auto leading-relaxed"
              style={{
                fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                fontWeight: "400",
              }}
            >
              A legacy of excellence spanning nearly three
              decades across continents
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-indigo-400/50 flex items-start justify-center p-2"
              >
                <motion.div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section - Glassmorphic Cards */}
      <section className="relative py-20 px-8 z-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Globe,
                number: 4,
                label: "Countries",
                suffix: "",
                gradient: "from-blue-500/10 to-cyan-500/10",
                iconColor: "text-blue-600",
              },
              {
                icon: TrendingUp,
                number: 10,
                label: "Industry Sectors",
                suffix: "+",
                gradient: "from-purple-500/10 to-indigo-500/10",
                iconColor: "text-purple-600",
              },
              {
                icon: Users,
                number: 29,
                label: "Years of Excellence",
                suffix: "+",
                gradient: "from-pink-500/10 to-rose-500/10",
                iconColor: "text-pink-600",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.15,
                }}
                whileHover={{ scale: 1.05, y: -8 }}
                className={`group relative bg-gradient-to-br ${stat.gradient} backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-5 border border-white/40 hover:border-blue-300/60 transition-all duration-500 shadow-xl hover:shadow-2xl`}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-200/0 to-purple-200/0 group-hover:from-blue-200/20 group-hover:to-purple-200/20 transition-all duration-500"></div>

                <div className="relative">
                  <stat.icon
                    className={`w-6 h-6 md:w-8 md:h-8 ${stat.iconColor} mb-3 md:mb-3 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 md:mb-2"
                    style={{
                      fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                      fontWeight: "800",
                      lineHeight: "1",
                    }}
                  >
                    <AnimatedCounter end={stat.number} />
                    {stat.suffix}
                  </div>
                  <p
                    className="text-slate-700"
                    style={{
                      fontSize:
                        "clamp(0.75rem, 1.5vw, 0.9375rem)",
                      fontWeight: "500",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative pb-32 px-8 z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-20 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/40 backdrop-blur-sm">
                <span
                  className="text-blue-700 uppercase tracking-[0.2em]"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "700",
                  }}
                >
                  Since 1996
                </span>
              </div>

              <h2
                className="text-slate-900"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                A Global Business{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Conglomerate
                </span>
              </h2>

              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </motion.div>

            {/* Right: Description with Glassmorphic Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 border border-white/60 shadow-2xl space-y-6">
                <p
                  className="text-slate-700 leading-relaxed"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "400",
                  }}
                >
                  ARNN Group stands as a distinguished private
                  sector business conglomerate spanning multiple
                  nations, including the{" "}
                  <span className="text-blue-600 font-semibold">
                    United Arab Emirates
                  </span>
                  ,{" "}
                  <span className="text-blue-600 font-semibold">
                    Montenegro
                  </span>
                  ,{" "}
                  <span className="text-blue-600 font-semibold">
                    Malaysia
                  </span>
                  , and{" "}
                  <span className="text-blue-600 font-semibold">
                    Hong Kong
                  </span>
                  . Established in 1996, the group's journey has
                  been marked by continual expansion and
                  evolution.
                </p>
                <p
                  className="text-slate-700 leading-relaxed"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "400",
                  }}
                >
                  Today, ARNN Group commands recognition as a
                  preeminent diversified conglomerate, boasting
                  investments across a spectrum of industries on
                  a global scale.
                </p>
                <p
                  className="text-slate-700 leading-relaxed"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "400",
                  }}
                >
                  At its heart, ARNN Group is built upon pillars
                  of innovation, trust, and quality. These
                  fundamental values serve as guiding
                  principles, permeating every facet of the
                  group's operations and manifesting in an
                  unwavering commitment to excellence across all
                  endeavors.
                </p>
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [12, 18, 12],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-24 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl backdrop-blur-sm border border-white/40 rotate-12 shadow-xl"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission Section */}
      <section className="relative py-32 px-8 z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/40 backdrop-blur-sm mb-6">
              <span
                className="text-blue-700 uppercase tracking-[0.2em]"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "700",
                }}
              >
                Vision & Mission
              </span>
            </div>
            <h2
              className="text-slate-900 max-w-[800px] mx-auto"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "800",
                lineHeight: "1.1",
              }}
            >
              Shaping the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Future
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/60 hover:border-blue-400/60 transition-all duration-500 h-full shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-200/0 to-cyan-200/0 group-hover:from-blue-200/20 group-hover:to-cyan-200/20 transition-all duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400/30 to-blue-500/30 border border-blue-400/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>

                  <h3
                    className="text-slate-900 mb-6"
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: "700",
                    }}
                  >
                    Our Vision
                  </h3>

                  <p
                    className="text-slate-700 leading-relaxed mb-6"
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "400",
                    }}
                  >
                    To be recognized as a global leader in
                    diversified business excellence, pioneering
                    sustainable growth across industries while
                    creating lasting value for stakeholders and
                    communities worldwide.
                  </p>

                  <div className="space-y-3">
                    {[
                      "Global Leadership",
                      "Sustainable Innovation",
                      "Stakeholder Value",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-sm"></div>
                        <span
                          className="text-slate-600"
                          style={{
                            fontSize: "0.9375rem",
                            fontWeight: "500",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/60 hover:border-purple-400/60 transition-all duration-500 h-full shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-200/0 to-pink-200/0 group-hover:from-purple-200/20 group-hover:to-pink-200/20 transition-all duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400/30 to-purple-500/30 border border-purple-400/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Rocket className="w-8 h-8 text-purple-600" />
                  </div>

                  <h3
                    className="text-slate-900 mb-6"
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: "700",
                    }}
                  >
                    Our Mission
                  </h3>

                  <p
                    className="text-slate-700 leading-relaxed mb-6"
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "400",
                    }}
                  >
                    To deliver exceptional value through
                    innovative solutions, ethical business
                    practices, and unwavering commitment to
                    quality across our diverse portfolio of
                    enterprises, while fostering growth and
                    prosperity in every market we serve.
                  </p>

                  <div className="space-y-3">
                    {[
                      "Excellence in Execution",
                      "Ethical Practices",
                      "Community Impact",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-purple-500 shadow-sm"></div>
                        <span
                          className="text-slate-600"
                          style={{
                            fontSize: "0.9375rem",
                            fontWeight: "500",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="relative py-32 px-8 z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/40 backdrop-blur-sm mb-6">
              <span
                className="text-blue-700 uppercase tracking-[0.2em]"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "700",
                }}
              >
                Global Footprint
              </span>
            </div>
            <h2
              className="text-slate-900 max-w-[900px] mx-auto mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "800",
                lineHeight: "1.1",
              }}
            >
              Operating Across{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Continents
              </span>
            </h2>
            <p
              className="text-slate-600 max-w-[700px] mx-auto"
              style={{
                fontSize: "1.125rem",
                fontWeight: "400",
              }}
            >
              Our strategic presence spans four dynamic markets,
              enabling us to leverage regional strengths and
              deliver global excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                country: "United Arab Emirates",
                city: "Dubai",
                flag: "https://flagcdn.com/ae.svg",
                color: "from-blue-500/10 to-cyan-500/10",
                borderColor: "border-blue-400/50",
                hoverBorder: "hover:border-blue-500/70",
              },
              {
                country: "Montenegro",
                city: "Podgorica",
                flag: "https://flagcdn.com/me.svg",
                color: "from-purple-500/10 to-indigo-500/10",
                borderColor: "border-purple-400/50",
                hoverBorder: "hover:border-purple-500/70",
              },
              {
                country: "Malaysia",
                city: "Kuala Lumpur",
                flag: "https://flagcdn.com/my.svg",
                color: "from-pink-500/10 to-rose-500/10",
                borderColor: "border-pink-400/50",
                hoverBorder: "hover:border-pink-500/70",
              },
              {
                country: "Hong Kong",
                city: "Central",
                flag: "https://flagcdn.com/hk.svg",
                color: "from-violet-500/10 to-purple-500/10",
                borderColor: "border-violet-400/50",
                hoverBorder: "hover:border-violet-500/70",
              },
            ].map((location, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -12, scale: 1.05 }}
                className="group relative"
              >
                <div
                  className={`relative bg-gradient-to-br ${location.color} backdrop-blur-xl rounded-2xl p-8 border ${location.borderColor} ${location.hoverBorder} transition-all duration-500 text-center h-full flex flex-col justify-center min-h-[200px] shadow-xl hover:shadow-2xl`}
                >
                  <img
                    src={location.flag}
                    alt={`${location.country} flag`}
                    className="w-28 h-16 mb-4 mx-auto shadow-md object-cover"
                  />
                  <h4
                    className="text-slate-900 mb-2"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "700",
                    }}
                  >
                    {location.country}
                  </h4>
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <Building2 className="w-4 h-4" />
                    <span
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: "500",
                      }}
                    >
                      {location.city}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-32 px-8 z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/40 backdrop-blur-sm mb-6">
              <span
                className="text-blue-700 uppercase tracking-[0.2em]"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "700",
                }}
              >
                Our Core Values
              </span>
            </div>
            <h2
              className="text-slate-900 max-w-[800px] mx-auto"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "800",
                lineHeight: "1.1",
              }}
            >
              What Drives Us{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Forward
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Innovation",
                description:
                  "Driven by a relentless pursuit of innovation, ARNN Group continually seeks opportunities to pioneer new approaches and technologies within its diverse portfolio of businesses. This innovative spirit fuels the group's ability to adapt to evolving market dynamics, positioning it as a forward-thinking leader in each industry it operates.",
                gradient: "from-blue-500/10 to-cyan-500/10",
                iconColor: "text-blue-600",
                borderColor: "border-blue-400/50",
                hoverBorder: "hover:border-blue-500/70",
              },
              {
                icon: Shield,
                title: "Trust",
                description:
                  "Trust forms the bedrock of ARNN Group's relationships—with partners, stakeholders, and communities alike. Through transparent communication, ethical practices, and a steadfast dedication to fulfilling commitments, the group cultivates enduring trust that underpins its long-term success and sustainability.",
                gradient: "from-purple-500/10 to-pink-500/10",
                iconColor: "text-purple-600",
                borderColor: "border-purple-400/50",
                hoverBorder: "hover:border-purple-500/70",
              },
              {
                icon: Award,
                title: "Quality",
                description:
                  "Central to ARNN Group's ethos is a steadfast dedication to quality in all aspects of its operations. From product development and service delivery to customer engagement and beyond, a relentless pursuit of excellence drives the group to consistently exceed expectations and set new standards of quality within each industry it serves.",
                gradient: "from-pink-500/10 to-rose-500/10",
                iconColor: "text-pink-600",
                borderColor: "border-pink-400/50",
                hoverBorder: "hover:border-pink-500/70",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                <div
                  className={`relative bg-gradient-to-br ${value.gradient} backdrop-blur-xl rounded-3xl p-10 border ${value.borderColor} ${value.hoverBorder} transition-all duration-500 h-full shadow-xl hover:shadow-2xl`}
                >
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-200/0 to-purple-200/0 group-hover:from-blue-200/10 group-hover:to-purple-200/10 transition-all duration-500`}
                  ></div>

                  <div
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 border border-white/60 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <value.icon
                      className={`w-10 h-10 ${value.iconColor}`}
                    />
                  </div>

                  <h3
                    className="text-slate-900 mb-4"
                    style={{
                      fontSize: "2rem",
                      fontWeight: "700",
                    }}
                  >
                    {value.title}
                  </h3>

                  <p
                    className="text-slate-700 leading-relaxed"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "400",
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Approach Section */}
      <section className="relative py-32 px-8 z-10">
        <div className="max-w-[1400px] mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/40 backdrop-blur-sm mb-6">
              <span
                className="text-blue-700 uppercase tracking-[0.2em]"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "700",
                }}
              >
                Our Strategy
              </span>
            </div>
            <h2
              className="text-slate-900 max-w-[900px] mx-auto mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "800",
                lineHeight: "1.1",
              }}
            >
              Strategic{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p
              className="text-slate-600 max-w-[700px] mx-auto"
              style={{
                fontSize: "1.125rem",
                fontWeight: "400",
              }}
            >
              Our approach combines strategic foresight with
              operational excellence to drive sustainable growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Innovation First",
                desc: "Embracing cutting-edge solutions",
                color: "from-blue-500/10 to-cyan-500/10",
                iconBg: "from-blue-400/20 to-blue-500/20",
                iconColor: "text-blue-600",
                border: "border-blue-400/50",
              },
              {
                icon: TrendingUp,
                title: "Growth Focused",
                desc: "Sustainable expansion strategies",
                color: "from-purple-500/10 to-indigo-500/10",
                iconBg: "from-purple-400/20 to-purple-500/20",
                iconColor: "text-purple-600",
                border: "border-purple-400/50",
              },
              {
                icon: Users,
                title: "People Centric",
                desc: "Empowering teams globally",
                color: "from-pink-500/10 to-rose-500/10",
                iconBg: "from-pink-400/20 to-pink-500/20",
                iconColor: "text-pink-600",
                border: "border-pink-400/50",
              },
              {
                icon: CheckCircle,
                title: "Quality Driven",
                desc: "Excellence in every endeavor",
                color: "from-violet-500/10 to-purple-500/10",
                iconBg: "from-violet-400/20 to-violet-500/20",
                iconColor: "text-violet-600",
                border: "border-violet-400/50",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group"
              >
                <div
                  className={`relative bg-gradient-to-br ${item.color} backdrop-blur-xl rounded-2xl p-8 border ${item.border} hover:border-opacity-80 transition-all duration-500 h-full shadow-xl hover:shadow-2xl`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    <item.icon
                      className={`w-7 h-7 ${item.iconColor}`}
                    />
                  </div>
                  <h4
                    className="text-slate-900 mb-3"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "700",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-slate-600 leading-relaxed"
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: "400",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative py-40 px-8 overflow-hidden z-10">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-[1100px] mx-auto text-center"
        >
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-16 border border-white/60 shadow-2xl">
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-12 rounded-full"></div>

            <p
              className="text-slate-800 leading-relaxed mb-12"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                fontWeight: "400",
                letterSpacing: "0.01em",
                lineHeight: "1.5",
              }}
            >
              In essence, ARNN Group embodies a commitment to{" "}
              <span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                style={{ fontWeight: "700" }}
              >
                pushing boundaries
              </span>
              , fostering trust, and delivering unparalleled
              quality—a commitment that propels it forward as a
              beacon of excellence in the global business
              landscape.
            </p>

            <div className="inline-block w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
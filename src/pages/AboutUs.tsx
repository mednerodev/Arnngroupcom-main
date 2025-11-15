import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Sparkles, Shield, Award, TrendingUp, Globe, Users } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
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
    offset: ["start start", "end start"]
  });
  
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Header />
      
      {/* Hero Section with Parallax Video */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-[#2d3e5f]">
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
            <source src="https://cdn.pixabay.com/video/2021/10/12/91744-636709154_large.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d3e5f]/90 via-[#1a2332]/80 to-[#2d3e5f]/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        
        {/* Content with Parallax */}
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative h-full flex items-center justify-center px-8"
        >
          <div className="text-center max-w-[1100px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6"
            >
              <div className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <span className="text-white/90 uppercase tracking-[0.3em]" style={{ fontSize: '0.75rem', fontWeight: '500' }}>
                  Established 1996
                </span>
              </div>
              <h1 className="text-white mb-8" style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)', fontWeight: '800', letterSpacing: '-0.04em', lineHeight: '0.95' }}>
                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white/80 max-w-[800px] mx-auto leading-relaxed"
              style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: '300' }}
            >
              A legacy of excellence spanning nearly three decades across continents
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
                className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
              >
                <motion.div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section - Glassmorphic Cards */}
      <section className="relative py-32 px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, number: 4, label: "Countries", suffix: "" },
              { icon: TrendingUp, number: 10, label: "Industry Sectors", suffix: "+" },
              { icon: Users, number: 29, label: "Years of Excellence", suffix: "+" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-10 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-500"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                
                <div className="relative">
                  <stat.icon className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-white mb-3" style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: '800', lineHeight: '1' }}>
                    <AnimatedCounter end={stat.number} />
                    {stat.suffix}
                  </div>
                  <p className="text-gray-400" style={{ fontSize: '1.125rem', fontWeight: '300' }}>
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section - Split Screen Asymmetric */}
      <section className="relative py-32 px-8 bg-[#1a1a2e] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
        
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
              <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
                <span className="text-blue-300 uppercase tracking-[0.2em]" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                  Since 1996
                </span>
              </div>
              
              <h2 className="text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                A Global Business{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 space-y-6">
                <p className="text-gray-300 leading-relaxed" style={{ fontSize: '1.125rem', fontWeight: '300' }}>
                  ARNN Group stands as a distinguished private sector business conglomerate spanning multiple nations, including the <span className="text-blue-400">United Arab Emirates</span>, <span className="text-blue-400">Montenegro</span>, <span className="text-blue-400">Malaysia</span>, and <span className="text-blue-400">Hong Kong</span>. Established in 1996, the group's journey has been marked by continual expansion and evolution.
                </p>
                <p className="text-gray-300 leading-relaxed" style={{ fontSize: '1.125rem', fontWeight: '300' }}>
                  Today, ARNN Group commands recognition as a preeminent diversified conglomerate, boasting investments across a spectrum of industries on a global scale.
                </p>
                <p className="text-gray-300 leading-relaxed" style={{ fontSize: '1.125rem', fontWeight: '300' }}>
                  At its heart, ARNN Group is built upon pillars of innovation, trust, and quality. These fundamental values serve as guiding principles, permeating every facet of the group's operations and manifesting in an unwavering commitment to excellence across all endeavors.
                </p>
              </div>
              
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 rotate-12"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section - 3D Cards */}
      <section className="relative py-32 px-8 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <span className="text-blue-300 uppercase tracking-[0.2em]" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                Our Core Values
              </span>
            </div>
            <h2 className="text-white max-w-[800px] mx-auto" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', lineHeight: '1.1' }}>
              What Drives Us{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Forward</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Driven by a relentless pursuit of innovation, ARNN Group continually seeks opportunities to pioneer new approaches and technologies within its diverse portfolio of businesses. This innovative spirit fuels the group's ability to adapt to evolving market dynamics, positioning it as a forward-thinking leader in each industry it operates.",
                gradient: "from-blue-500/20 to-cyan-500/20",
                iconColor: "text-blue-400"
              },
              {
                icon: Shield,
                title: "Trust",
                description: "Trust forms the bedrock of ARNN Group's relationships—with partners, stakeholders, and communities alike. Through transparent communication, ethical practices, and a steadfast dedication to fulfilling commitments, the group cultivates enduring trust that underpins its long-term success and sustainability.",
                gradient: "from-purple-500/20 to-pink-500/20",
                iconColor: "text-purple-400"
              },
              {
                icon: Award,
                title: "Quality",
                description: "Central to ARNN Group's ethos is a steadfast dedication to quality in all aspects of its operations. From product development and service delivery to customer engagement and beyond, a relentless pursuit of excellence drives the group to consistently exceed expectations and set new standards of quality within each industry it serves.",
                gradient: "from-pink-500/20 to-rose-500/20",
                iconColor: "text-pink-400"
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                whileHover={{ y: -12, rotateY: 5, scale: 1.02 }}
                className="group relative"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${value.gradient} backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 h-full`}>
                  {/* Glow on Hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/0 transition-all duration-500"></div>
                  
                  {/* Icon */}
                  <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <value.icon className={`w-10 h-10 ${value.iconColor}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-white mb-4" style={{ fontSize: '2rem', fontWeight: '700' }}>
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed" style={{ fontSize: '1rem', fontWeight: '300' }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement - Immersive */}
      <section className="relative py-40 px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d3e5f] via-[#1e2a3d] to-[#0a0a0a]"></div>
        <motion.div 
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-30"
          style={{ 
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
            backgroundSize: "200% 200%"
          }}
        ></motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-[1100px] mx-auto text-center"
        >
          <div className="inline-block w-24 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mb-12 rounded-full"></div>
          
          <p className="text-white leading-relaxed mb-12" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: '300', letterSpacing: '0.01em', lineHeight: '1.5' }}>
            In essence, ARNN Group embodies a commitment to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ fontWeight: '600' }}>
              pushing boundaries
            </span>
            , fostering trust, and delivering unparalleled quality—a commitment that propels it forward as a beacon of excellence in the global business landscape.
          </p>
          
          <div className="inline-block w-24 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import { motion, useScroll, useTransform } from "motion/react";
import { ServiceHeroData } from "../../types/service";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceHeroProps {
  data: ServiceHeroData;
  color: string;
}

export function ServiceHero({ data, color }: ServiceHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Background Media with Parallax */}
      {data.mediaType === 'video' ? (
        <div className="absolute inset-0 z-0">
          <motion.video
            key={data.mediaUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ scale }}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => {
              console.error('Video failed to load:', data.mediaUrl);
            }}
          >
            <source src={data.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </div>
      ) : (
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${data.mediaUrl})` }}
          />
        </motion.div>
      )}
      
      {/* Multi-Layer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/60 via-[#1a1a2e]/50 to-[#0a0a0a]/70"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${color}40, transparent 60%)`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
      
      {/* Animated Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Content */}
      <motion.div 
        style={{ opacity, y }}
        className="relative h-full flex items-center justify-center px-8"
      >
        <div className="max-w-[1200px] w-full">
          {/* Badge */}
          {data.badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-xl"
                style={{ 
                  backgroundColor: `${color}15`,
                  borderColor: `${color}30`
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: color }}
                ></div>
                <span 
                  className="uppercase tracking-[0.3em]" 
                  style={{ fontSize: '0.75rem', fontWeight: '600', color: color }}
                >
                  {data.badge}
                </span>
              </div>
            </motion.div>
          )}
          
          {/* Subheadline */}
          {data.subheadline && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <span 
                className="uppercase tracking-[0.2em]"
                style={{ fontSize: '0.875rem', fontWeight: '500', color: `${color}` }}
              >
                {data.subheadline}
              </span>
            </motion.div>
          )}
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white mb-8 leading-[0.95]"
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 7rem)', 
              fontWeight: '900',
              letterSpacing: '-0.04em'
            }}
          >
            {data.headline}
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 max-w-[700px] mb-10 leading-relaxed"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: '300' }}
          >
            {data.description}
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{ backgroundColor: color }}
              onClick={() => {
                const nextSection = document.querySelector('section:nth-of-type(2)');
                if (nextSection) {
                  nextSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="relative flex items-center gap-3">
                <span className="text-white" style={{ fontSize: '0.875rem', fontWeight: '600', letterSpacing: '0.05em' }}>
                  EXPLORE MORE
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const nextSection = document.querySelector('section:nth-of-type(2)');
          if (nextSection) {
            nextSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2 hover:border-white/60 transition-colors duration-300"
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: color }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

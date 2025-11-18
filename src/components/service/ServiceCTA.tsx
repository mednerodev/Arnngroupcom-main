import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ServiceCTAData } from "../../types/service";
import { ArrowRight, Sparkles } from "lucide-react";

interface ServiceCTAProps {
  data: ServiceCTAData;
  color: string;
}

export function ServiceCTA({ data, color }: ServiceCTAProps) {
  const bgType = data.backgroundType || 'gradient';

  return (
    <section className="relative py-40 px-8 overflow-hidden">
      {/* Background */}
      {bgType === 'video' && data.backgroundUrl && (
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={data.backgroundUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#1a1a2e]/85 to-[#0a0a0a]/95"></div>
        </div>
      )}
      
      {bgType === 'image' && data.backgroundUrl && (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${data.backgroundUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#1a1a2e]/85 to-[#0a0a0a]/95"></div>
        </div>
      )}
      
      {bgType === 'gradient' && (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 50%, ${color}20, transparent 70%), radial-gradient(circle at 70% 50%, #9333ea15, transparent 70%)`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#0a0a0a] to-[#1a1a2e]"></div>
        </div>
      )}

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ 
              backgroundColor: color,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-[1100px] mx-auto text-center"
      >
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-xl mb-12"
          style={{ 
            backgroundColor: `${color}15`,
            borderColor: `${color}30`
          }}
        >
          <Sparkles className="w-4 h-4" style={{ color: color }} />
          <span 
            className="uppercase tracking-[0.2em]"
            style={{ fontSize: '0.75rem', fontWeight: '600', color: color }}
          >
            Let's Work Together
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white mb-8"
          style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
            fontWeight: '900',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}
        >
          {data.headline}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 max-w-[700px] mx-auto mb-12 leading-relaxed"
          style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: '300' }}
        >
          {data.description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary Button */}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 rounded-full overflow-hidden transition-all duration-500"
              style={{ backgroundColor: color }}
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              
              <div className="relative flex items-center gap-3">
                <span 
                  className="text-white"
                  style={{ fontSize: '1rem', fontWeight: '700', letterSpacing: '0.05em' }}
                >
                  {data.buttonText}
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.button>
          </Link>

          {/* Secondary Button */}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-full backdrop-blur-xl border transition-all duration-300"
              style={{ 
                borderColor: `${color}50`,
                background: `${color}10`
              }}
            >
              <span 
                className="text-white"
                style={{ fontSize: '1rem', fontWeight: '600', letterSpacing: '0.05em' }}
              >
                Contact Us
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative Lines */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-px w-24 origin-right"
            style={{ background: `linear-gradient(90deg, transparent, ${color})` }}
          />
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-px w-24 origin-left"
            style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
          />
        </div>
      </motion.div>
    </section>
  );
}

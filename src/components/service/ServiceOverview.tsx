import { motion } from "motion/react";
import { ServiceOverviewData } from "../../types/service";
import { Check } from "lucide-react";

interface ServiceOverviewProps {
  data: ServiceOverviewData;
  color: string;
}

export function ServiceOverview({ data, color }: ServiceOverviewProps) {
  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
        style={{ backgroundColor: color }}
      ></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1.3fr,1fr] gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Title */}
            <div>
              {data.subtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-4"
                >
                  <span 
                    className="uppercase tracking-[0.25em]"
                    style={{ fontSize: '0.75rem', fontWeight: '600', color: color }}
                  >
                    {data.subtitle}
                  </span>
                </motion.div>
              )}
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-white"
                style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                  fontWeight: '800',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                {data.title}
              </motion.h2>
              
              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 w-24 rounded-full mt-6 origin-left"
                style={{ 
                  background: `linear-gradient(90deg, ${color}, transparent)`
                }}
              ></motion.div>
            </div>
            
            {/* Paragraphs */}
            <div className="space-y-6">
              {data.paragraphs.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  className="text-gray-300 leading-relaxed"
                  style={{ fontSize: '1.125rem', fontWeight: '300' }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            
            {/* Highlights */}
            {data.highlights && data.highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4 pt-4"
              >
                {data.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div 
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Check className="w-4 h-4" style={{ color: color }} />
                    </div>
                    <span className="text-gray-300" style={{ fontSize: '1rem', fontWeight: '400' }}>
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {data.image ? (
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/10 max-h-[300px] md:max-h-[400px]">
                  <img 
                    src={data.image} 
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Image Overlay */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${color}40, transparent)`
                    }}
                  ></div>
                </div>
                
                {/* Floating Stats Cards - Centered Horizontal Row - Bigger Size */}
                <div className="absolute -bottom-20 md:-bottom-28 left-1/2 -translate-x-1/2 w-[95%] md:w-auto">
                  <div className="hidden flex flex-wrap gap-x-2 gap-y-5 sm:gap-x-3 md:gap-5 justify-center items-start pb-2 w-[80vw] mx-auto">
                    {/* Card 1 */}
                    <motion.div
                      animate={{ 
                        y: [0, -15, 0],
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-xl md:rounded-2xl backdrop-blur-xl border border-white/20 p-3 md:p-5"
                      style={{
                        background: `linear-gradient(135deg, ${color}30, ${color}10)`
                      }}
                    >
                      <div className="h-full flex flex-col justify-end">
                        <div className="text-white" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: '800' }}>
                          500+
                        </div>
                        <div className="text-white/70" style={{ fontSize: 'clamp(0.625rem, 1.5vw, 0.875rem)', fontWeight: '400' }}>
                          Projects
                        </div>
                      </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                      animate={{ 
                        y: [0, -20, 0],
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-xl md:rounded-2xl backdrop-blur-xl border border-white/20 p-3 md:p-5"
                      style={{
                        background: `linear-gradient(135deg, ${color}30, ${color}10)`
                      }}
                    >
                      <div className="h-full flex flex-col justify-end">
                        <div className="text-white" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: '800' }}>
                          50+
                        </div>
                        <div className="text-white/70" style={{ fontSize: 'clamp(0.625rem, 1.5vw, 0.875rem)', fontWeight: '400' }}>
                          Countries
                        </div>
                      </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                      animate={{ 
                        y: [0, -18, 0],
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-xl md:rounded-2xl backdrop-blur-xl border border-white/20 p-3 md:p-5"
                      style={{
                        background: `linear-gradient(135deg, ${color}30, ${color}10)`
                      }}
                    >
                      <div className="h-full flex flex-col justify-end">
                        <div className="text-white" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: '800' }}>
                          100%
                        </div>
                        <div className="text-white/70" style={{ fontSize: 'clamp(0.625rem, 1.5vw, 0.875rem)', fontWeight: '400' }}>
                          Dedicated
                        </div>
                      </div>
                    </motion.div>

                    {/* Card 4 - NEW */}
                    <motion.div
                      animate={{ 
                        y: [0, -16, 0],
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-xl md:rounded-2xl backdrop-blur-xl border border-white/20 p-3 md:p-5"
                      style={{
                        background: `linear-gradient(135deg, ${color}30, ${color}10)`
                      }}
                    >
                      <div className="h-full flex flex-col justify-end">
                        <div className="text-white" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: '800' }}>
                          24/7
                        </div>
                        <div className="text-white/70" style={{ fontSize: 'clamp(0.625rem, 1.5vw, 0.875rem)', fontWeight: '400' }}>
                          Support
                        </div>
                      </div>
                    </motion.div>

                    {/* Card 5 - NEW */}
                    <motion.div
                      animate={{ 
                        y: [0, -17, 0],
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-xl md:rounded-2xl backdrop-blur-xl border border-white/20 p-3 md:p-5"
                      style={{
                        background: `linear-gradient(135deg, ${color}30, ${color}10)`
                      }}
                    >
                      <div className="h-full flex flex-col justify-end">
                        <div className="text-white" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: '800' }}>
                          99%
                        </div>
                        <div className="text-white/70" style={{ fontSize: 'clamp(0.625rem, 1.5vw, 0.875rem)', fontWeight: '400' }}>
                          Success
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            ) : (
              /* Abstract Glassmorphic Card if no image */
              <div className="relative">
                <div 
                  className="aspect-square rounded-3xl backdrop-blur-xl border border-white/10 p-12"
                  style={{
                    background: `linear-gradient(135deg, ${color}15, transparent)`
                  }}
                >
                  {/* Abstract Geometric Pattern */}
                  <div className="relative w-full h-full">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 20 + i * 5, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 rounded-3xl border-2 opacity-20"
                        style={{ 
                          borderColor: color,
                          transform: `scale(${1 - i * 0.15})`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ServiceProcessData } from "../../types/service";
import { Check, Lightbulb, Handshake, Leaf, Target } from "lucide-react";

const iconMap: Record<string, any> = {
  check: Check,
  lightbulb: Lightbulb,
  handshake: Handshake,
  leaf: Leaf,
  target: Target
};

interface ServiceProcessProps {
  data: ServiceProcessData;
  color: string;
}

export function ServiceProcess({ data, color }: ServiceProcessProps) {
  return (
    <section className="relative py-32 px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
        style={{ backgroundColor: color }}
      ></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {data.subtitle && (
            <div className="mb-4">
              <span 
                className="uppercase tracking-[0.25em]"
                style={{ fontSize: '0.75rem', fontWeight: '600', color: color }}
              >
                {data.subtitle}
              </span>
            </div>
          )}
          
          <h2 
            className="text-white mx-auto max-w-[900px]"
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: '800',
              lineHeight: '1.15'
            }}
          >
            {data.title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full origin-top"
              style={{
                background: `linear-gradient(180deg, ${color}, transparent)`
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-20">
            {data.steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Left Side */}
                  <div className={`${isEven ? 'md:text-right' : 'md:order-2'}`}>
                    <div className={`inline-block ${isEven ? 'md:float-right' : ''}`}>
                      {/* Number Badge */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex w-16 h-16 rounded-full items-center justify-center mb-6"
                        style={{
                          background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                          border: `2px solid ${color}50`
                        }}
                      >
                        <span 
                          className="text-white"
                          style={{ fontSize: '1.5rem', fontWeight: '900' }}
                        >
                          {step.number}
                        </span>
                      </motion.div>

                      {/* Title */}
                      <h3 
                        className="text-white mb-4"
                        style={{ fontSize: '1.75rem', fontWeight: '700' }}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p 
                        className="text-gray-400 leading-relaxed max-w-[500px]"
                        style={{ fontSize: '1rem', fontWeight: '300' }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Point */}
                  <div className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2 hidden md:flex">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.2 }}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    >
                      <div 
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ backgroundColor: color }}
                      />
                    </motion.div>
                  </div>

                  {/* Right Side - Visual Card */}
                  <div className={`${isEven ? 'md:order-2' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -8 }}
                      className="group relative rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 p-8 overflow-hidden transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${color}08, transparent)`
                      }}
                    >
                      {/* Hover Glow */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 50% 0%, ${color}20, transparent 70%)`
                        }}
                      />

                      {/* Icon if provided */}
                      {step.icon && (() => {
                        const Icon = iconMap[step.icon] || Check;
                        return (
                          <div 
                            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500"
                            style={{
                              background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                              border: `1px solid ${color}40`
                            }}
                          >
                            <Icon className="w-6 h-6" style={{ color: color }} />
                          </div>
                        );
                      })()}

                      <div className="relative space-y-2">
                        <div 
                          className="text-white opacity-50"
                          style={{ fontSize: '0.875rem', fontWeight: '600' }}
                        >
                          STEP {step.number}
                        </div>
                        <div 
                          className="text-white"
                          style={{ fontSize: '1.25rem', fontWeight: '700' }}
                        >
                          {step.title}
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div 
                        className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ backgroundColor: color }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
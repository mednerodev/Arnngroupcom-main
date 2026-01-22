import { motion, useInView } from "motion/react";
import { ServiceStatsData } from "../../types/service";
import { useRef, useEffect, useState } from "react";
import { 
  TrendingUp, Users, Globe, Award, Target, Zap, Building2, Hotel,
  Droplet, Calendar, Sprout, Leaf, Bitcoin, Server, Waves, Building, Sparkles, Heart, ShieldCheck, Briefcase, Hospital, TrendingDown, Store, DollarSign, Package
} from "lucide-react";

const iconMap: Record<string, any> = {
  trending: TrendingUp,
  users: Users,
  globe: Globe,
  award: Award,
  target: Target,
  zap: Zap,
  "building-2": Building2,
  hotel: Hotel,
  droplet: Droplet,
  calendar: Calendar,
  sprout: Sprout,
  leaf: Leaf,
  bitcoin: Bitcoin,
  server: Server,
  waves: Waves,
  building: Building,
  sparkles: Sparkles,
  heart: Heart,
  "shield-check": ShieldCheck,
  briefcase: Briefcase,
  hospital: Hospital,
  "trending-down": TrendingDown,
  store: Store,
  "dollar-sign": DollarSign,
  "trending-up": TrendingUp,
  package: Package
};

function AnimatedCounter({ 
  end, 
  duration = 2,
  prefix = "",
  suffix = ""
}: { 
  end: number; 
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
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

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

interface ServiceStatsProps {
  data: ServiceStatsData;
  color: string;
}

export function ServiceStats({ data, color }: ServiceStatsProps) {
  return (
    <section className="hidden relative py-32 px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
      {/* Background */}
      <div className="absolute inset-0 hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[125px] md:w-[800px] md:h-[400px] rounded-full blur-[150px] opacity-20"
          style={{ backgroundColor: color }}
        ></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Title */}
        {data.title && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-20"
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: '800'
            }}
          >
            {data.title}
          </motion.h2>
        )}

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((stat, idx) => {
            const Icon = stat.icon ? iconMap[stat.icon] : null;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                {/* Card */}
                <div 
                  className="relative rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 p-10 overflow-hidden transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${color}08, transparent)`
                  }}
                >
                  {/* Animated Gradient Glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${color}25, transparent 70%)`
                    }}
                  />
                  
                  {/* Animated Border */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${color}30, transparent)`,
                      maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      padding: '1px'
                    }}
                  />
                  
                  <div className="relative">
                    {/* Icon */}
                    {Icon && (
                      <div className="mb-6">
                        <div 
                          className="inline-flex w-14 h-14 rounded-2xl items-center justify-center group-hover:scale-110 transition-transform duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${color}20, ${color}05)`,
                            border: `1px solid ${color}30`
                          }}
                        >
                          <Icon className="w-7 h-7" style={{ color: color }} />
                        </div>
                      </div>
                    )}
                    
                    {/* Number */}
                    <div 
                      className="text-white mb-3"
                      style={{ 
                        fontSize: 'clamp(3rem, 5vw, 4rem)', 
                        fontWeight: '900',
                        lineHeight: '1',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      <AnimatedCounter 
                        end={stat.value}
                        prefix={stat.prefix || ""}
                        suffix={stat.suffix || ""}
                      />
                    </div>
                    
                    {/* Label */}
                    <p 
                      className="text-gray-400"
                      style={{ fontSize: '1.125rem', fontWeight: '400' }}
                    >
                      {stat.label}
                    </p>
                  </div>
                  
                  {/* Decorative Corner Element */}
                  <div 
                    className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

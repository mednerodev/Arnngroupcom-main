import { motion } from "motion/react";
import { Quote, Award, TrendingUp, Globe, Hotel, Building2, Bitcoin, Server, Sprout, Waves, Building, Gem, Heart, Shirt, Footprints, Briefcase, Leaf, Sparkles, ShieldCheck, Handshake, Video, Plane, Cpu, Users, Factory, Store } from "lucide-react";

interface SuccessStory {
  title: string;
  description: string;
  achievement: string;
  region: string;
  icon?: string;
}

interface ServiceSuccessData {
  title: string;
  subtitle?: string;
  stories: SuccessStory[];
}

interface ServiceSuccessProps {
  data: ServiceSuccessData;
  color: string;
}

const iconMap: Record<string, any> = {
  award: Award,
  trending: TrendingUp,
  "trending-up": TrendingUp,
  globe: Globe,
  quote: Quote,
  hotel: Hotel,
  "building-2": Building2,
  bitcoin: Bitcoin,
  server: Server,
  sprout: Sprout,
  waves: Waves,
  building: Building,
  gem: Gem,
  heart: Heart,
  shirt: Shirt,
  footprints: Footprints,
  briefcase: Briefcase,
  leaf: Leaf,
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
  handshake: Handshake,
  video: Video,
  plane: Plane,
  cpu: Cpu,
  users: Users,
  factory: Factory,
  store: Store
};

export function ServiceSuccess({ data, color }: ServiceSuccessProps) {
  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/3 w-[250px] h-[250px] md:w-[600px] md:h-[600px] rounded-full blur-[150px] opacity-15"
          style={{ backgroundColor: color }}
        ></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>

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

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.stories.map((story, idx) => {
            const Icon = story.icon ? iconMap[story.icon] : Award;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group relative"
              >
                <div 
                  className="h-full rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 p-10 overflow-hidden transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${color}08, transparent)`
                  }}
                >
                  {/* Animated Gradient Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${color}15, transparent 70%)`
                    }}
                  />

                  <div className="relative">
                    {/* Icon & Region Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                          border: `1px solid ${color}40`
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color: color }} />
                      </div>

                      <div 
                        className="px-4 py-2 rounded-full text-xs uppercase tracking-wider"
                        style={{
                          backgroundColor: `${color}20`,
                          color: color,
                          fontWeight: '600'
                        }}
                      >
                        {story.region}
                      </div>
                    </div>

                    {/* Quote Icon */}
                    <Quote 
                      className="text-white/10 mb-4" 
                      style={{ width: '3rem', height: '3rem' }}
                    />

                    {/* Title */}
                    <h3 
                      className="text-white mb-4"
                      style={{ fontSize: '1.75rem', fontWeight: '700', lineHeight: '1.3' }}
                    >
                      {story.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-gray-400 leading-relaxed mb-6"
                      style={{ fontSize: '1rem', fontWeight: '300' }}
                    >
                      {story.description}
                    </p>

                    {/* Achievement */}
                    <div className="pt-6 border-t border-white/10">
                      <div 
                        className="uppercase tracking-wider mb-2"
                        style={{ fontSize: '0.75rem', fontWeight: '600', color: color }}
                      >
                        Key Achievement
                      </div>
                      <p 
                        className="text-white"
                        style={{ fontSize: '1.125rem', fontWeight: '600' }}
                      >
                        {story.achievement}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Corner Element */}
                  <div 
                    className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

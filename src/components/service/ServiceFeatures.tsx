import { motion } from "motion/react";
import { ServiceFeaturesData } from "../../types/service";
import { 
  Sparkles, Zap, Shield, Target, Rocket, Globe, 
  TrendingUp, Award, Users, Settings, Heart, Star,
  Hotel, Palmtree, Building2, Briefcase, Leaf, Handshake, Lightbulb,
  Sprout, Waves, Package, LineChart, Gem, Shirt, Footprints, ShieldCheck, GraduationCap,
  Video, Stethoscope, Plane, Hospital, DollarSign, Map, Cpu, Wheat,
  Sofa, Lamp, Palette, Factory, Utensils, Coffee, Store, ShoppingBag
} from "lucide-react";

const iconMap: Record<string, any> = {
  sparkles: Sparkles,
  zap: Zap,
  shield: Shield,
  target: Target,
  rocket: Rocket,
  globe: Globe,
  trending: TrendingUp,
  award: Award,
  users: Users,
  settings: Settings,
  heart: Heart,
  star: Star,
  hotel: Hotel,
  palmtree: Palmtree,
  "building-2": Building2,
  briefcase: Briefcase,
  leaf: Leaf,
  handshake: Handshake,
  lightbulb: Lightbulb,
  sprout: Sprout,
  waves: Waves,
  package: Package,
  "line-chart": LineChart,
  gem: Gem,
  shirt: Shirt,
  footprints: Footprints,
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  "trending-up": TrendingUp,
  video: Video,
  stethoscope: Stethoscope,
  plane: Plane,
  hospital: Hospital,
  "dollar-sign": DollarSign,
  map: Map,
  cpu: Cpu,
  wheat: Wheat,
  sofa: Sofa,
  lamp: Lamp,
  palette: Palette,
  factory: Factory,
  utensils: Utensils,
  coffee: Coffee,
  store: Store,
  "shopping-bag": ShoppingBag
};

interface ServiceFeaturesProps {
  data: ServiceFeaturesData;
  color: string;
}

export function ServiceFeatures({ data, color }: ServiceFeaturesProps) {
  const layout = data.layout || 'bento';
  const videoUrl = data.backgroundVideo || "https://cdn.pixabay.com/video/2021/10/12/91744-636709154_large.mp4";

  return (
    <section className="relative py-16 px-8 bg-[#1a1a2e] overflow-hidden">
      {/* Video Background Layer */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay to maintain contrast */}
      <div className="absolute inset-0 bg-[#0a0a0a]/85"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/80 via-[#0a0a0a]/60 to-[#1a1a2e]/80"></div>

      {/* Animated Background Mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 animate-pulse"
          style={{ backgroundColor: color, animationDuration: '8s' }}
        ></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
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
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: '800',
              lineHeight: '1.15'
            }}
          >
            {data.title}
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        {layout === 'bento' && (
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-6 gap-4 auto-rows-auto">
            {data.items.map((feature, idx) => {
              const Icon = iconMap[feature.icon] || Sparkles;
              
              // Bento pattern: 2-4, 3-3, 2-4 (repeating every 6 cards)
              // This creates visual variety while filling exactly 6 columns per row
              let colSpan = 'md:col-span-2'; // Default
              let minHeight = 'min-h-[200px]'; // Default min height - Compact for 2-row view
              
              const position = idx % 6;
              
              // Row 1: 2 + 4 = 6 columns
              if (position === 0) {
                colSpan = 'md:col-span-2';
                minHeight = 'min-h-[200px]';
              } else if (position === 1) {
                colSpan = 'md:col-span-4';
                minHeight = 'min-h-[200px]';
              }
              // Row 2: 3 + 3 = 6 columns
              else if (position === 2) {
                colSpan = 'md:col-span-3';
                minHeight = 'min-h-[220px]';
              } else if (position === 3) {
                colSpan = 'md:col-span-3';
                minHeight = 'min-h-[220px]';
              }
              // Row 3: 2 + 4 = 6 columns
              else if (position === 4) {
                colSpan = 'md:col-span-2';
                minHeight = 'min-h-[200px]';
              } else if (position === 5) {
                colSpan = 'md:col-span-4';
                minHeight = 'min-h-[200px]';
              }
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                  className={`group relative ${colSpan}`}
                >
                  <div 
                    className={`${minHeight} h-full rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 p-5 transition-all duration-500`}
                    style={{
                      background: `linear-gradient(135deg, ${color}10, transparent)`
                    }}
                  >
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${color}20, transparent 70%)`
                      }}
                    ></div>
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col">
                      {/* Icon */}
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                          border: `1px solid ${color}40`
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: color }} />
                      </div>
                      
                      {/* Title */}
                      <h3 
                        className="text-white mb-2 flex-shrink-0"
                        style={{ 
                          fontSize: '1.125rem', 
                          fontWeight: '700',
                          lineHeight: '1.3'
                        }}
                      >
                        {feature.title}
                      </h3>
                      
                      {/* Description */}
                      <p 
                        className="text-gray-400 leading-relaxed mb-auto"
                        style={{ 
                          fontSize: '0.875rem', 
                          fontWeight: '300',
                          lineHeight: '1.5'
                        }}
                      >
                        {feature.description}
                      </p>
                      
                      {/* Details (if exists) */}
                      {feature.details && (
                        <p 
                          className="text-gray-500 mt-3 pt-3 border-t border-white/5 flex-shrink-0"
                          style={{ 
                            fontSize: '0.75rem', 
                            fontWeight: '300',
                            lineHeight: '1.4'
                          }}
                        >
                          {feature.details}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Regular Grid Layout */}
        {layout === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.items.map((feature, idx) => {
              const Icon = iconMap[feature.icon] || Sparkles;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative"
                >
                  <div 
                    className="h-full rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 p-8 transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${color}10, transparent)`
                    }}
                  >
                    {/* Hover Glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${color}15, transparent 70%)`
                      }}
                    ></div>
                    
                    <div className="relative">
                      {/* Icon */}
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                          border: `1px solid ${color}40`
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color: color }} />
                      </div>
                      
                      {/* Title */}
                      <h3 
                        className="text-white mb-4"
                        style={{ fontSize: '1.5rem', fontWeight: '700' }}
                      >
                        {feature.title}
                      </h3>
                      
                      {/* Description */}
                      <p 
                        className="text-gray-400 leading-relaxed mb-4"
                        style={{ fontSize: '1rem', fontWeight: '300' }}
                      >
                        {feature.description}
                      </p>
                      
                      {/* Details */}
                      {feature.details && (
                        <p 
                          className="text-gray-500 pt-4 border-t border-white/5"
                          style={{ fontSize: '0.875rem', fontWeight: '300' }}
                        >
                          {feature.details}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router-dom";
import { getServiceBySlug } from "../../data/servicesData";

const categories = [
  { slug: "economic-empowerment", name: "Economic Empowerment", color: "#3b82f6" },
  { slug: "real-estate-development", name: "Real Estate Development", color: "#8b5cf6" },
  { slug: "ict", name: "Information & Communication Technologies", color: "#10b981" },
  { slug: "agro-aquaculture", name: "Agro-Aquaculture", color: "#10b981" },
  { slug: "fashion-industries", name: "Fashion Industries", color: "#ec4899" },
  { slug: "empowering-global-talent", name: "Empowering Global Talent", color: "#06b6d4" },
  { slug: "healthcare-access", name: "Transforming Global Healthcare Access", color: "#f43f5e" },
  { slug: "food-safety", name: "A Global Initiative for World Food Safety", color: "#16a34a" },
  { slug: "luxury-furniture", name: "Furniture and Furnishing Sectors", color: "#92400e" },
  { slug: "fb-segments", name: "F&B Segments", color: "#dc2626" },
];

export function ServiceSearchNav() {
  const navigate = useNavigate();
  const { slug } = useParams();
  
  // Get current service data for color
  const currentService = slug ? getServiceBySlug(slug) : undefined;
  const serviceColor = currentService?.color || "#2d3e5f";

  return (
    <section className="relative py-20 px-8 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
        style={{ backgroundColor: serviceColor }}
      ></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10" style={{ backgroundColor: serviceColor }}></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-3"
            >
              <span 
                className="uppercase tracking-[0.25em]"
                style={{ fontSize: '0.75rem', fontWeight: '600', color: serviceColor }}
              >
                Our Services
              </span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white mb-2"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700' }}
            >
              Browse by Category
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400"
              style={{ fontSize: '0.875rem', fontWeight: '300' }}
            >
              Explore our diverse portfolio of solutions
            </motion.p>
          </div>

          {/* Horizontal Scrollable Category Pills */}
          <div className="relative">
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex flex-wrap gap-3 justify-center px-1">
                {categories.map((category, index) => {
                  const isActive = slug === category.slug;
                  return (
                    <motion.button
                      key={category.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      onClick={() => navigate(`/services/${category.slug}`)}
                      className={`
                        relative px-5 py-3 rounded-xl transition-all duration-300 backdrop-blur-xl border group overflow-hidden
                        ${isActive 
                          ? 'border-white/30 shadow-xl scale-105' 
                          : 'border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl'
                        }
                      `}
                      style={{
                        background: isActive 
                          ? `linear-gradient(135deg, ${category.color}40, ${category.color}20)`
                          : `linear-gradient(135deg, ${category.color}15, transparent)`
                      }}
                      whileHover={{ scale: isActive ? 1.05 : 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Active Glow Effect */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-xl blur-xl opacity-50"
                          style={{ backgroundColor: category.color }}
                          animate={{ 
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                      
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      
                      {/* Category Content */}
                      <div className="relative whitespace-nowrap flex items-center gap-2">
                        <span 
                          className={`transition-colors ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}
                          style={{ fontSize: '0.875rem', fontWeight: isActive ? '600' : '500', letterSpacing: '0.02em' }}
                        >
                          {category.name}
                        </span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: category.color }}
                          />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

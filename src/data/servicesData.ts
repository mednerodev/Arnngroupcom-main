import { ServiceData } from "../types/service";

export const servicesData: ServiceData[] = [
  {
    id: "1",
    slug: "economic-empowerment",
    title: "Economic Empowerment",
    tagline: "Strategic Partnerships and Citizenship Investment Programs",
    description: "Empowering economic growth through strategic government partnerships, citizenship investment programs, and billion-euro direct investments across real estate, agriculture, and key industries.",
    color: "#3b82f6", // Blue
    
    hero: {
      headline: "Economic Empowerment",
      subheadline: "Strategic Partnerships & Citizenship Investment",
      description: "Empowering economic growth through strategic partnerships with governments, leveraging substantial billion-euro direct investments in real estate, agriculture, and industries.",
      mediaType: "video",
      mediaUrl: "https://cdn.pixabay.com/video/2022/10/25/136577-764149809_large.mp4",
      badge: "Billion-Euro Investments"
    },
    
    overview: {
      title: "Strategic Partnerships Driving Economic Growth",
      subtitle: "Our Mission",
      paragraphs: [
        "ARNN Group, through strategic partnerships with governments, has significantly expanded its engagement in citizenship investment programs. These initiatives primarily target key sectors such as real estate, agriculture, and industries, leveraging substantial billion-euro direct investments.",
        "The symbiotic relationships established through these collaborations serve as pivotal drivers for fostering economic growth. By actively engaging affluent investors, ARNN Group aids in attracting substantial capital inflows, thereby injecting vitality into local economies.",
        "This infusion of capital not only spurs economic activity but also plays a crucial role in creating employment opportunities within the region. Furthermore, these partnerships yield substantial revenue streams, contributing to the fiscal health of the respective governments.",
        "Beyond mere financial gains, the collaborations fostered by ARNN Group hold broader implications for global competitiveness. By leveraging its expertise and resources, ARNN Group assists in diversifying revenue streams, thus fortifying the economic resilience of the involved nations."
      ],
      highlights: [
        "Billion-euro direct investments in strategic sectors",
        "Citizenship investment programs with government partnerships",
        "Real estate, agriculture, and industrial development",
        "Attracting affluent investors and capital inflows",
        "Job creation and revenue generation for governments",
        "Talent attraction and brain gain initiatives"
      ],
      image: "https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2MzE1MTc2MHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    
    features: {
      title: "Comprehensive Investment Solutions",
      subtitle: "Key Focus Areas",
      layout: "bento",
      items: [
        {
          icon: "globe",
          title: "Citizenship Investment Programs",
          description: "Strategic partnerships with governments to facilitate citizenship investment programs that drive economic growth and attract global investors.",
          details: "Proven track record with European governments and ongoing initiatives worldwide."
        },
        {
          icon: "target",
          title: "Real Estate Development",
          description: "Substantial billion-euro investments in premium real estate projects that create jobs and stimulate local economies.",
          details: "From luxury residential to commercial developments across strategic locations."
        },
        {
          icon: "trending",
          title: "Agriculture & Industries",
          description: "Direct investments in agriculture and key industrial sectors, diversifying revenue streams and enhancing economic resilience.",
        },
        {
          icon: "users",
          title: "Talent Attraction",
          description: "Brain gain initiatives that attract skilled professionals from diverse backgrounds, enriching cultural fabric and global competitiveness.",
        },
        {
          icon: "award",
          title: "Government Partnerships",
          description: "Mutually beneficial collaborations with governments, navigating complex regulatory landscapes to deliver impactful economic development.",
        },
        {
          icon: "zap",
          title: "Capital Inflows",
          description: "Engaging affluent investors to inject substantial capital into local economies, spurring economic activity and fiscal health.",
        }
      ]
    },
    
    stats: {
      title: "Global Economic Impact",
      items: [
        { value: 1, label: "Billion-Euro Investments", suffix: "B+", prefix: "€", icon: "trending" },
        { value: 10000, label: "Jobs Created", suffix: "+", icon: "users" },
        { value: 5, label: "Government Partnerships", suffix: "+", icon: "globe" },
        { value: 3, label: "Key Sectors", suffix: "", icon: "target" }
      ]
    },
    
    success: {
      title: "Proven Track Record of Impactful Partnerships",
      subtitle: "Success Stories",
      stories: [
        {
          title: "European Government Partnership",
          description: "ARNN Group's success in navigating complex regulatory landscapes and fostering mutually beneficial relationships is exemplified by its fruitful collaboration with a European government. This partnership stands as a testament to ARNN Group's adeptness in orchestrating impactful initiatives that drive economic development.",
          achievement: "Billion-euro direct investments creating thousands of jobs and substantial revenue streams",
          region: "Europe",
          icon: "award"
        },
        {
          title: "Ongoing Multi-Country Initiative",
          description: "The ongoing progress with another country underscores the organization's commitment to fostering sustainable growth through strategic partnerships. These collaborations serve as conduits for the exchange of talent, attracting individuals from diverse backgrounds and bolstering brain gain initiatives.",
          achievement: "Enhanced global competitiveness and cultural enrichment through talent attraction",
          region: "Global",
          icon: "globe"
        }
      ]
    },
    
    cta: {
      headline: "Partner with ARNN Group for Sustainable Economic Growth",
      description: "Join our network of strategic partnerships that transcend financial transactions, fostering sustainable economic development, job creation, and global competitiveness.",
      buttonText: "Explore Partnership Opportunities",
      backgroundType: "gradient"
    },
    
    nextService: "real-estate-development",
    prevService: "food-beverage"
  },
  
  {
    id: "2",
    slug: "real-estate-development",
    title: "Real Estate Development",
    tagline: "Creating Sustainable Property Solutions",
    description: "Innovative real estate development that transforms communities and elevates living standards across the globe.",
    color: "#8b5cf6", // Purple
    
    hero: {
      headline: "Real Estate Development",
      subheadline: "Building Tomorrow",
      description: "Creating innovative and sustainable property solutions that transform communities and elevate living standards across multiple continents.",
      mediaType: "image",
      mediaUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920",
      badge: "Global Presence"
    },
    
    overview: {
      title: "Redefining Modern Living Spaces",
      subtitle: "Our Vision",
      paragraphs: [
        "ARNN Group's Real Estate Development division is committed to creating properties that not only meet today's needs but anticipate tomorrow's demands. We develop residential, commercial, and mixed-use properties across the UAE, Montenegro, Malaysia, and Hong Kong.",
        "Our developments are characterized by innovative design, sustainable practices, and a deep commitment to enhancing the quality of life for residents and communities.",
        "From luxury residences to commercial complexes, each project reflects our dedication to excellence, sustainability, and long-term value creation."
      ],
      highlights: [
        "Award-winning sustainable architecture",
        "Smart building technologies integrated",
        "Multi-country development portfolio",
        "Community-focused design principles"
      ]
    },
    
    features: {
      title: "Innovative Development Solutions",
      subtitle: "Our Expertise",
      layout: "grid",
      items: [
        {
          icon: "award",
          title: "Luxury Residences",
          description: "High-end residential properties featuring world-class amenities and sustainable design.",
        },
        {
          icon: "globe",
          title: "Commercial Spaces",
          description: "State-of-the-art office and retail developments in prime locations.",
        },
        {
          icon: "sparkles",
          title: "Mixed-Use Developments",
          description: "Integrated communities combining residential, retail, and recreational spaces.",
        },
        {
          icon: "shield",
          title: "Sustainable Building",
          description: "Eco-friendly construction practices and green building certifications.",
        },
        {
          icon: "zap",
          title: "Smart Technology",
          description: "IoT-enabled buildings with advanced automation and security systems.",
        },
        {
          icon: "heart",
          title: "Community Design",
          description: "Spaces designed to foster social interaction and community wellbeing.",
        }
      ]
    },
    
    stats: {
      title: "Building Excellence Across Continents",
      items: [
        { value: 50, label: "Projects Completed", suffix: "+", icon: "award" },
        { value: 4, label: "Countries", suffix: "", icon: "globe" },
        { value: 2, label: "Million Sq Ft", suffix: "M+", icon: "trending" },
        { value: 15, label: "Years Experience", suffix: "+", icon: "target" }
      ]
    },
    
    cta: {
      headline: "Invest in Premium Real Estate",
      description: "Discover exceptional property opportunities across our global portfolio of residential and commercial developments.",
      buttonText: "Explore Properties",
      backgroundType: "image",
      backgroundUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920"
    },
    
    nextService: "ict",
    prevService: "economic-empowerment"
  }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}

// Helper function to get all service slugs (for routing)
export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
}

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import arrowIcon from "figma:asset/c41be8b10b822a1da277f51d0be2a4533a5e34d0.png";

interface BusinessDivision {
  number: string;
  title: string;
  heading: string;
  description: string;
  image: string;
}

const divisions: BusinessDivision[] = [
  {
    number: "1",
    title: "ECONOMIC EMPOWERMENT",
    heading: "Economic Empowerment",
    description: "Empowering communities through sustainable business development and financial inclusion initiatives.",
    image: "https://images.unsplash.com/photo-1741275271469-8f5be530a88c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub21pYyUyMGVtcG93ZXJtZW50JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYzMTQ3MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "2",
    title: "REAL ESTATE DEVELOPMENT",
    heading: "Real Estate Development",
    description: "Creating innovative and sustainable property solutions that transform communities and elevate living standards.",
    image: "https://images.unsplash.com/photo-1557813282-bcd50093e38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYzMDQ5MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "3",
    title: "ICT",
    heading: "Information & Communication Technology",
    description: "Delivering cutting-edge technology solutions that drive digital transformation and innovation.",
    image: "https://images.unsplash.com/photo-1584947113849-a5a12146be4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJQ1QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzE0NzEyNHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "4",
    title: "AGRO-AQUACULTURE",
    heading: "Agro-Aquaculture",
    description: "Pioneering sustainable farming and aquaculture practices for food security and environmental stewardship.",
    image: "https://images.unsplash.com/photo-1645692397118-0eba11cd6c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcXVhY3VsdHVyZSUyMGZhcm1pbmd8ZW58MXx8fHwxNzYzMTQ3MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "5",
    title: "FASHION INDUSTRIES",
    heading: "Fashion Industries",
    description: "Creating contemporary fashion and textile solutions that blend tradition with modern design excellence.",
    image: "https://images.unsplash.com/photo-1761682719790-4e0b38ed5beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaW5kdXN0cnklMjB0ZXh0aWxlfGVufDF8fHx8MTc2MzE0NzEyNHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "6",
    title: "EMPOWERING GLOBAL TALENT",
    heading: "Empowering Global Talent",
    description: "Connecting exceptional talent with global opportunities through strategic workforce development programs.",
    image: "https://images.unsplash.com/photo-1659019729984-59db3b81d8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjB0YWxlbnQlMjB3b3JrZm9yY2V8ZW58MXx8fHwxNzYzMTQ3MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "7",
    title: "TRANSFORMING GLOBAL HEALTHCARE ACCESS",
    heading: "Healthcare",
    description: "Equipping Healthcare Facilities with world-class Medical Devices and Equipment.",
    image: "https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGFjY2Vzc3xlbnwxfHx8fDE3NjMxNDcxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "8",
    title: "AGRIFUTURE GLOBAL",
    heading: "AgriFuture Global",
    description: "Revolutionizing agriculture through innovative technology and sustainable farming solutions worldwide.",
    image: "https://images.unsplash.com/photo-1688677825986-4ffb926bafc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzE0NzEyNXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "9",
    title: "FURNITURE AND FURNISHING SECTORS",
    heading: "Furniture & Furnishing",
    description: "Designing and manufacturing premium furniture solutions that combine functionality with aesthetic excellence.",
    image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBmdXJuaXNoaW5nJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzMTQ3MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "10",
    title: "F&B SEGMENTS",
    heading: "Food & Beverage",
    description: "Delivering exceptional culinary experiences and innovative food service solutions across diverse markets.",
    image: "https://images.unsplash.com/photo-1723808484992-8f5e6068ec37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmV2ZXJhZ2UlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MzE0NzEyNXww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function BusinessSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showContent, setShowContent] = useState<number | null>(null);
  const visibleCount = 7;

  useEffect(() => {
    if (hoveredIndex !== null) {
      const timer = setTimeout(() => {
        setShowContent(hoveredIndex);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setShowContent(null);
    }
  }, [hoveredIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(divisions.length - visibleCount, prev + 1));
  };

  const visibleDivisions = divisions.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="relative overflow-hidden" style={{ height: '70vh' }}>
      <div className="flex h-full">
        {visibleDivisions.map((division, index) => (
          <div
            key={`${division.number}-${index}`}
            className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
              hoveredIndex === index ? 'flex-[3]' : 'flex-1'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background Image */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
                hoveredIndex === index ? 'scale-110' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url(${division.image})`
              }}
            />
            
            {/* Blue Tint Overlay */}
            <div className={`absolute inset-0 transition-colors duration-300 ${
              hoveredIndex === index ? 'bg-[#2d3e5f]/60' : 'bg-[#2d3e5f]/70'
            }`} />
            
            {/* Content */}
            <div className="relative h-full flex flex-col text-white">
              {/* Default State - Vertical Title and Number */}
              <div className={`h-full flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                showContent === index ? 'opacity-0' : 'opacity-100'
              }`}>
                {/* Vertical Title */}
                <div
                  className="mb-8 text-xs tracking-[0.2em] uppercase"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed"
                  }}
                >
                  {division.title}
                </div>
                
                {/* Number */}
                <div className="text-6xl">{division.number}</div>
              </div>

              {/* Expanded State - Full Content */}
              <div className={`absolute inset-0 px-8 py-10 flex flex-col justify-between transition-opacity duration-300 ${
                showContent === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}>
                <div>
                  {/* Heading */}
                  <h3 className="mb-4" style={{ fontSize: '1.5rem', lineHeight: '1.3', fontWeight: '600' }}>
                    {division.heading}
                  </h3>
                  
                  {/* Description */}
                  <p className="mb-6 max-w-md" style={{ fontSize: '0.875rem', lineHeight: '1.6', fontWeight: '400' }}>
                    {division.description}
                  </p>
                  
                  {/* Learn More */}
                  <div className="flex items-center gap-3 group cursor-pointer">
                    <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em' }}>LEARN MORE</span>
                    <img src={arrowIcon} alt="" className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-[15px]" />
                  </div>
                </div>
                
                {/* Number at Bottom */}
                <div style={{ fontSize: '5rem', lineHeight: '1', fontWeight: '700', opacity: '0.8' }}>
                  {division.number}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}

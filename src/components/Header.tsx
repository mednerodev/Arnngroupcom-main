import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import logo from "figma:asset/4887e81018b6be301890d453fcf0bdc0fd5e7560.png";
import { servicesData } from "../data/servicesData";

export function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const isServicePage = location.pathname.startsWith('/services/');
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-3 px-8 flex-shrink-0 transition-all duration-300 ${
      isScrolled ? 'bg-[#2d3e5f] text-white shadow-lg' : `bg-transparent ${location.pathname === '/' ? 'text-gray-900' : 'text-white'}`
    }`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={logo} alt="ARNN Group" className="h-16" />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link 
            to="/about-us" 
            className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
              location.pathname === '/about-us' ? `border-b-2 ${isScrolled || location.pathname !== '/' ? 'border-white' : 'border-gray-900'}` : ''
            }`}
          >
            ABOUT
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 text-sm tracking-wide hover:opacity-80 transition-opacity ${
                isServicePage ? `border-b-2 ${isScrolled || location.pathname !== '/' ? 'border-white' : 'border-gray-900'}` : ''
              }`}
            >
              SERVICES
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#2d3e5f] rounded-lg shadow-xl border border-white/10 overflow-hidden">
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                  >
                    <div className="font-semibold">{service.title}</div>
                    <div className="text-xs text-gray-300 mt-0.5">{service.tagline}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <a href="#companies" className="text-sm tracking-wide hover:opacity-80 transition-opacity">
            COMPANIES
          </a>
          <a href="#news" className="text-sm tracking-wide hover:opacity-80 transition-opacity">
            NEWS
          </a>
          <a href="#connect" className="text-sm tracking-wide hover:opacity-80 transition-opacity">
            CONNECT
          </a>
          <a href="#legacy" className="text-sm tracking-wide hover:opacity-80 transition-opacity">
            LEGACY
          </a>
        </nav>
      </div>
    </header>
  );
}

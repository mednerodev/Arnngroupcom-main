import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { servicesData } from "../data/servicesData";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";

export function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state
      setIsScrolled(currentScrollY > 50);

      // Determine scroll direction
      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 100
      ) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isServicePage =
    location.pathname.startsWith("/services/");

  // Check if we're on contact page at top of scroll
  const isContactPageAtTop = location.pathname === "/contact" && !isScrolled;

  return (
    <header
      className={`fixed left-0 right-0 z-50 py-3 px-8 flex-shrink-0 transition-all duration-500 ${
        isVisible ? "top-0" : "-top-32"
      } ${
        isScrolled
          ? "bg-[#2d3e5f] text-white shadow-lg"
          : `bg-transparent ${location.pathname === "/" || isContactPageAtTop ? "text-gray-900" : "text-white"}`
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img 
            src="/arnn.png"
            alt="ARNN GROUP"
            className="h-20 lg:h-28 lg:mt-3"
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile/tablet */}
        <nav className="hidden lg:flex items-center gap-8 lg:-mt-8 mt-[-60px] mr-[0px] mb-[0px] ml-[0px]">
          <Link
            to="/"
            className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
              location.pathname === "/"
                ? `border-b-2 ${isScrolled ? "border-white" : "border-gray-900"}`
                : ""
            }`}
          >
            HOME
          </Link>

          <Link
            to="/about-us"
            className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
              location.pathname === "/about-us"
                ? `border-b-2 ${isScrolled || location.pathname !== "/" ? "border-white" : "border-gray-900"}`
                : ""
            }`}
          >
            ABOUT US
          </Link>

          {/* Our Businesses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm tracking-wide hover:opacity-80 transition-opacity ${
                isServicePage
                  ? `border-b-2 ${isScrolled || location.pathname !== "/" ? "border-white" : "border-gray-900"}`
                  : ""
              }`}
            >
              OUR BUSINESSES
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="bg-[#2d3e5f] rounded-lg shadow-xl border border-white/10 overflow-hidden">
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                    >
                      <div className="font-semibold">
                        {service.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`text-sm tracking-wide hover:opacity-80 transition-opacity ${
              location.pathname === "/contact"
                ? `border-b-2 ${isScrolled || location.pathname !== "/" ? "border-white" : "border-gray-900"}`
                : ""
            }`}
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile/Tablet Burger Menu - Visible on mobile/tablet only */}
        <Sheet
          open={isMobileMenuOpen}
          onOpenChange={setIsMobileMenuOpen}
        >
          <SheetTrigger asChild>
            <button
              className="lg:hidden p-2 hover:opacity-80 transition-opacity"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full bg-[#2d3e5f] text-white border-l border-white/10"
          >
            <SheetHeader>
              <SheetTitle className="text-white text-left">
                <img 
                  src="/arnn.png"
                  alt="ARNN GROUP"
                  className="h-16"
                />
              </SheetTitle>
              <SheetDescription className="sr-only">
                Navigation menu
              </SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col gap-1 mt-8">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm tracking-wide hover:bg-white/10 transition-colors rounded-lg ${
                  location.pathname === "/" ? "bg-white/10" : ""
                }`}
              >
                HOME
              </Link>

              <Link
                to="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm tracking-wide hover:bg-white/10 transition-colors rounded-lg ${
                  location.pathname === "/about-us"
                    ? "bg-white/10"
                    : ""
                }`}
              >
                ABOUT US
              </Link>

              {/* Mobile Our Businesses Accordion */}
              <div className="flex flex-col">
                <button
                  onClick={() =>
                    setIsMobileServicesOpen(
                      !isMobileServicesOpen,
                    )
                  }
                  className={`flex items-center justify-between px-4 py-3 text-sm tracking-wide hover:bg-white/10 transition-colors rounded-lg ${
                    isServicePage ? "bg-white/10" : ""
                  }`}
                >
                  OUR BUSINESSES
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mobile Business Categories Submenu */}
                {isMobileServicesOpen && (
                  <div className="flex flex-col ml-4 mt-1">
                    {servicesData.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                        className="px-4 py-2 text-sm tracking-wide hover:bg-white/10 transition-colors rounded-lg"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm tracking-wide hover:bg-white/10 transition-colors rounded-lg ${
                  location.pathname === "/contact"
                    ? "bg-white/10"
                    : ""
                }`}
              >
                CONTACT
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

interface BusinessDivision {
  number: string;
  title: string;
  heading: string;
  description: string;
  image: string;
  slug?: string; // Optional slug for service page link
}

const divisions: BusinessDivision[] = [
  {
    number: "1",
    title: "ECONOMIC EMPOWERMENT",
    heading: "Economic Empowerment",
    description:
      "Empowering communities through sustainable business development and financial inclusion initiatives.",
    image:
<<<<<<< HEAD
      "https://images.unsplash.com/photo-1758304480396-c259d6ff1aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbW11bml0eSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MzQ1ODM4OHww&ixlib=rb-4.1.0&q=80&w=1080",
=======
      "https://images.unsplash.com/photo-1758304480396-c259d6ff1aa8?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbW11bml0eSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MzQ1ODM4OHww&ixlib=rb-4.1.0&q=60&w=800",
>>>>>>> f8b36dfee4d3674b74de143729d230bf5c158a60
    slug: "economic-empowerment",
  },
  {
    number: "2",
    title: "REAL ESTATE DEVELOPMENT",
    heading: "Real Estate Development",
    description:
      "Creating innovative and sustainable property solutions that transform communities and elevate living standards.",
    image:
<<<<<<< HEAD
      "https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMzODQwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
=======
      "https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMzODQwMTN8MA&ixlib=rb-4.1.0&q=60&w=800",
>>>>>>> f8b36dfee4d3674b74de143729d230bf5c158a60
    slug: "real-estate-development",
  },
  {
    number: "3",
    title: "ICT",
    heading: "Information & Communication Technology",
    description:
      "Delivering cutting-edge technology solutions that drive digital transformation and innovation.",
    image:
<<<<<<< HEAD
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NjM0NDU1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
=======
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NjM0NDU1MTJ8MA&ixlib=rb-4.1.0&q=60&w=800",
>>>>>>> f8b36dfee4d3674b74de143729d230bf5c158a60
    slug: "ict",
  },
  {
    number: "4",
    title: "AGRO-AQUACULTURE",
    heading: "Agro-Aquaculture",
    description:
      "Pioneering sustainable farming and aquaculture practices for food security and environmental stewardship.",
    image:
<<<<<<< HEAD
      "https://images.unsplash.com/photo-1686426575720-99714548a7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwZmFybSUyMGFxdWFjdWx0dXJlfGVufDF8fHx8MTc2MzM3MDU1NHww&ixlib=rb-4.1.0&q=80&w=1080",
=======
      "https://images.unsplash.com/photo-1686426575720-99714548a7e1?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwZmFybSUyMGFxdWFjdWx0dXJlfGVufDF8fHx8MTc2MzM3MDU1NHww&ixlib=rb-4.1.0&q=60&w=800",
>>>>>>> f8b36dfee4d3674b74de143729d230bf5c158a60
    slug: "agro-aquaculture",
  },
  {
    number: "5",
    title: "FASHION INDUSTRIES",
    heading: "Fashion Industries",
    description:
      "Creating contemporary fashion and textile solutions that blend tradition with modern design excellence.",
    image:
<<<<<<< HEAD
      "https://images.unsplash.com/photo-1632991727906-8386e1388975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduZXIlMjBzdHVkaW98ZW58MXx8fHwxNzYzNDU4Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
=======
      "https://images.unsplash.com/photo-1632991727906-8386e1388975?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduZXIlMjBzdHVkaW98ZW58MXx8fHwxNzYzNDU4Mzg5fDA&ixlib=rb-4.1.0&q=60&w=800",
>>>>>>> f8b36dfee4d3674b74de143729d230bf5c158a60
    slug: "fashion-industries",
  },
  {
    number: "6",
    title: "EMPOWERING GLOBAL TALENT",
    heading: "Empowering Global Talent",
    description:
      "Connecting exceptional talent with global opportunities through strategic workforce development programs.",
    image:
<<<<<<< HEAD
      "https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzNDU1NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
=======
      "https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzNDU1NjY4fDA&ixlib=rb-4.1.0&q=60&w=800",
>>>>>>> f8b36dfee4d3674b74de143729d230bf5c158a60
    slug: "empowering-global-talent",
  },
  {
    number: "7",
    title: "HEALTHCARE",
    heading: "Healthcare",
    description:
      "Equipping Healthcare Facilities with world-class Medical Devices and Equipment.",
    image:
<<<<<<< HEAD
      "https://images.unsplash.com/photo-1595464144526-5fb181b74625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYzNDQ0OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
=======
      "https://images.unsplash.com/photo-1595464144526-5fb181b74625?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYzNDQ0OTM3fDA&ixlib=rb-4.1.0&q=60&w=800",
>>>>>>> f8b36dfee4d3674b74de143729d230bf5c158a60
    slug: "healthcare-access",
  },
  {
    number: "8",
    title: "AGRIFUTURE GLOBAL",
    heading: "AgriFuture Global",
    description:
      "Revolutionizing agriculture through innovative technology and sustainable farming solutions worldwide.",
    image:
<<<<<<< HEAD
      "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzQwMDMxNXww&ixlib=rb-4.1.0&q=80&w=1080",
=======
      "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzQwMDMxNXww&ixlib=rb-4.1.0&q=60&w=800",
>>>>>>> f8b36dfee4d3674b74de143729d230bf5c158a60
    slug: "food-safety",
  },
  {
    number: "9",
    title: "FURNITURE AND FURNISHING SECTORS",
    heading: "Furniture & Furnishing",
    description:
      "Designing and manufacturing premium furniture solutions that combine functionality with aesthetic excellence.",
    image:
<<<<<<< HEAD
      "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjM0NTgzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
=======
      "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjM0NTgzOTF8MA&ixlib=rb-4.1.0&q=60&w=800",
>>>>>>> f8b36dfee4d3674b74de143729d230bf5c158a60
    slug: "luxury-furniture",
  },
  {
    number: "10",
    title: "F&B SEGMENTS",
    heading: "Food & Beverage",
    description:
      "Delivering exceptional culinary experiences and innovative food service solutions across diverse markets.",
    image:
      "https://images.unsplash.com/photo-1676471932681-45fa972d848a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NjM0NTgzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "fb-segments",
  },
];

export function BusinessSection() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);
  const [showContent, setShowContent] = useState<number | null>(
    null,
  );
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(7);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState<
    number | null
  >(null); // Absolute index of expanded card on mobile
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const totalDivisions = divisions.length; // 10
  const maxIndex = totalDivisions - visibleCount; // Dynamic based on screen size
  const autoPlayInterval = 4000; // 4 seconds

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0,
      );
    };
    checkTouchDevice();

    // Cleanup hover timeout on unmount
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Responsive visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(2); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3); // Tablet
      } else {
        setVisibleCount(7); // Desktop
      }
    };

    // Set initial value
    updateVisibleCount();

    // Add resize listener
    window.addEventListener("resize", updateVisibleCount);
    return () =>
      window.removeEventListener("resize", updateVisibleCount);
  }, []);

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

  // Auto-play functionality - loops back to beginning
  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      setCurrentPosition((prev) => {
        // Wrap to beginning when reaching the end
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, maxIndex, autoPlayInterval]);

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentPosition((prev) => {
      // Wrap to end when going back from beginning
      if (prev === 0) return maxIndex;
      return prev - 1;
    });
    // Reset expanded card when navigating
    if (isTouchDevice) {
      setExpandedCardIndex(null);
    }
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentPosition((prev) => {
      // Wrap to beginning when going forward from end
      if (prev >= maxIndex) return 0;
      return prev + 1;
    });
    // Reset expanded card when navigating
    if (isTouchDevice) {
      setExpandedCardIndex(null);
    }
  };

  // Mouse drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    // Don't start dragging on touch devices - they use touch events
    if (isTouchDevice) return;

    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isTouchDevice) return;
    const offset = e.clientX - dragStartX;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Determine direction and move if dragged enough
    const threshold = 100; // pixels
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    }
    setDragOffset(0);
  };

  const handleSectionMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
    setIsPaused(false);
  };

  // Touch drag functionality for mobile
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isTouchDevice) return;
    setIsDragging(true);
    setTouchStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isTouchDevice) return;
    const offset = e.touches[0].clientX - touchStartX;
    setDragOffset(offset);
    // Reset expanded card when dragging on mobile
    if (Math.abs(offset) > 10) {
      setExpandedCardIndex(null);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging || !isTouchDevice) return;
    setIsDragging(false);

    // Determine direction and move if dragged enough
    const threshold = 50; // pixels (smaller threshold for touch)
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    }
    setDragOffset(0);
  };

  // Wheel scroll functionality with throttling
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let isScrolling = false;
    const handleWheel = (e: WheelEvent) => {
      // Only handle vertical scroll to move horizontally
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();

        if (isScrolling) return;
        isScrolling = true;

        if (e.deltaY > 0) {
          // Scrolling down = move right (wrap to beginning at end)
          setCurrentPosition((prev) =>
            prev >= maxIndex ? 0 : prev + 1,
          );
        } else {
          // Scrolling up = move left (wrap to end at beginning)
          setCurrentPosition((prev) =>
            prev === 0 ? maxIndex : prev - 1,
          );
        }

        // Throttle scroll events
        setTimeout(() => {
          isScrolling = false;
        }, 600);
      }
    };

    section.addEventListener("wheel", handleWheel, {
      passive: false,
    });
    return () =>
      section.removeEventListener("wheel", handleWheel);
  }, []);

  // Calculate the translate value
  const slideWidth = 100 / visibleCount; // Each slide takes this % of viewport
  const translateX = -(currentPosition * slideWidth);

  // Get the actual progress for the progress indicator (0 to totalDivisions-1)
  const progressIndex = currentPosition;

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "60vh" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleSectionMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation Arrows - Bottom Right */}
      <div className="absolute bottom-0 right-4 md:right-6 lg:right-8 translate-y-1/2 z-20 flex gap-2 md:gap-3 lg:gap-4">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="bg-[#2d3e5f] border-2 border-white/30 rounded-lg md:rounded-xl p-2 md:p-3 lg:p-4 transition-all duration-300 hover:bg-[#3d4e6f] hover:border-white/50 hover:scale-105 group"
          aria-label="Previous slides"
        >
          <ArrowUp 
            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:-translate-x-1 rotate-[-90deg] text-white"
          />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="bg-[#2d3e5f] border-2 border-white/30 rounded-lg md:rounded-xl p-2 md:p-3 lg:p-4 transition-all duration-300 hover:bg-[#3d4e6f] hover:border-white/50 hover:scale-105 group"
          aria-label="Next slides"
        >
          <ArrowUp 
            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:translate-x-1 rotate-90 text-white"
          />
        </button>
      </div>

      {/* Overflow wrapper to clip the visible area */}
      <div className="h-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex h-full"
          style={{
            transform: `translateX(calc(${translateX}% + ${dragOffset}px))`,
            transition: isDragging
              ? "none"
              : "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {divisions.map((division, index) => {
            // Calculate visible range
            const startVisible = currentPosition;
            const endVisible = currentPosition + visibleCount;
            const isVisible =
              index >= startVisible && index < endVisible;

            // Calculate the local index relative to visible divisions
            const localIndex = index - currentPosition;

            // Calculate widths based on hover/expand state
            let cardWidth;

            // Unified width calculation for all devices
            // Use 3:1 ratio - expanded card gets 3 units, others get 1 unit each

            // Mobile/Tablet: expanded card behavior (touch devices)
            if (
              isTouchDevice &&
              expandedCardIndex !== null &&
              isVisible
            ) {
              // Calculate total units: expanded card (3 units) + other cards (1 unit each)
              const totalUnits = 3 + (visibleCount - 1);

              if (expandedCardIndex === index) {
                // Expanded card gets 3 units
                cardWidth = `${(3 / totalUnits) * 100}vw`;
              } else {
                // Other visible cards get 1 unit each
                cardWidth = `${(1 / totalUnits) * 100}vw`;
              }
            }
            // Desktop: hover behavior
            else if (
              hoveredIndex !== null &&
              isVisible &&
              !isTouchDevice
            ) {
              // Calculate total units: hovered card (3 units) + other cards (1 unit each)
              const totalUnits = 3 + (visibleCount - 1);

              if (hoveredIndex === localIndex) {
                // Hovered card gets 3 units
                cardWidth = `${(3 / totalUnits) * 100}vw`;
              } else {
                // Other visible cards get 1 unit each
                cardWidth = `${(1 / totalUnits) * 100}vw`;
              }
            } else {
              // Nothing hovered/expanded: each card is equal width
              cardWidth = `${100 / visibleCount}vw`;
            }

            return (
              <div
                key={`${division.number}-${index}`}
                className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0`}
                style={{
                  width: cardWidth,
<<<<<<< HEAD
=======
                  height: "60vh",
                  minHeight: "60vh",
>>>>>>> f8b36dfee4d3674b74de143729d230bf5c158a60
                }}
                onMouseEnter={() => {
                  if (!isTouchDevice && isVisible) {
                    // Clear any pending hover timeout
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    // Set new hover with small delay to prevent flickering
                    hoverTimeoutRef.current = setTimeout(() => {
                      setHoveredIndex(localIndex);
                    }, 100);
                  }
                }}
                onMouseLeave={() => {
                  if (!isTouchDevice) {
                    // Clear pending hover timeout
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    // Reset hover state with slight delay
                    hoverTimeoutRef.current = setTimeout(() => {
                      setHoveredIndex(null);
                    }, 50);
                  }
                }}
                onClick={(e) => {
                  if (isTouchDevice && isVisible) {
                    e.stopPropagation();
                    // Toggle expand state on mobile
                    if (expandedCardIndex === index) {
                      // Clicking the same card - collapse it
                      setExpandedCardIndex(null);
                      setHoveredIndex(null);
                    } else {
                      // Clicking a different card - expand it
                      setExpandedCardIndex(index);
                      setHoveredIndex(localIndex);
                    }
                  }
                }}
              >
                {/* Background Image */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
                    (isVisible &&
                      hoveredIndex === localIndex) ||
                    (isTouchDevice &&
                      expandedCardIndex === index)
                      ? "scale-110"
                      : "scale-100"
                  }`}
                  style={{
                    backgroundImage: `url(${division.image})`,
                  }}
                />

                {/* Blue Tint Overlay */}
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${
                    (isVisible &&
                      hoveredIndex === localIndex) ||
                    (isTouchDevice &&
                      expandedCardIndex === index)
                      ? "bg-[#2d3e5f]/50"
                      : "bg-[#2d3e5f]/60"
                  }`}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col text-white">
                  {/* Default State - Vertical Title and Number */}
                  <div
                    className={`h-full flex flex-col items-center justify-end p-6 pb-12 transition-all duration-500 ease-out ${
                      (isVisible &&
                        showContent === localIndex) ||
                      (isTouchDevice &&
                        expandedCardIndex === index)
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                    }`}
                    style={{
                      background:
                        "linear-gradient(to top, rgba(40, 49, 90, 0.7) 0%, rgba(40, 49, 90, 0.4) 50%, rgba(40, 49, 90, 0.1) 100%)",
                    }}
                  >
                    {/* Vertical Title */}
                    <div
                      className="mb-8 text-l tracking-[0.2em] uppercase"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {division.title}
                    </div>

                    {/* Number */}
                    {/* <div className="text-6xl">{division.number}</div> */}
                  </div>

                  {/* Expanded State - Full Content */}
                  <div
                    className={`absolute inset-0 px-8 py-10 flex flex-col justify-between transition-all duration-500 ease-out ${
                      (isVisible &&
                        showContent === localIndex) ||
                      (isTouchDevice &&
                        expandedCardIndex === index)
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div>
                      {/* Heading - Smooth fade + slide up */}
                      <h3
                        className={`mb-4 transition-all duration-700 ease-out ${
                          (isVisible &&
                            showContent === localIndex) ||
                          (isTouchDevice &&
                            expandedCardIndex === index)
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{
                          fontSize: "1.5rem",
                          lineHeight: "1.3",
                          fontWeight: "600",
                          transitionDelay:
                            (isVisible &&
                              showContent === localIndex) ||
                            (isTouchDevice &&
                              expandedCardIndex === index)
                              ? "100ms"
                              : "0ms",
                        }}
                      >
                        {division.heading}
                      </h3>

                      {/* Description - Smooth fade + slide up with delay */}
                      <p
                        className={`mb-6 max-w-md transition-all duration-700 ease-out ${
                          (isVisible &&
                            showContent === localIndex) ||
                          (isTouchDevice &&
                            expandedCardIndex === index)
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: "1.6",
                          fontWeight: "400",
                          transitionDelay:
                            (isVisible &&
                              showContent === localIndex) ||
                            (isTouchDevice &&
                              expandedCardIndex === index)
                              ? "200ms"
                              : "0ms",
                        }}
                      >
                        {division.description}
                      </p>

                      {/* Learn More - Smooth fade + slide up with more delay */}
                      {division.slug ? (
                        <Link
                          to={`/services/${division.slug}`}
                          className={`flex items-center gap-3 group cursor-pointer transition-all duration-700 ease-out ${
                            (isVisible &&
                              showContent === localIndex) ||
                            (isTouchDevice &&
                              expandedCardIndex === index)
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4"
                          }`}
                          style={{
                            transitionDelay:
                              (isVisible &&
                                showContent === localIndex) ||
                              (isTouchDevice &&
                                expandedCardIndex === index)
                                ? "300ms"
                                : "0ms",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: "600",
                              letterSpacing: "0.1em",
                            }}
                          >
                            LEARN MORE
                          </span>
                          <ArrowUp 
                            className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-[15px] rotate-90 text-white"
                          />
                        </Link>
                      ) : (
                        <div
                          className={`flex items-center gap-3 opacity-50 cursor-not-allowed transition-all duration-700 ease-out ${
                            (isVisible &&
                              showContent === localIndex) ||
                            (isTouchDevice &&
                              expandedCardIndex === index)
                              ? "translate-y-0"
                              : "translate-y-4"
                          }`}
                          style={{
                            transitionDelay:
                              (isVisible &&
                                showContent === localIndex) ||
                              (isTouchDevice &&
                                expandedCardIndex === index)
                                ? "300ms"
                                : "0ms",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: "600",
                              letterSpacing: "0.1em",
                            }}
                          >
                            COMING SOON
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Number at Bottom - Smooth fade in */}
                    <div
                      className={`transition-all duration-700 ease-out ${
                        (isVisible &&
                          showContent === localIndex) ||
                        (isTouchDevice &&
                          expandedCardIndex === index)
                          ? "opacity-80 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        fontSize: "5rem",
                        lineHeight: "1",
                        fontWeight: "700",
                        transitionDelay:
                          (isVisible &&
                            showContent === localIndex) ||
                          (isTouchDevice &&
                            expandedCardIndex === index)
                            ? "150ms"
                            : "0ms",
                      }}
                    >
                      {/* {division.number} */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
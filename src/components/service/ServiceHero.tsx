import { motion, useScroll, useTransform } from "motion/react";
import { ServiceHeroData } from "../../types/service";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceHeroProps {
  data: ServiceHeroData;
  color: string;
}

export function ServiceHero({ data, color }: ServiceHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );
  const isFashionIndustries =
    data.headline === "Fashion Industries";
  const activeMediaUrl = String(
    isMobile && data.mobileMediaUrl
      ? data.mobileMediaUrl
      : data.mediaUrl
  );
  const isFoodSafetyHeadline =
    /^a global initiative for world food/i.test(
      data.headline.toLowerCase(),
    );
  const foodSafetySecondLine = data.headline.replace(
    /^A Global Initiative for\s*/i,
    "",
  );
  const youtubeMatch =
    activeMediaUrl.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/i,
    );
  const youtubeVideoId = youtubeMatch?.[1];
  const isYoutubeVideo =
    data.mediaType === "video" && Boolean(youtubeVideoId);
  const youtubeEmbedUrl = youtubeVideoId
    ? `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&fs=0&disablekb=1`
    : "";
  const videoMimeType = activeMediaUrl.toLowerCase().endsWith(".webm")
    ? "video/webm"
    : "video/mp4";
  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={heroRef} className="relative w-screen overflow-hidden" style={{ height: '100dvh' }}>
      {/* Background Media with Parallax */}
      {data.mediaType === 'video' ? (
        <div className="absolute inset-0 z-0">
          {isYoutubeVideo ? (
            <motion.div style={{ scale }} className="absolute inset-0 overflow-hidden">
              <iframe
                src={youtubeEmbedUrl}
                title="Hero video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="pointer-events-none border-0 bg-video-blur"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 'max(100%, 177.78vh)',
                  height: 'max(100%, 56.25vw)',
                }}
              />
            </motion.div>
          ) : (
            <motion.video
              key={activeMediaUrl}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ scale }}
              className="absolute inset-0 w-full h-full object-cover bg-video-blur"
              onError={() => {
                console.error('Video failed to load:', activeMediaUrl);
              }}
            >
              <source src={activeMediaUrl} type={videoMimeType} />
              Your browser does not support the video tag.
            </motion.video>
          )}
        </div>
      ) : (
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${activeMediaUrl})` }}
          />
        </motion.div>
      )}

      {/* Multi-Layer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/60 via-[#1a1a2e]/50 to-[#0a0a0a]/70"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${color}40, transparent 60%)`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>

      {/* Animated Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>



      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative h-full flex items-center justify-center px-8"
      >
        <div className="max-w-[1200px] w-full mt-[80px] translate-x-3 md:translate-x-8 translate-y-8 md:translate-y-14">
          {/* Badge */}
          {data.badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-xl"
                style={{
                  backgroundColor: `${color}15`,
                  borderColor: `${color}30`
                }}
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: color }}
                ></div>
                <span
                  className="uppercase tracking-[0.3em]"
                  style={{ fontSize: '0.75rem', fontWeight: '600', color: color }}
                >
                  {data.badge}
                </span>
              </div>
            </motion.div>
          )}

          {/* Subheadline */}
          {data.subheadline && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <span
                className="uppercase tracking-[0.2em]"
                style={{ fontSize: '0.875rem', fontWeight: '500', color: `${color}` }}
              >
                {data.subheadline}
              </span>
            </motion.div>
          )}

          {/* Business Logo */}
          {data.businessLogoUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className={isFashionIndustries ? "mb-10" : "mb-6"}
            >
              {data.websitelink ? (
                <a
                  href={data.websitelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={data.businessLogoUrl}
                    alt="Business logo"
                    className={`max-w-[280px] w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-pointer ${isFashionIndustries
                        ? "h-14 md:h-16 lg:h-20"
                        : "h-16 md:h-20 lg:h-24"
                      }`}
                  />
                </a>
              ) : (
                <img
                  src={data.businessLogoUrl}
                  alt="Business logo"
                  className={`max-w-[280px] w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] ${isFashionIndustries
                      ? "h-14 md:h-16 lg:h-20"
                      : "h-16 md:h-20 lg:h-24"
                    }`}
                />
              )}
            </motion.div>
          )}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-white mb-8 leading-[0.95] ${
              isFoodSafetyHeadline
                ? "whitespace-normal"
                : "whitespace-nowrap"
            }`}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: '900',
              letterSpacing: '-0.04em'
            }}
          >
            {isFoodSafetyHeadline ? (
              <>
                A Global Initiative for
                <br />
                {foodSafetySecondLine}
              </>
            ) : (
              data.headline
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 max-w-[700px] mb-10 leading-relaxed"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: '300' }}
          >
            {data.description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{ backgroundColor: color }}
              onClick={() => {
                const nextSection = document.querySelector('section:nth-of-type(2)');
                if (nextSection) {
                  nextSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="relative flex items-center gap-3">
                <span className="text-white" style={{ fontSize: '0.875rem', fontWeight: '600', letterSpacing: '0.05em' }}>
                  EXPLORE MORE
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const nextSection = document.querySelector('section:nth-of-type(2)');
          if (nextSection) {
            nextSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2 hover:border-white/60 transition-colors duration-300"
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: color }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

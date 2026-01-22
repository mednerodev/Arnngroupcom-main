import { motion } from "motion/react";
import logo from "figma:asset/4887e81018b6be301890d453fcf0bdc0fd5e7560.png";

export function GlobalLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center gap-8">
        {/* Orbital Animation */}
        <div className="relative w-24 h-24">
          {/* Center Circle */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-3 h-3 bg-[#2d3e5f] rounded-full" />
          </motion.div>

          {/* Orbiting Circles */}
          {[0, 120, 240].map((rotation, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ rotate: rotation }}
              animate={{ rotate: rotation + 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.15,
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <motion.div
                  className="w-2.5 h-2.5 bg-[#2d3e5f] rounded-full"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}

          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 border-2 border-[#2d3e5f]/20 rounded-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Pulsing Ring */}
          <motion.div
            className="absolute inset-0 border-2 border-[#2d3e5f]/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Brand Logo */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Animated Logo */}
          <motion.img
            src={logo}
            alt="ARNN Group"
            className="h-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
          />
          
          {/* Loading Bar */}
          <div className="w-48 h-0.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#28315A]"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Subtle Loading Text */}
        <motion.p
          className="tracking-wide"
          style={{ 
            fontSize: '0.875rem', 
            fontWeight: '700',
            color: '#2d3e5f',
            letterSpacing: '0.1em'
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading Excellence
        </motion.p>
      </div>
    </div>
  );
}
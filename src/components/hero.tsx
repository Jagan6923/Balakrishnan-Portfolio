import { motion } from "framer-motion";
import { TextReveal } from "./ui/text-reveal";
import img from "../assets/cam5.jpg";


export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30 z-10" />{" "}
        {/* Dark overlay */}
        <img
          src={img}
          alt="Hero background - Professional camera capturing sunset"
          className="w-full h-full object-cover filter brightness-90"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center px-6 space-y-12" // Increased spacing
      >
        <TextReveal
          text="Capturing Life's Moments"
          className="text-5xl md:text-7xl font-bold text-gray-400 p-3 drop-shadow-lg"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200/90 max-w-2xl mx-auto font-200 leading-relaxed"
        >
          Professional photographer specializing in portraits, landscapes, and
          events
        </motion.p>
        <motion.div className="flex gap-4 justify-center">
          <motion.a
            href="#works"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-white-100 transition-all duration-200 shadow-lg"
          >
            View Portfolio
          </motion.a>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-black text-black font-semibold 
                     rounded-full hover:bg-white/10 transition-all duration-200 shadow-lg"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

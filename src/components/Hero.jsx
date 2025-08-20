 "use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  // Animated counters logic
  const [students, setStudents] = useState(0);
  const [toppers, setToppers] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    let s = 0, t = 0, y = 0;
    const interval = setInterval(() => {
      if (s < 500) s += 10, setStudents(s);
      if (t < 50) t += 1, setToppers(t);
      if (y < 10) y += 1, setYears(y);
      if (s >= 500 && t >= 50 && y >= 10) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="/img.jpg" 
          alt="Gurav Study Point background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-blue-900/80" />
      </div>
      
      {/* Floating Shapes Animation */}
      <motion.div 
        className="absolute top-10 left-4 w-48 h-48 sm:top-20 sm:left-20 sm:w-72 sm:h-72 rounded-full bg-purple-500/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-4 w-64 h-64 sm:bottom-10 sm:right-20 sm:w-96 sm:h-96 rounded-full bg-blue-500/10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Admissions Open Badge */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-gradient-to-r from-red-600 to-pink-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-bold shadow-lg z-20"
      >
        Admissions Open 2025
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center w-full max-w-4xl px-4 py-8 sm:py-12"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
            Gurav Study Point
          </span>
        </motion.h1>
        
        <motion.p 
          className="mt-3 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-black/30 backdrop-blur-sm rounded-lg py-2 px-4 mx-2 sm:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Quality Coaching from Nursery to 12th – All Subjects
        </motion.p>
        
        <motion.p 
          className="mt-3 text-base sm:text-lg md:text-xl font-medium text-white bg-black/30 backdrop-blur-sm rounded-lg py-2 px-4 mx-2 sm:mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          Experienced Teachers • Regular Tests • Proven Results
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <motion.a 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(255, 193, 7, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            href="#join"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 text-sm sm:text-base w-full sm:w-auto text-center"
          >
            Join Now
          </motion.a>
          <motion.a 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            href="#results"
            className="border-2 border-white text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-gray-900 text-sm sm:text-base w-full sm:w-auto text-center"
          >
            View Results
          </motion.a>
        </motion.div>

        {/* Counters */}
        <motion.div 
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          <motion.div 
            className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
              {students}+
            </span>
            <p className="text-white mt-2 text-sm sm:text-lg">Students Trained</p>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
              {toppers}+
            </span>
            <p className="text-white mt-2 text-sm sm:text-lg">Board Toppers</p>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
              {years}+
            </span>
            <p className="text-white mt-2 text-sm sm:text-lg">Years of Excellence</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 sm:h-3 bg-yellow-400 rounded-full mt-1 sm:mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
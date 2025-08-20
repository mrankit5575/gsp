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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style = "/img.jpg"
      >
         <img src="/img.jpg"  alt="images" />
        </div>
      
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-blue-900/80" /> */}

      {/* Floating Shapes Animation */}
      <motion.div 
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-purple-500/10"
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
        className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-blue-500/10"
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
        className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg z-20"
      >
        Admissions Open 2025
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center max-w-4xl px-4 py-12"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
            Gurav Study Point
          </span>
        </motion.h1>
        
        <motion.p 
          className="mt-4 text-2xl md:text-3xl font-bold text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Quality Coaching from Nursery to 12th – All Subjects
        </motion.p>
        
        <motion.p 
          className="mt-3 text-lg md:text-xl font-medium text-black max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          Experienced Teachers • Regular Tests • Proven Results
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
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
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600"
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
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            View Results
          </motion.a>
        </motion.div>

        {/* Counters */}
        <motion.div 
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          <motion.div 
            className= " p-6 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
              {students}+
            </span>
            <p className="text-gray-200 mt-2 text-lg">Students Trained</p>
          </motion.div>
          
          <motion.div 
            className="  p-6 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
              {toppers}+
            </span>
            <p className="text-gray-200 mt-2 text-lg">Board Toppers</p>
          </motion.div>
          
          <motion.div 
            className=" p-6 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
              {years}+
            </span>
            <p className="text-gray-200 mt-2 text-lg">Years of Excellence</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}


//ye this `
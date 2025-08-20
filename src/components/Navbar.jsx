 "use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-[rgb(12,9,80)] text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left Section - Logo + Name */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Institute Logo" className="w-10 h-10 rounded-full"/>
          <span className="text-lg font-bold">Gurav Study Point</span>
        </div>

        {/* Right Section - Menu Items */}
        <div className="flex items-center space-x-6">
          {["Home", "About", "Courses", "Results", "Gallery", "Contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={`/${item.toLowerCase()}`} className="hover:text-gray-300 transition">
                {item}
              </Link>
            </motion.div>
          ))}

          {/* Highlighted Call/WhatsApp Button */}
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/1234567890" 
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold shadow-md transition"
          >
            Ek Call / WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

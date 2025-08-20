 "use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-[rgb(12,9,80)] text-white shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          
          {/* Left Section - Logo + Name */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Institute Logo" className="w-10 h-10 rounded-full"/>
            <span className="text-lg font-bold hidden sm:block">Gurav Study Point</span>
            <span className="text-lg font-bold sm:hidden">GSP</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/1234567890" 
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-full font-semibold shadow-md transition mr-3 text-sm"
            >
              Call
            </motion.a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <motion.span 
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                  className="w-full h-0.5 bg-white block"
                />
                <motion.span 
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className="w-full h-0.5 bg-white block"
                />
                <motion.span 
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                  className="w-full h-0.5 bg-white block"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[rgb(12,9,80)] border-t border-gray-700"
            >
              <div className="px-4 py-3 space-y-4">
                {["Home", "About", "Courses", "Results", "Gallery", "Contact"].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-b border-gray-700 pb-2 last:border-b-0"
                  >
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className="block py-2 hover:text-gray-300 transition text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/1234567890" 
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md transition block text-center mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Ek Call / WhatsApp
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
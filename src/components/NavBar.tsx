'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaUser } from 'react-icons/fa'
import { GiCookingPot } from 'react-icons/gi'

export default function AnimatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = ['home', 'recipes', 'menu', 'about', 'contact']

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } }
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white text-gray-800 shadow-md' : 'bg-transparent text-white'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GiCookingPot className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">RecipeHub</span>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`${item}`}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              className="relative"
              initial={false}
              animate={isSearchOpen ? { width: 200 } : { width: 40 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                placeholder="Search recipes..."
                className={`w-full py-1 px-3 rounded-full bg-gray-100 text-gray-900 focus:outline-none ${
                  isSearchOpen ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}
              />
              <motion.button
                className="absolute right-0 top-0 p-2 rounded-full hover:bg-yellow-400 transition-colors duration-300"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaSearch className={isScrolled ? 'text-gray-800' : 'text-white'} />
              </motion.button>
            </motion.div>
            <motion.button
              className="p-2 rounded-full hover:bg-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaUser className={isScrolled ? 'text-gray-800' : 'text-white'} />
            </motion.button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`${item}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-yellow-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <FaUser className="h-6 w-6 text-gray-900" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-900">User Profile</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
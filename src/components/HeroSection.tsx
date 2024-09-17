'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FaPizzaSlice, FaCarrot, FaAppleAlt, FaFish } from 'react-icons/fa'
import { GiCupcake } from 'react-icons/gi'

export default function AnimatedHero() {
  const [searchValue, setSearchValue] = useState('')
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' }
    })
  }, [controls])

  const floatingIcons = [
    { Icon: FaPizzaSlice, initialX: '10%', initialY: '20%' },
    { Icon: FaCarrot, initialX: '80%', initialY: '15%' },
    { Icon: FaAppleAlt, initialX: '25%', initialY: '80%' },
    { Icon: FaFish, initialX: '70%', initialY: '70%' },
    { Icon: GiCupcake, initialX: '90%', initialY: '50%' }
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-white text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover Delicious Recipes
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Find, cook, and share your favorite dishes
        </motion.p>
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
        </motion.div>
        <motion.button
          className="mt-8 px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Cooking
        </motion.button>
      </div>
      {floatingIcons.map(({ Icon, initialX, initialY }, index) => (
        <motion.div
          key={index}
          className="absolute text-yellow-400 text-4xl"
          style={{ left: initialX, top: initialY }}
          animate={controls}
          custom={index}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  )
}
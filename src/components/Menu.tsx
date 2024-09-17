'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'

interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strInstructions: string
}

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchMeals = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      const data = await response.json()

      if (data.meals) {
        setMeals(data.meals)
      } else {
        setMeals([])
        setError('No meals found. Try another search term.')
      }
    } catch (err) {
      setError('An error occurred while fetching meals. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="relative z-20 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Search Our Menu</h1>
          <form onSubmit={searchMeals} className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a meal..."
                className="w-full px-4 py-2 rounded-full border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-gray-800 placeholder-gray-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-yellow-400 rounded-full text-white hover:bg-yellow-500 transition-colors duration-300"
              >
                <FaSearch />
              </button>
            </div>
          </form>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-xl font-semibold text-white"
            >
              Loading...
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-red-400 text-xl font-semibold"
            >
              {error}
            </motion.div>
          )}

          <AnimatePresence>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {meals.map((meal) => (
                <motion.div
                  key={meal.idMeal}
                  className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden border border-yellow-400"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-48 object-cover"
                    width={420}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{meal.strMeal}</h2>
                    <p className="text-gray-600 line-clamp-3">{meal.strInstructions}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
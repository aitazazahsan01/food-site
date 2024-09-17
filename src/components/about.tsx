'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaUtensils, FaTruck, FaBook } from 'react-icons/fa'

const staffMembers = [
  { name: 'John Doe', role: 'Head Chef', image: '/pic1.jpeg?height=300&width=300' },
  { name: 'Jane Smith', role: 'Sous Chef', image: '/pic2.jpeg?height=300&width=300' },
  { name: 'Mike Johnson', role: 'Pastry Chef', image: '/pic3.jpeg?height=300&width=300' },
]

const services = [
  { name: 'Fine Dining', icon: FaUtensils, description: 'Experience exquisite cuisine in our elegant restaurant.' },
  { name: 'Home Delivery', icon: FaTruck, description: 'Enjoy our delicious meals in the comfort of your home.' },
  { name: 'Order Booking', icon: FaBook, description: 'Reserve your table or place an order in advance.' },
]

export default function AboutSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100">
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
      <div className="relative z-20 container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>

        <motion.div
          className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2010 by Chef Maria Rodriguez, our restaurant has been serving exquisite cuisine for over a decade. 
            Chef Maria s passion for culinary arts and her innovative approach to traditional recipes have made our 
            restaurant a local favorite and a must-visit destination for food enthusiasts.
          </p>
          <p className="text-gray-700">
            We pride ourselves on using only the freshest, locally-sourced ingredients to create unforgettable dining 
            experiences for our guests. Our commitment to quality and creativity is reflected in every dish we serve.
          </p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white bg-opacity-90 rounded-lg shadow-xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  width={420}
                  height={200}
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="bg-white bg-opacity-90 rounded-lg shadow-xl p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <service.icon className="text-4xl text-yellow-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

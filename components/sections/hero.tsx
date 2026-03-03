'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.320, 1] },
    },
  }

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full width background image */}
      <Image
        src="/hero-bg.jpg"
        alt="Nikita - UI/UX Designer"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/60 to-black/40" />

      {/* Content overlay */}
      <motion.div
        className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center max-w-5xl"
          variants={itemVariants}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]"
            variants={itemVariants}
          >
            Hi, I&apos;m <span className="text-lavender-500">Nikita</span><br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white/50">UI/UX designer</span>
          </motion.h1>

          <motion.p
            className="text-1xl md:text-2xl lg:text-3xl text-gray-200 mb-12 font-light italic leading-tight max-w-4xl"
            variants={itemVariants}
          >
            &quot;A designer who judges a book by its cover&quot;
          </motion.p>

          <motion.a
            href="#about"
            className="inline-block px-10 py-4 border-2 border-white text-white font-semibold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

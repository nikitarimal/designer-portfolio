'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" ref={ref} className="pt-12 md:pt-16 pb-12 md:pb-16 px-4 sm:px-8 lg:px-12 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-[1fr,2.5fr] gap-24 lg:gap-40 items-start">

          {/* Sticky Title */}
          <div className="lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h2 className="text-8xl sm:text-9xl font-black text-white leading-none tracking-tighter mb-8">
                ABOUT<span className="text-lavender-500">.</span>
              </h2>
              {/* <p className="text-gray-500 text-xl font-mono uppercase tracking-[0.3em] max-w-xs">
                Designing Intentional Digital Experiences
              </p> */}
            </motion.div>
          </div>

          {/* About Content */}
          <div className="space-y-20 md:space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-12"
            >
              <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl">
                GREAT DESIGN IS NOT JUST HOW IT LOOKS, BUT HOW IT WORKS FOR PEOPLE.
              </h3>

              <div className="grid md:grid-cols-2 gap-16 md:gap-32">
                <div className="space-y-6">
                  <p className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-lavender-500">01. Who I Am</p>
                  <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                    I'm a passionate UI/UX designer obsessed with creating digital experiences that solve real problems. With a focus on user-centric design, I help brands reimagine their digital presence and connect with users in meaningful ways.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-lavender-500">02. My Philosophy</p>
                  <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                    My approach combines creative storytelling, human-centered research, and meticulous design execution. I believe that great design comes from understanding people deeply and solving problems elegantly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Second Row of Content */}
              <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-16 md:gap-32 pt-20 md:pt-24 border-t border-white/5"
            >
              <div className="space-y-6">
                <p className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-lavender-500">03. What I Do</p>
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-gray-300 font-medium">
                    Strategy. Interface. Interaction.
                  </p>
                  <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                    I specialize in user interface design, user experience strategy, design systems, and interaction design. I thrive on turning complex problems into simple, beautiful, and intuitive solutions.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-lavender-500">04. Current Focus</p>
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-gray-300 font-medium">
                    Innovation & Scalability
                  </p>
                  <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                    Currently focused on crafting high-fidelity prototypes, conducting user testing, and building designs that truly matter. I'm always looking for ways to push the boundaries of digital design.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Subtle watermark */}
            <div className="absolute -bottom-40 -left-20 text-[25vw] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter">
              NIKK
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

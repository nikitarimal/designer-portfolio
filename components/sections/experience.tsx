'use client'

import { motion } from 'framer-motion'
import { experience } from '@/data/experience'
import { useInView } from 'react-intersection-observer'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.1, ease: [0.215, 0.610, 0.355, 1.000] },
    }),
  }

  return (
    <section id="experience" ref={ref} className="pt-24 md:pt-32 pb-0 px-4 sm:px-8 lg:px-16 bg-black">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-start">

          {/* Sticky Left Column: The Title */}
          <div className="lg:w-1/3 lg:sticky lg:top-40 z-10 self-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.8] tracking-tighter uppercase break-all sm:break-normal lg:whitespace-pre-line">
                EXP<br />ERI<br />ENCE<span className="text-lavender-500">.</span>
              </h2>

              <div className="space-y-6">
                <p className="text-gray-500 text-sm md:text-base font-mono uppercase tracking-[0.3em] max-w-[200px]">
                  Professional Work History
                </p>
                <div className="w-16 h-1 bg-lavender-600 hidden lg:block" />
              </div>

              {/* Counter or indicator */}
              <div className="hidden lg:block pt-12">
                <span className="text-[15vw] font-black text-white/[0.03] select-none pointer-events-none leading-none">
                  06
                </span>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Right Column: The History */}
          <div className="lg:w-2/3 space-y-40">
            {experience.map((exp: any, idx: number) => (
              <motion.div
                key={exp.id}
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="group relative pb-20 border-b border-white/5 last:border-0 last:pb-0"
              >
                <div className="space-y-12">
                  {/* Period & Role */}
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-8">
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight group-hover:text-lavender-500 transition-colors duration-500 leading-[1.1]">
                        {exp.role}
                      </h3>
                      <p className="text-2xl md:text-3xl text-gray-500 font-light italic">
                        {exp.company}
                      </p>
                    </div>
                    <div className="shrink-0 text-xs font-mono tracking-[0.5em] text-lavender-500/50 uppercase bg-lavender-500/5 px-4 py-2 rounded-full border border-lavender-500/10">
                      {exp.period}
                    </div>
                  </div>

                  {/* Location & Description */}
                  <div className="space-y-8">
                    {exp.location && (
                      <div className="flex items-center gap-4 text-gray-600 text-sm font-light">
                        <span className="w-12 h-[1px] bg-gray-800" />
                        {exp.location}
                      </div>
                    )}
                    <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-4xl">
                      {exp.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 pt-16 border-t border-white/5">
                    {exp.highlights.map((highlight: string, i: number) => (
                      <motion.div
                        key={i}
                        className="flex gap-6 group/item"
                        whileHover={{ x: 10 }}
                      >
                        <span className="text-xs font-mono text-zinc-900 group-hover/item:text-lavender-500 transition-colors mt-2">
                          {i < 9 ? `0${i + 1}` : i + 1}
                        </span>
                        <p className="text-lg text-gray-400 group-hover/item:text-gray-200 transition-colors leading-relaxed">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Final space removed to reduce gap between sections */}
          </div>

        </div>
      </div>
    </section>
  )
}

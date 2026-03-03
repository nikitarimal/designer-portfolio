'use client'

import { motion } from 'framer-motion'
import { certifications } from '@/data/certifications'
import { useInView } from 'react-intersection-observer'
import { Award, ArrowUpRight } from 'lucide-react'

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  }

  return (
    <section id="certifications" ref={ref} className="py-24 md:py-32 px-4 sm:px-8 lg:px-12 bg-black border-t border-white/5">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-[1fr,2.5fr] gap-24 lg:gap-40 items-start">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter mb-8 uppercase">
              RECOGNITION<span className="text-lavender-500">.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-sm leading-relaxed uppercase tracking-[0.2em] font-mono">
              Validating my expertise through global standards.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="group relative"
              >
                <div className="h-full border border-white/5 bg-[#0a0a0a] rounded-[32px] p-10 md:p-12 transition-all duration-500 group-hover:border-lavender-500/30 group-hover:bg-[#0c0c0c] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="flex flex-col h-full space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-lavender-500/10 rounded-full flex items-center justify-center text-lavender-500 group-hover:bg-lavender-500 group-hover:text-white transition-all duration-500">
                        <Award size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em] uppercase">{cert.date}</span>
                    </div>

                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-lavender-500 transition-colors duration-500 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-gray-500 font-light text-lg uppercase tracking-widest">{cert.issuer}</p>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-zinc-800 tracking-tighter uppercase">ID: {cert.credentialId}</span>
                      <ArrowUpRight size={16} className="text-zinc-800 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

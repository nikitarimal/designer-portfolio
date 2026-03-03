'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight } from 'lucide-react'

export default function GraphicsDesign() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="graphics" ref={ref} className="py-24 md:py-32 px-4 sm:px-8 lg:px-12 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h2 className="text-7xl sm:text-9xl font-black text-white leading-none tracking-tighter uppercase break-all sm:break-normal">
              GRAPHICS<br />DESIGN<span className="text-secondary-500">.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col items-start lg:items-end gap-12"
          >
            <div className="space-y-6 lg:text-right">
              <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">Creative Assets</p>
              <p className="text-xl md:text-2xl text-gray-400 max-w-xl font-light leading-relaxed">
                Beyond UI/UX, I also specialize in visual communication and graphic design. 
                Explore my collection of branding, social media assets, and digital illustrations.
              </p>
            </div>
            
            <a 
              href="https://drive.google.com/drive/folders/1DPX13i6LhnQHmwhooIeJuzCnFPoLd-qP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black uppercase tracking-[0.3em] rounded-full hover:bg-zinc-800 hover:text-white transition-all duration-700 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Portfolio <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-x-full transition-transform duration-700" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

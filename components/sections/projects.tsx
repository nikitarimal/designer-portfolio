'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 px-4 sm:px-8 lg:px-12 bg-black min-h-screen">
      <div className="max-w-[1800px] mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h2 className="text-8xl sm:text-9xl font-black text-white leading-none tracking-tighter">
              FEATURED<br />WORK
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-end"
          >
            <p className="text-xl md:text-2xl text-gray-400 max-w-xl font-light leading-relaxed">
              Each project here reflects my approach to design, turning complex ideas into
              intuitive, visually balanced experiences crafted to turn ideas into seamless digital
              experiences.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-x-8 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project: any) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <motion.div
                className="group relative flex flex-col"
                variants={itemVariants}
              >
                {/* Card Container with Border */}
                <div className="rounded-[40px] border border-white/5 bg-[#0a0a0a] overflow-hidden p-3 md:p-4 transition-all duration-500 group-hover:border-white/10 group-hover:scale-[1.01]">
                  {/* Image Holder */}
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-zinc-900 mb-4 md:mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-w-768px) 100vw, 50vw"
                    />
                    {/* Darker Overlay on Image */}
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>

                  {/* Footer with Title and Year */}
                  <div className="mt-4 px-6 py-8 md:px-10 md:py-10 bg-black/40 rounded-[32px] border border-white/5 flex items-end justify-between transition-colors group-hover:bg-black/60">
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase truncate max-w-[200px] md:max-w-none">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-[10px] md:text-sm font-light uppercase tracking-[0.2em]">
                        {project.category}
                      </p>
                    </div>
                    <div className="text-[10px] md:text-xs font-mono px-6 py-2 border border-white/10 rounded-full text-zinc-500 uppercase tracking-[0.3em] group-hover:border-white/20 transition-colors">
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Floating "View" indicator on Hover */}
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold uppercase py-4 px-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-12 group-hover:translate-y-0 tracking-[0.3em] backdrop-blur-md">
                  Discover
                </div> */}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

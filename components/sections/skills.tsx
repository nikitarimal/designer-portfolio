'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] },
        },
    }

    return (
        <section id="skills" ref={ref} className="pt-12 md:pt-16 pb-24 md:pb-32 px-4 sm:px-8 lg:px-12 bg-black border-t border-white/5">
            <div className="max-w-[1800px] mx-auto">
                <div className="grid lg:grid-cols-[1fr,2fr] gap-24 lg:gap-40">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter mb-8">
                            CORE<br />SKILLS<span className="text-lavender-500">.</span>
                        </h2>
                        <p className="text-xl text-gray-500 font-light max-w-sm leading-relaxed uppercase tracking-widest font-mono">
                            Expertise built through years of design execution and strategic thinking.
                        </p>
                    </motion.div>

                    {/* Skills Categories */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="grid sm:grid-cols-2 gap-x-20 gap-y-32"
                    >
                        {skills.map((category) => (
                            <motion.div key={category.id} variants={itemVariants} className="space-y-10 group">
                                <div className="flex items-center gap-6">
                                    <span className="text-xs font-mono text-white/20 group-hover:text-lavender-500 transition-colors">0{category.id}</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase">
                                        {category.category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {category.items?.map((skill, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="px-6 py-3 border border-white/10 rounded-full text-gray-500 hover:text-white hover:border-white transition-all duration-300 transform"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                        >
                                            <span className="text-sm font-light uppercase tracking-[0.2em]">{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

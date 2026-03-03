'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Instagram, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-8 lg:px-12 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-40">

          {/* Left Side: Call to Action */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter mb-8">
                LET'S<br />WORK<br />TOGETHER<span className="text-lavender-500">.</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 font-light max-w-md leading-relaxed">
                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
              </p>
            </motion.div>

            <motion.div
              className="space-y-8 pt-12 border-t border-white/5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-8 font-mono text-xs uppercase tracking-[0.3em]">
                <div className="space-y-4">
                  <p className="text-white/20">Socials</p>
                  <div className="flex flex-col gap-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      LinkedIn <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      Instagram <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      GitHub <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-white/20">Contact</p>
                  <div className="flex flex-col gap-4">
                    <a href="mailto:nikitarimal1418@gmail.com" className="text-gray-400 hover:text-white transition-colors truncate">
                      nikitarimal1418@gmail.com
                    </a>
                    <p className="text-gray-600">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Big Minimalist Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="group relative">
                <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20 mb-4 group-focus-within:text-lavender-500 transition-colors">01. Your Name</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nikita Rimal"
                  className="w-full bg-transparent border-b border-white/10 py-6 text-2xl md:text-3xl text-white font-light focus:outline-none focus:border-lavender-500 transition-colors placeholder:text-white/30"
                />
              </div>

              <div className="group relative">
                <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20 mb-4 group-focus-within:text-lavender-500 transition-colors">02. Your Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="nikitarimal1418@gmail.com"
                  className="w-full bg-transparent border-b border-white/10 py-6 text-2xl md:text-3xl text-white font-light focus:outline-none focus:border-lavender-500 transition-colors placeholder:text-white/30"
                />
              </div>

              <div className="group relative">
                <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20 mb-4 group-focus-within:text-lavender-500 transition-colors">03. Your Message</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-transparent border-b border-white/10 py-6 text-2xl md:text-3xl text-white font-light focus:outline-none focus:border-lavender-500 transition-colors resize-none placeholder:text-white/30"
                />
              </div>

              <div className="pt-8">
                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  className="relative group overflow-hidden w-full md:w-auto px-16 py-8 bg-white text-black text-xs font-black uppercase tracking-[0.4em] rounded-full hover:bg-lavender-600 hover:text-white transition-all duration-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{isSubmitted ? 'Message Sent' : 'Send Message'}</span>
                  <div className="absolute inset-0 bg-lavender-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                </motion.button>
              </div>
            </form>

            {/* Decorative background number or element */}
            <div className="absolute -bottom-20 -right-20 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
              NIKK
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

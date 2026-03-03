'use client'

import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.div 
          className="grid md:grid-cols-3 gap-16 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">Nikita Rimal</h3>
            <p className="text-gray-400 text-lg leading-relaxed">Crafting exceptional digital experiences through strategic design and innovation.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#graphics" className="text-gray-400 hover:text-white transition-colors">Graphics</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Follow</h4>
            <div className="flex gap-6">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Mail size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-gray-900 pt-8 text-center">
          <p className="text-gray-500 text-sm">&copy; {year} Nikita Rimal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { projects } from '@/data/projects'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 2)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Immersive Hero Section with Image behind Navbar */}
      <section className="relative h-[70vh] md:h-screen w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
          priority
        />
        {/* Modern dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-end pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/#projects" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>

            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Project Overview</h2>

              <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                <p>
                  This project showcases strategic UI/UX design and innovative problem-solving. The challenge was to create a solution that addresses real user needs while maintaining technical feasibility and beautiful aesthetics.
                </p>

                <h3 className="font-semibold text-foreground text-xl">The Challenge</h3>
                <p>
                  Understanding the core problem required extensive user research, competitive analysis, and stakeholder interviews. We needed to balance multiple perspectives and create a solution that truly resonated with our target audience.
                </p>

                <h3 className="font-semibold text-foreground text-xl">Our Approach</h3>
                <ul className="space-y-2">
                  <li>Conducted 20+ user interviews and usability tests</li>
                  <li>Created detailed personas and user journey maps</li>
                  <li>Developed multiple prototypes and iterated based on feedback</li>
                  <li>Collaborated across design, engineering, and product teams</li>
                </ul>

                <h3 className="font-semibold text-foreground text-xl">Results & Impact</h3>
                <p>
                  The successful launch resulted in increased user engagement, higher retention rates, and positive market reception. The project demonstrated the value of human-centered design in product development.
                </p>
              </div>
            </div>

            {/* Sidebar Info */}
            <div>
              <div className="bg-card border border-border rounded-lg p-6 sticky top-32">
                <h3 className="font-semibold text-foreground mb-4">Project Details</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Category</p>
                    <p className="font-semibold text-primary">{project.category}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Role</p>
                    <p className="font-semibold text-foreground">UI/UX Designer</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                    <p className="font-semibold text-foreground">2026</p>
                  </div>

                  {project.websiteLink && (
                    <div className="pt-4 border-t border-border mt-6">
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors uppercase tracking-widest text-xs"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}

                  {project.figmaLink && (
                    <div className="pt-2">
                      <a
                        href={project.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white font-bold rounded-full hover:bg-zinc-800 transition-colors uppercase tracking-widest text-xs border border-white/5"
                      >
                        View Case Study
                      </a>
                    </div>
                  )}

                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Skills Applied</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">User Research</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Design</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 md:py-32 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-12">More Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map(proj => (
                <a key={proj.id} href={proj.figmaLink} target="_blank" rel="noopener noreferrer">
                  <div className="group bg-background rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-primary text-sm font-semibold mb-2">{proj.category}</p>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

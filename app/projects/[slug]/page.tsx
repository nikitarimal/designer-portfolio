'use client'

import { projects } from '@/data/projects'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Figma, Code, Calendar, User } from 'lucide-react'
import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'
import React from 'react'

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  // NOTE: params is async in Next.js 15+, but let's assume it's sync for now or use React.use()
  // Since this is a client component, we might need to handle it.
  const resolvedParams = React.use(params as any) as { slug: string };
  const project = projects.find(p => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 2)

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Section - Immersive Full Width */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center brightness-75"
            priority
          />
        </motion.div>
        
        {/* Gradients for depth and readability */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium uppercase tracking-wider">Back to Showcase</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
                {project.title}
              </h1>

               <div className="flex flex-wrap gap-4 mt-12">
                {project.websiteLink && (
                  <a 
                    href={project.websiteLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-xl shadow-primary/20 group"
                  >
                    View Website 
                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
                {project.caseStudyLink && (
                  <a 
                    href={project.caseStudyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-border bg-card/50 backdrop-blur-sm px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-card hover:scale-105 transition-all shadow-xl group"
                  >
                    View Case Study 
                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* //IMPORTANT: DO NOT REMOVE THIS */}
      {/* Project Meta Info Bar */}
      {/* <section className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-[64px] z-40 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 flex flex-nowrap items-center justify-between gap-8 md:gap-12 min-w-max md:min-w-0">
          <div className="flex items-center gap-3">
            <User className="text-primary" size={20} />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Role</p>
              <p className="text-sm font-medium">{project.role || "Designer"}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Calendar className="text-primary" size={20} />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Timeline</p>
              <p className="text-sm font-medium">{project.timeline || project.year}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Code className="text-primary" size={20} />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Tech</p>
              <p className="text-sm font-medium">{project.techStack?.join(", ") || "Design"}</p>
            </div>
          </div>

          <div className="flex gap-4">
            {project.websiteLink && (
              <a 
                href={project.websiteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Launch <ExternalLink size={14} />
              </a>
            )}
            {project.figmaLink && (
              <a 
                href={project.figmaLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-card transition-colors"
              >
                UI Case <Figma size={14} />
              </a>
            )}
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Objective & Overview */}
          <div className="grid lg:grid-cols-12 gap-16 mb-32 items-baseline">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tighter leading-none">
                Project <br /><span className="text-primary">Objective</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                {project.objective || project.description}
              </p>

            </div>
          </div>

          {/* Process Image Break */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video w-full rounded-xl overflow-hidden mb-32 shadow-2xl border border-white/5"
          >
            <Image
              src={project.image}
              alt="Process Image"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Challenges & Research */}
          <div className="grid lg:grid-cols-12 gap-16 mb-32 items-baseline">
            <div className="lg:col-span-5 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tighter leading-none lg:text-right">
                Challenges <br /><span className="text-primary">& Research</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:order-1">
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed whitespace-pre-wrap">
                {project.challengesAndResearch || "Pending research details..."}
              </p>
            </div>
          </div>

          {/* Solutions & Impact */}
          <div className="grid lg:grid-cols-12 gap-16 mb-32 items-baseline">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tighter leading-none">
                Solutions <br /><span className="text-primary">& Impact</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed whitespace-pre-wrap">
                {project.solutionsAndImpact || "Pending impact data..."}
              </p>
            </div>
          </div>

          {/* Visual Showcase - Immersive Gallery */}
          {project.moreImages && project.moreImages.length > 0 && (
            <div className="mt-40 space-y-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-10 gap-4">
                <div>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
                    Visual <br /><span className="text-primary">Showcase</span>
                  </h3>
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.4em] font-bold">Project gallery</p>
                </div>
                <div className="text-right hidden md:block">
                  <span className="text-6xl font-black text-white/5 leading-none tabular-nums">
                    {project.moreImages.length.toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              <div className="space-y-12 md:space-y-20">
                {project.moreImages.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative aspect-video w-full rounded-xl overflow-hidden group shadow-2xl border border-white/5"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} detail ${idx + 1}`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                    />
                    
                    {/* Subtle number */}
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white/20 font-black text-2xl tracking-tighter">
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Projects - Modern Grid */}
      {relatedProjects.length > 0 && (
        <section className="py-32 bg-card/50 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-end justify-between mb-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Explore <br /><span className="text-primary">More Works</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {relatedProjects.map(proj => (
                <Link key={proj.id} href={`/projects/${proj.slug}`}>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-3xl bg-background border border-border"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                        {proj.category}
                      </span>
                      <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

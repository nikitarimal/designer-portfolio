'use client'

import { projects } from '@/data/projects'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
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

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/#projects" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mb-8">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{project.description}</p>
        </div>
      </section>

      {/* Main Image */}
      <section className="relative h-96 md:h-screen">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
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
                    <p className="font-semibold text-foreground">6 Months</p>
                  </div>

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
                <Link key={proj.id} href={`/projects/${proj.slug}`}>
                  <div className="group bg-background rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-primary text-sm font-semibold mb-2">{proj.category}</p>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                  </div>
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

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ChevronDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import SectionHeader from '@/components/SectionHeader'
import LimeRule from '@/components/LimeRule'
import Footer from '@/components/Footer'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}

const PROJECTS = [
  {
    number: '01',
    name: 'KAIROS',
    outcome:
      'Designing the trust UI for a 5-agent autonomous trading intelligence system.',
    tags: ['Product Design', 'AI Systems'],
    status: 'In Progress',
    rightBg: 'bg-kairos-light',
    accent: 'text-kairos-accent',
    accentBorder: 'border-kairos-accent',
    accentBg: 'bg-kairos-accent',
    href: '/work/kairos',
    placeholder: 'Kairos Dashboard',
    image: '/images/Kairos_Land.jpeg',
  },
  {
    number: '02',
    name: 'CODEBASE GUIDE',
    outcome:
      'A RAG platform that cuts codebase onboarding from weeks to hours. Google shipped the same idea weeks later.',
    tags: ['Product Design', 'HackED 2026'],
    status: null,
    rightBg: 'bg-codebase-light',
    accent: 'text-codebase-accent',
    accentBorder: 'border-codebase-accent',
    accentBg: 'bg-codebase-accent',
    href: '/work/codebase-guide',
    placeholder: 'Codebase Guide',
    image: '/images/Codebase-guide-land.jpeg',
  },
  {
    number: '03',
    name: 'SCHEDULING AGENT',
    outcome:
      'Cut academic schedule planning from 2 hours to under 2 minutes. Adopted by 50+ students.',
    tags: ['Product Design', 'Full Stack', '50+ Users'],
    status: null,
    rightBg: 'bg-scheduler-light',
    accent: 'text-scheduler-accent',
    accentBorder: 'border-scheduler-accent',
    accentBg: 'bg-scheduler-accent',
    href: '/work/scheduling-agent',
    placeholder: 'Scheduling Agent',
    image: '/images/omni_land.jpeg',
  },
]

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <AnimatedItem>
      <Link
        href={project.href}
        className="group block bg-card-bg border-2 border-offset-shadow rounded-xl overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        style={{
          boxShadow: '6px 6px 0px #0A0A0A',
          transition: 'all 200ms ease',
        }}
        onMouseEnter={(e) => {
          if (prefersReducedMotion) return
          ;(e.currentTarget as HTMLElement).style.boxShadow = '8px 8px 0px #0A0A0A'
          ;(e.currentTarget as HTMLElement).style.transform = 'translate(-2px, -2px)'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.boxShadow = '6px 6px 0px #0A0A0A'
          ;(e.currentTarget as HTMLElement).style.transform = 'translate(0, 0)'
        }}
      >
        <div className="p-10 md:p-14 flex flex-col items-center text-center">
            <div className="w-full">
              <span className="text-11 uppercase tracking-widest text-text-tertiary font-bold">
                {project.number}
              </span>
              <h3 className="text-[40px] md:text-[48px] font-extrabold text-text-primary uppercase tracking-tight mt-3 leading-tight">
                {project.name}
              </h3>
              <p className="text-18 text-text-secondary mt-5 leading-relaxed max-w-2xl mx-auto">
                {project.outcome}
              </p>
              <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-offset-shadow rounded-md px-3 py-1 text-12 font-bold bg-white"
                  >
                    {tag}
                  </span>
                ))}
                {project.status && (
                  <span className="bg-accent border border-offset-shadow rounded-md px-3 py-1 text-12 font-bold">
                    {project.status}
                  </span>
                )}
              </div>
            </div>
            <span
              className={`text-14 font-bold mt-8 flex items-center gap-1 ${project.accent}`}
            >
              View case study{' '}
              <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                →
              </span>
            </span>
        </div>
      </Link>
    </AnimatedItem>
  )
}

const EXPERIENCE = [
  {
    org: 'Autonomous Robotic Vehicle Project',
    role: 'Software Engineer',
    date: 'Dec 2025 – Present',
    bullets: [
      'Built a complete autonomous mission tree for RoboSub 2026 from scratch using py_trees and ROS2, with blackboard-based state persistence and a Selector/Retry pattern for continuous environment monitoring.',
      'Navigated a 20+ package undocumented ROS2 production codebase independently, integrating existing mission components and applying established blackboard communication patterns across the mission planner.',
      'Resolved Docker/ROS2 environment conflicts, CMake path errors, missing Python package declarations, and a missing shared library blocking Gazebo simulator plugins to restore full workspace build capability.',
    ],
    tags: ['ROS2', 'Python', 'Docker', 'Gazebo', 'RoboSub 2026'],
  },
  {
    org: 'University of Alberta',
    role: 'Computer Engineering, BSc Co-op',
    date: 'Sept 2024 – Present',
    bullets: [
      'AI specialization. Coursework in machine learning, discrete math, data structures, and embedded systems.',
      'Active on ARVP, the university\'s most technically demanding student engineering team.',
    ],
    tags: ['Computer Engineering', 'AI Specialization', 'Co-op Program'],
  },
]

const BUILDING_WITH = ['Python', 'FastAPI', 'React', 'LangGraph', 'PostgreSQL', 'OpenAI APIs']

const CURRENTLY = [
  'Building Kairos: 5-agent autonomous trading intelligence',
  'Software Engineer, ARVP · RoboSub 2026',
]

function LimeSquare() {
  return (
    <span
      className="w-2 h-2 bg-accent border border-offset-shadow rounded-sm mt-1.5 flex-shrink-0"
      aria-hidden="true"
    />
  )
}

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      {/* HERO */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-8 py-24 relative">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="relative w-36 h-36 mb-8">
            <Image
              src="/images/rishaan.jpeg"
              alt="Rishaan Kumar, Computer Engineering student and product designer"
              width={144}
              height={144}
              className="w-36 h-36 rounded-full object-cover object-top border-2 border-offset-shadow"
              style={{ boxShadow: '4px 4px 0px #0A0A0A' }}
              priority
            />
          </div>

          <p className="text-11 uppercase tracking-widest text-text-secondary font-medium mb-3">
            Product Designer · Computer Engineering Co-op
          </p>

          <h1 className="text-[72px] font-extrabold text-text-primary leading-[1.05] tracking-[-0.03em]">
            Hey, I&apos;m{' '}
            <span className="bg-accent px-2 rounded-md">Rishaan Kumar.</span>
          </h1>

          <p className="text-20 text-text-secondary leading-relaxed max-w-2xl mt-6">
            Here, you can check out what I am working on. I try my best to create like an
            entrepreneur.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a
              href="/#work"
              className="bg-accent border-2 border-offset-shadow text-text-primary font-bold rounded-lg px-8 py-3.5 min-h-[44px] flex items-center hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              style={{ boxShadow: '4px 4px 0px #0A0A0A' }}
            >
              See my work
            </a>
            <a
              href="/#contact"
              className="bg-white border-2 border-offset-shadow text-text-primary font-bold rounded-lg px-8 py-3.5 min-h-[44px] flex items-center hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              style={{ boxShadow: '4px 4px 0px #0A0A0A' }}
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {!prefersReducedMotion && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <ChevronDownIcon
              className="w-5 h-5 text-text-tertiary animate-bounce"
              aria-hidden="true"
            />
          </div>
        )}
      </section>

      {/* WORK */}
      <section
        id="work"
        aria-labelledby="work-heading"
        className="py-28 px-8 max-w-5xl mx-auto"
      >
        <AnimatedSection>
          <AnimatedItem>
            <SectionHeader id="work-heading" title="Selected Work" badge="3 projects" />
          </AnimatedItem>
          <div className="flex flex-col gap-8">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        aria-labelledby="exp-heading"
        className="py-28 px-8 max-w-5xl mx-auto"
      >
        <AnimatedSection>
          <AnimatedItem>
            <SectionHeader id="exp-heading" title="Experience" />
          </AnimatedItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCE.map((exp) => (
              <AnimatedItem key={exp.org}>
                <div
                  className="border-2 border-offset-shadow rounded-xl p-6 bg-card-bg h-full flex flex-col"
                  style={{ boxShadow: '6px 6px 0px #0A0A0A' }}
                >
                  <h3 className="text-16 font-extrabold uppercase tracking-tight">
                    {exp.org}
                  </h3>
                  <p className="text-13 text-text-secondary font-medium mt-1">
                    {exp.role} · {exp.date}
                  </p>
                  <LimeRule />
                  <ul className="flex flex-col gap-3 mt-2 flex-1" role="list">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <LimeSquare />
                        <span className="text-14 text-text-secondary leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-offset-shadow rounded-md px-3 py-1 text-12 font-bold bg-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="py-28 px-8 max-w-5xl mx-auto"
      >
        <AnimatedSection>
          <AnimatedItem>
            <SectionHeader id="about-heading" title="About" />
          </AnimatedItem>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-16 mt-12">
            <AnimatedItem className="flex flex-col gap-5">
              <p className="text-16 text-text-secondary leading-[1.7]">
                I&apos;m a second-year Computer Engineering Co-op student at the University of
                Alberta, specializing in AI. I build full-stack platforms, autonomous agent systems,
                and robotic navigation pipelines. I design them so people can actually use them.
              </p>
              <p className="text-16 text-text-secondary leading-[1.7]">
                I think like an entrepreneur. I find friction, figure out why it exists, and ship
                something that removes it. The scheduling agent started because I was frustrated
                with my own calendar. Codebase Guide started at a hackathon because onboarding to a
                new repo felt unnecessarily painful. Weeks after I shipped it, Google released an
                identical product.
              </p>
              <p className="text-16 text-text-secondary leading-[1.7]">
                I&apos;m applying to Blueprint because I want to build technology for people who
                need it most. Accessibility is the baseline, not a feature.
              </p>
              <LimeRule />
            </AnimatedItem>

            <AnimatedItem className="flex flex-col">
              <div>
                <p className="text-11 uppercase tracking-widest text-text-tertiary font-bold mb-4">
                  Building With
                </p>
                <div className="flex flex-wrap gap-2">
                  {BUILDING_WITH.map((item) => (
                    <span
                      key={item}
                      className="border-2 border-offset-shadow rounded-lg px-3 py-1.5 text-13 font-bold bg-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="text-11 uppercase tracking-widest text-text-tertiary font-bold mb-4">
                  Currently
                </p>
                <ul className="flex flex-col gap-3" role="list">
                  {CURRENTLY.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <LimeSquare />
                      <span className="text-14 text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedItem>
          </div>
        </AnimatedSection>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-28 px-8 bg-accent"
      >
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            id="contact-heading"
            className="text-48 font-extrabold text-text-primary tracking-tight leading-tight"
          >
            Let&apos;s build something.
          </h2>
          <p className="text-18 text-text-primary/70 mt-4">
            Open to product design roles, co-op positions, and collaborations that matter.
          </p>
          <div className="mt-8">
            <a
              href="mailto:rishaan1@ualberta.ca"
              className="inline-flex items-center gap-2 bg-text-primary text-white border-2 border-offset-shadow rounded-lg px-8 py-4 text-18 font-bold min-h-[44px] hover:bg-white hover:text-text-primary transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <EnvelopeIcon className="w-5 h-5" aria-hidden="true" />
              rishaan1@ualberta.ca
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/Instilite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rishaan's GitHub"
              className="text-text-primary hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rishaan-kumar-ualberta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rishaan's LinkedIn"
              className="text-text-primary hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}

'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import LimeRule from '@/components/LimeRule'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) {
    return <div className={`mt-10 ${className ?? ''}`}>{children}</div>
  }
  return (
    <motion.div
      className={`mt-10 ${className ?? ''}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

function Item({ children, className }: { children: React.ReactNode; className?: string }) {
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

function ContentCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`border-2 border-offset-shadow rounded-xl p-8 bg-card-bg ${className ?? ''}`}
      style={{ boxShadow: '6px 6px 0px #0A0A0A' }}
    >
      {children}
    </div>
  )
}

function CardHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-20 font-extrabold text-text-primary uppercase tracking-tight">
      {children}
    </h2>
  )
}

function MiniCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="border-2 border-offset-shadow rounded-xl p-6 bg-card-bg"
      style={{ boxShadow: '6px 6px 0px #0A0A0A' }}
    >
      <h3 className="text-14 font-extrabold text-text-primary uppercase tracking-tight">{title}</h3>
      <LimeRule />
      <p className="text-14 text-text-secondary leading-relaxed">{children}</p>
    </div>
  )
}

export default function SchedulingAgentPage() {
  return (
    <CaseStudyLayout>
      {/* Hero */}
      <Section>
        <Item>
          <div
            className="border-2 border-offset-shadow rounded-xl p-10 bg-scheduler-light mt-4"
            style={{ boxShadow: '6px 6px 0px #0A0A0A' }}
          >
            <h1 className="text-56 font-extrabold text-text-primary uppercase tracking-tight">
              SCHEDULING AGENT
            </h1>
            <p className="text-20 text-text-secondary mt-3">
              Multi-Agent LLM Platform · Full Stack · Personal Project
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Product Design', 'Full Stack', 'FastAPI', 'LangGraph', '50+ Users'].map((tag) => (
                <span
                  key={tag}
                  className="border border-offset-shadow rounded-md px-3 py-1 text-12 font-bold bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://github.com/Instilite/omni-vision-planner.git"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-offset-shadow rounded-lg px-5 py-2 text-14 font-bold min-h-[44px] bg-white flex items-center hover:bg-accent hover:border-accent transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                style={{ boxShadow: '3px 3px 0px #0A0A0A' }}
              >
                GitHub →
              </a>
            </div>
          </div>
        </Item>
      </Section>

      {/* Problem */}
      <Section>
        <Item>
          <ContentCard>
            <CardHeading>The Problem</CardHeading>
            <LimeRule />
            <p className="text-16 text-text-secondary leading-relaxed">
              Building an academic schedule at the start of each term takes two hours. A student
              downloads syllabi, reads through each one for deadlines and assessment weights, opens a
              calendar, and manually enters every event. The process is repetitive, error-prone, and
              happens every four months. The information is inside the syllabus PDFs. Extracting
              it requires human attention.
            </p>
          </ContentCard>
        </Item>
      </Section>

      {/* My Role */}
      <Section>
        <Item>
          <ContentCard>
            <CardHeading>My Role</CardHeading>
            <LimeRule />
            <p className="text-16 text-text-secondary leading-relaxed">
              Solo project. I built the full stack: FastAPI backend, PostgreSQL with Row Level
              Security on Supabase, Google OAuth 2.0, Google Calendar API integration, the
              multi-agent LLM pipeline, and the frontend. I also designed the full product: user
              flow, interface states, and the document ingestion UX.
            </p>
          </ContentCard>
        </Item>
      </Section>

      {/* How It Works */}
      <Section>
        <Item>
          <ContentCard>
            <CardHeading>How It Works</CardHeading>
            <LimeRule />
            <p className="text-16 text-text-secondary leading-relaxed">
              A student uploads their course syllabi. The Intelligent Document Processing stage
              extracts deadlines, assessment weights, and course constraints from unstructured PDF
              text. A controller agent orchestrates the schedule generation. An overseer agent
              validates the output for conflicts and completeness. The resulting schedule is pushed
              directly to the student&apos;s Google Calendar via OAuth-authenticated API calls. Total
              time from upload to calendar: under 2 minutes.
            </p>
            <div className="mt-6">
              <p className="text-11 uppercase tracking-widest font-bold text-text-tertiary mb-3">
                Architecture
              </p>
              <p className="text-16 text-text-secondary leading-relaxed">
                The backend runs on FastAPI with REST endpoints and JWT-based role access control.
                The database uses PostgreSQL with Supabase Row Level Security so each user can only
                access their own data. The multi-agent pipeline runs a controller and overseer
                architecture. The controller drives schedule generation. The overseer validates and
                corrects output before it reaches the calendar.
              </p>
            </div>
          </ContentCard>
        </Item>
      </Section>

      {/* Key Design Decisions */}
      <Section>
        <Item>
          <h2 className="text-20 font-extrabold text-text-primary uppercase tracking-tight mb-6">
            Key Design Decisions
          </h2>
        </Item>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Item>
            <MiniCard title="Minimal Input">
              The product was designed around one constraint: require as little from the user as
              possible. Upload a syllabus and get a calendar. No configuration screens, no manual
              entry, no intermediate steps. The friction the product removes is manual data entry.
              Adding friction back through a complicated UI defeats the purpose.
            </MiniCard>
          </Item>
          <Item>
            <MiniCard title="Multi-Agent as Single Entity">
              The controller and overseer architecture runs invisibly. The user never sees two
              agents. They see one product doing one thing. The design decision was to surface only
              the output: the generated schedule. The pipeline is hidden. Confidence comes from
              accuracy. Showing the machinery adds nothing.
            </MiniCard>
          </Item>
          <Item>
            <MiniCard title="OAuth Over Passwords">
              Google OAuth was chosen for authentication because the product needs Calendar API
              access anyway. Forcing a separate password would have added a friction point with no
              benefit. OAuth gives users a familiar, trusted login flow and grants Calendar
              permissions in the same step.
            </MiniCard>
          </Item>
        </div>
      </Section>

      {/* Photo placeholder */}
      <Section>
        <Item>
          <div className="mt-4 rounded-xl overflow-hidden border-2 border-offset-shadow" style={{ boxShadow: '6px 6px 0px #0A0A0A' }}>
            <Image src="/images/Omni_Land.jpeg" alt="Scheduling Agent dashboard screenshot" width={3002} height={1650} className="w-full h-auto" />
          </div>
          <div className="mt-6 rounded-xl overflow-hidden border-2 border-offset-shadow" style={{ boxShadow: '6px 6px 0px #0A0A0A' }}>
            <Image src="/images/omni2.jpeg" alt="Scheduling Agent schedule view screenshot" width={2938} height={1628} className="w-full h-auto" />
          </div>
          <div className="mt-6 rounded-xl overflow-hidden border-2 border-offset-shadow" style={{ boxShadow: '6px 6px 0px #0A0A0A' }}>
            <Image src="/images/Omni3.jpeg" alt="Scheduling Agent upload flow screenshot" width={2946} height={1558} className="w-full h-auto" />
          </div>
        </Item>
      </Section>

      {/* Outcome */}
      <Section>
        <Item>
          <ContentCard>
            <CardHeading>Outcome</CardHeading>
            <LimeRule />
            <p className="text-16 text-text-secondary leading-relaxed">
              Deployed and used by 50+ students. Schedule planning time reduced from 2 hours to
              under 2 minutes. A 98% reduction. The platform handles the full academic document
              pipeline from raw syllabus PDF to populated Google Calendar without manual
              intervention.
            </p>
          </ContentCard>
        </Item>
      </Section>

      {/* Reflection */}
      <Section>
        <Item>
          <ContentCard>
            <CardHeading>Reflection</CardHeading>
            <LimeRule />
            <p className="text-16 text-text-secondary leading-relaxed">
              Document ingestion was the hardest part. Syllabi are inconsistently formatted,
              inconsistently structured, and sometimes scanned images. The IDP stage required
              significant prompt engineering to handle edge cases reliably. If I rebuilt this, I
              would invest more time in the ingestion validation layer before expanding the agent
              pipeline.
            </p>
          </ContentCard>
        </Item>
      </Section>
    </CaseStudyLayout>
  )
}

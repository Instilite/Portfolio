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

export default function CodebaseGuidePage() {
  return (
    <CaseStudyLayout>
      {/* Hero */}
      <Section>
        <Item>
          <div
            className="border-2 border-offset-shadow rounded-xl p-10 bg-codebase-light mt-4"
            style={{ boxShadow: '6px 6px 0px #0A0A0A' }}
          >
            <h1 className="text-56 font-extrabold text-text-primary uppercase tracking-tight">
              CODEBASE GUIDE
            </h1>
            <p className="text-20 text-text-secondary mt-3">
              RAG-Powered Codebase Intelligence · HackED 2026
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Product Design', 'RAG', 'Hackathon', 'HackED 2026'].map((tag) => (
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
                href="https://github.com/Instilite/AI_CodeBase_Guide.git"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-offset-shadow rounded-lg px-5 py-2 text-14 font-bold min-h-[44px] bg-white flex items-center hover:bg-accent hover:border-accent transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                style={{ boxShadow: '3px 3px 0px #0A0A0A' }}
              >
                GitHub →
              </a>
              <a
                href="https://devpost.com/software/codebase-analyzers_codebase-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-offset-shadow rounded-lg px-5 py-2 text-14 font-bold min-h-[44px] bg-white flex items-center hover:bg-accent hover:border-accent transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                style={{ boxShadow: '3px 3px 0px #0A0A0A' }}
              >
                Devpost →
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
              Onboarding to a new codebase takes days. A developer joins a team, opens the repo, and
              faces tens of thousands of lines of undocumented code with no clear entry point. They
              read files, search for function names, and ask teammates questions that interrupt their
              work. The information exists inside the code. The problem is retrieval. No tool let a
              developer ask a question in plain English and get a grounded answer with file
              citations.
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
              Built at HackED 2026 in 24 hours. I designed and built the full ingestion-to-retrieval
              pipeline: ZIP validation, line-based chunking, OpenAI embedding generation, ChromaDB
              vector storage, and the hybrid impact analysis engine. I also designed the query
              interface, the citation surface, and the risk scoring UI.
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
              A developer uploads a codebase as a ZIP file. The system validates it, chunks it by
              line boundaries, generates OpenAI embeddings for each chunk, and stores them in
              ChromaDB. When a developer asks a question, the system runs hybrid retrieval: semantic
              vector search for conceptual queries and regex word-boundary grep for exact symbol
              lookups. Answers include file citations and line numbers. Response times average 3 to
              4 seconds on full codebases.
            </p>
            <div className="mt-6">
              <p className="text-11 uppercase tracking-widest font-bold text-text-tertiary mb-3">
                Impact Analysis
              </p>
              <p className="text-16 text-text-secondary leading-relaxed">
                Beyond Q&amp;A, Codebase Guide includes a function-level impact analyzer. A developer
                inputs a function name. The system runs both grep and semantic search across the
                indexed codebase, computes a change-impact risk score (Low, Medium, or High), and
                surfaces every file that references the function with match counts and line numbers.
                A risky refactor becomes a visible, auditable decision.
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
            <MiniCard title="Citation Surface">
              Every answer references the exact files and line ranges it was retrieved from.
              Citations are visible inline as labeled badges. A developer can trace any claim back
              to the source code. The most important design decision: grounded answers with
              traceable sources, never generated summaries.
            </MiniCard>
          </Item>
          <Item>
            <MiniCard title="Hybrid Retrieval">
              Pure vector search misses exact symbol matches. Pure grep misses conceptual queries.
              The hybrid engine runs both and merges results. The UI surfaces the retrieval method
              (grep vs. vector) on each evidence chunk so developers can understand why a result was
              included.
            </MiniCard>
          </Item>
          <Item>
            <MiniCard title="Risk Scoring">
              Change-impact risk surfaces as Low, Medium, or High. Never a bare number. Each level
              uses color, a text label, and an icon. The risk card includes a plain-language
              explanation of why the function is high-risk.
            </MiniCard>
          </Item>
        </div>
      </Section>

      {/* Photo placeholder */}
      <Section>
        <Item>
          <div className="mt-4 rounded-xl overflow-hidden border-2 border-offset-shadow" style={{ boxShadow: '6px 6px 0px #0A0A0A' }}>
            <Image
              src="/images/Codebase-guide-land.jpeg"
              alt="Codebase Guide dashboard screenshot"
              width={2994}
              height={1694}
              className="w-full h-auto"
            />
          </div>
          <div className="mt-6 rounded-xl overflow-hidden border-2 border-offset-shadow" style={{ boxShadow: '6px 6px 0px #0A0A0A' }}>
            <Image
              src="/images/codebase2.jpeg"
              alt="Codebase Guide impact analysis screenshot"
              width={3018}
              height={1700}
              className="w-full h-auto"
            />
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
              Built and shipped in 24 hours at HackED 2026. The platform reduces codebase onboarding
              from weeks to 1 to 2 days for developers querying unfamiliar repos. Weeks after
              Codebase Guide was built, Google released Code Wiki. Same core mechanic: AI-powered
              natural language querying of a codebase with grounded citations. The validation was
              independent and unsolicited.
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
              The trust interface was the hardest design problem. Developers are skeptical of AI
              answers by default. Every citation, every line number, every confidence score exists
              to earn that trust incrementally. Google shipping the same idea independently
              confirmed the problem exists.
            </p>
          </ContentCard>
        </Item>
      </Section>
    </CaseStudyLayout>
  )
}

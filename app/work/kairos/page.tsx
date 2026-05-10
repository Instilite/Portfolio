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

function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
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

function ContentCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
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

function MiniCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      className="border-2 border-offset-shadow rounded-xl p-6 bg-card-bg"
      style={{ boxShadow: '6px 6px 0px #0A0A0A' }}
    >
      <h3 className="text-14 font-extrabold text-text-primary uppercase tracking-tight">
        {title}
      </h3>
      <LimeRule />
      <p className="text-14 text-text-secondary leading-relaxed">{children}</p>
    </div>
  )
}

export default function KairosPage() {
  return (
    <CaseStudyLayout>
      {/* Hero */}
      <Section>
        <Item>
          <div
            className="border-2 border-offset-shadow rounded-xl p-10 bg-kairos-light mt-4"
            style={{ boxShadow: '6px 6px 0px #0A0A0A' }}
          >
            <h1 className="text-56 font-extrabold text-text-primary uppercase tracking-tight">
              KAIROS
            </h1>
            <p className="text-20 text-text-secondary mt-3">
              Autonomous Trading Intelligence · 5-Agent LangGraph System
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Product Design', 'AI Systems', 'LangGraph'].map((tag) => (
                <span
                  key={tag}
                  className="border border-offset-shadow rounded-md px-3 py-1 text-12 font-bold bg-white"
                >
                  {tag}
                </span>
              ))}
              <span className="bg-accent border border-offset-shadow rounded-md px-3 py-1 text-12 font-bold">
                In Progress
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              {/* [YOUR_KAIROS_GITHUB_URL] — add when repo is public */}
              <button
                disabled
                aria-disabled="true"
                className="border-2 border-offset-shadow rounded-lg px-5 py-2 text-14 font-bold min-h-[44px] bg-white opacity-40 cursor-not-allowed"
                style={{ boxShadow: '3px 3px 0px #0A0A0A' }}
              >
                GitHub (coming soon)
              </button>
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
              Autonomous trading systems make decisions faster than humans can review them. The
              design challenge is legibility. When five AI agents coordinate to analyze markets,
              generate signals, assess risk, and execute trades, a human operator needs to know what
              each agent is doing, why it did it, how confident it is, and when to intervene. No
              existing trading UI was designed for this. Most surfaces show outputs. Kairos shows
              reasoning.
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
              Solo project. I own the full system: agent architecture, LangGraph orchestration, LLM
              Ops cost tracking, observability pipeline, and the UI design layer. Kairos is a live
              build. The design decisions documented here are active, applied to running code.
            </p>
          </ContentCard>
        </Item>
      </Section>

      {/* Architecture */}
      <Section>
        <Item>
          <ContentCard>
            <CardHeading>The Architecture</CardHeading>
            <LimeRule />
            <p className="text-16 text-text-secondary leading-relaxed">
              Kairos runs five specialized LangGraph agents in a coordinated pipeline. The Market
              Analyst scans multiple tickers across timeframes for momentum signals. The Signal
              Generator structures trade entries from analyst output. The Risk Manager validates
              position sizing, drawdown limits, and exposure thresholds. The Execution Agent routes
              approved signals to the broker API. The Overseer coordinates all four, detects
              conflicts, and holds a circuit-breaker that halts the system when session drawdown
              exceeds limits. Every agent decision is logged with a confidence score, a timestamp,
              and a cost in USD.
            </p>
            <p className="text-16 text-text-secondary leading-relaxed mt-6">
              The design constraint this creates is significant. Five agents running asynchronously
              produce a continuous stream of decisions. The UI must surface what is happening right
              now, what just happened, and what the system is planning. Surfacing raw log data
              defeats that purpose.
            </p>
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
            <MiniCard title="Agent Status Surface">
              Each agent card shows current status (ACTIVE, THINKING, IDLE), its last action in
              plain language, and a confidence score. Status uses color and a text label. Color
              alone is insufficient. The THINKING state shows a pulsing indicator to communicate
              that a process is running.
            </MiniCard>
          </Item>
          <Item>
            <MiniCard title="Reasoning Chain">
              When a signal is generated, the full reasoning chain from each agent is preserved and
              surfaced in the Signal Detail view. A reviewer can trace exactly which market
              conditions triggered the analyst, how the generator structured the entry, what the
              risk manager approved or rejected, and how the overseer resolved any conflicts.
            </MiniCard>
          </Item>
          <Item>
            <MiniCard title="Cost Transparency">
              Every agent action has a USD cost attached. The dashboard surfaces per-signal cost and
              cumulative session cost. A deliberate design decision: it creates accountability and
              makes the LLM Ops layer visible to the operator rather than buried in backend logs.
            </MiniCard>
          </Item>
        </div>
      </Section>

      {/* Photo placeholder */}
      <Section>
        <Item>
          <div className="mt-4 rounded-xl overflow-hidden border-2 border-offset-shadow" style={{ boxShadow: '6px 6px 0px #0A0A0A' }}>
            <Image
              src="/images/Kairos_Land.jpeg"
              alt="Kairos dashboard screenshot"
              width={2978}
              height={1692}
              className="w-full h-auto"
            />
          </div>
        </Item>
      </Section>

      {/* Outcome */}
      <Section>
        <Item>
          <ContentCard>
            <CardHeading>Where It Is Now</CardHeading>
            <LimeRule />
            <p className="text-16 text-text-secondary leading-relaxed">
              Kairos is in active development. The 5-agent LangGraph pipeline is built and running.
              The observability layer tracks per-agent cost, confidence scores, and decision logs in
              real time. The UI design is in progress. The dashboard and signal detail views shown
              in this case study represent the current design direction. A 6-week live run targeting
              a 61% win rate across 1,200+ simulations is planned.
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
              Designing for autonomous AI surfaces a problem most product designers have not had to
              solve yet: how do you build trust in a system that acts without asking? The answer is
              transparency. Every design decision in Kairos attempts to make the system's reasoning
              legible to the operator.
            </p>
          </ContentCard>
        </Item>
      </Section>
    </CaseStudyLayout>
  )
}

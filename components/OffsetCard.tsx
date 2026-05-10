'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface OffsetCardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  as?: 'article' | 'div' | 'section'
  animate?: boolean
  delay?: number
}

export default function OffsetCard({
  children,
  className = '',
  style,
  as: Tag = 'div',
  animate = true,
  delay = 0,
}: OffsetCardProps) {
  const prefersReducedMotion = useReducedMotion()

  if (!animate || prefersReducedMotion) {
    return (
      <Tag
        className={`bg-card-bg border-2 border-offset-shadow rounded-xl card-shadow ${className}`}
        style={style}
      >
        {children}
      </Tag>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
      className={`bg-card-bg border-2 border-offset-shadow rounded-xl card-shadow ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  )
}

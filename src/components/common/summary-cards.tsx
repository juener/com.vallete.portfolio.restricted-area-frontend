import { HTMLAttributes, ReactNode } from 'react'

interface SummaryCardsProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function SummaryCards({ children, ...props }: SummaryCardsProps) {
  return (
    <section
      className="grid grid-cols-1 flex-row gap-3 md:grid-cols-2 lg:grid-cols-4"
      {...props}
    >
      {children}
    </section>
  )
}

import type { ComponentType } from 'react'
import {
  Calculator, Brain, Briefcase, FlaskConical, CircuitBoard,
  LineChart, Sigma, Pi, Atom, BookOpenText
} from 'lucide-react'

export const subjectIcon: Record<string, ComponentType<any>> = {
  accounting: Calculator,
  biology: Brain,
  'business-studies': Briefcase,
  chemistry: FlaskConical,
  'computer-science': CircuitBoard,
  economics: LineChart,
  'further-mathematics': Sigma,
  mathematics: Pi,
  physics: Atom,
  psychology: BookOpenText
}

export const subjectPalette: Record<string, string> = {
  accounting: 'from-yellow-100 to-yellow-50',
  biology: 'from-emerald-100 to-emerald-50',
  'business-studies': 'from-rose-100 to-rose-50',
  chemistry: 'from-teal-100 to-teal-50',
  'computer-science': 'from-indigo-100 to-indigo-50',
  economics: 'from-amber-100 to-amber-50',
  'further-mathematics': 'from-violet-100 to-violet-50',
  mathematics: 'from-sky-100 to-sky-50',
  physics: 'from-blue-100 to-blue-50',
  psychology: 'from-fuchsia-100 to-fuchsia-50'
}

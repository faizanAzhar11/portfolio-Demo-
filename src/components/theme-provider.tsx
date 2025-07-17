'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
  attribute: string
  defaultTheme: string
  enableSystem: boolean
  disableTransitionOnChange: boolean
}

export function ThemeProvider({
  children,
  attribute,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div suppressHydrationWarning>
      {children}
    </div>
  )
}

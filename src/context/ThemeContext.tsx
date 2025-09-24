import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

type ThemeState = {
  primaryColor: string
  secondaryColor: string
  cardBackgroundColor: string
  textColor: string
  bodyFont: string
  headerFont: string
  buttonTextColor: string
}

type ThemeContextValue = ThemeState & {
  setPrimaryColor: (v: string) => void
  setSecondaryColor: (v: string) => void
  setCardBackgroundColor: (v: string) => void
  setTextColor: (v: string) => void
  setBodyFont: (v: string) => void
  setHeaderFont: (v: string) => void
  setButtonTextColor: (v: string) => void
  resetTheme: () => void
}

const THEME_STORAGE_KEY = 'app_theme'

export const defaultTheme: ThemeState = {
  primaryColor: '#ff0000',
  secondaryColor: '#00ffcc',
  cardBackgroundColor: '#1a1a1a',
  textColor: '#ffffff',
  bodyFont: 'Inter, sans-serif',
  headerFont: 'Poppins, sans-serif',
  buttonTextColor: '#ffffff',
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function applyThemeToCssVariables(theme: ThemeState) {
  const root = document.documentElement
  root.style.setProperty('--color-primary', theme.primaryColor)
  root.style.setProperty('--color-secondary', theme.secondaryColor)
  root.style.setProperty('--color-cardBg', theme.cardBackgroundColor)
  root.style.setProperty('--color-text', theme.textColor)
  root.style.setProperty('--font-body', theme.bodyFont)
  root.style.setProperty('--font-header', theme.headerFont)
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeState>(() => {
    try {
      const raw = localStorage.getItem(THEME_STORAGE_KEY)
      if (raw) return { ...defaultTheme, ...JSON.parse(raw) }
    } catch {}
    return defaultTheme
  })

  useEffect(() => {
    applyThemeToCssVariables(theme)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme))
    } catch {}
  }, [theme])

  const value = useMemo<ThemeContextValue>(() => ({
    ...theme,
    setPrimaryColor: (v) => setTheme((t) => ({ ...t, primaryColor: v })),
    setSecondaryColor: (v) => setTheme((t) => ({ ...t, secondaryColor: v })),
    setCardBackgroundColor: (v) => setTheme((t) => ({ ...t, cardBackgroundColor: v })),
    setTextColor: (v) => setTheme((t) => ({ ...t, textColor: v })),
    setBodyFont: (v) => setTheme((t) => ({ ...t, bodyFont: v })),
    setHeaderFont: (v) => setTheme((t) => ({ ...t, headerFont: v })),
    setButtonTextColor: (v) => setTheme((t) => ({ ...t, buttonTextColor: v })),
    resetTheme: () => {
      // Clear theme storage
      try {
        localStorage.removeItem(THEME_STORAGE_KEY)
      } catch {}
      // Clear per-card settings
      try {
        const keysToRemove: string[] = []
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i)
          if (k && (k.startsWith('card_settings_') || k.startsWith('card-'))) {
            keysToRemove.push(k)
          }
        }
        keysToRemove.forEach((k) => localStorage.removeItem(k))
      } catch {}
      // Apply default theme and persist
      setTheme(defaultTheme)
    },
  }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

export const AVAILABLE_FONTS: string[] = [
  'Segoe UI, sans-serif',
  'Inter, sans-serif',
  'Roboto, sans-serif',
  'Montserrat, sans-serif',
  'Nunito, sans-serif',
  'Poppins, sans-serif',
  'Open Sans, sans-serif',
  'Source Sans Pro, sans-serif',
  'Exo 2, sans-serif',
  'Orbitron, sans-serif',
  'Oxanium, sans-serif',
  'Rajdhani, sans-serif',
  'Raleway, sans-serif',
  'Kallisto, sans-serif',
  'Prototype, sans-serif',
]



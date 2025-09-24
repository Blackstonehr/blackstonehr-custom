import React, { useEffect, useMemo, useState } from 'react'
import { defaultTheme } from '../constants/themeDefaults'
import { ThemeContext, type ThemeState, type ThemeContextValue } from './ThemeContext.shared'

const THEME_STORAGE_KEY = 'app_theme'

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
    } catch { /* no-op */ }
    return defaultTheme
  })

  useEffect(() => {
    applyThemeToCssVariables(theme)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme))
    } catch { /* no-op */ }
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
      try { localStorage.removeItem(THEME_STORAGE_KEY) } catch { /* no-op */ }
      try {
        const keys = Object.keys(localStorage)
        for (const k of keys) {
          if (k.startsWith('card-') || k.startsWith('card_settings_')) {
            localStorage.removeItem(k)
          }
        }
      } catch { /* no-op */ }
      setTheme(defaultTheme)
    },
  }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}



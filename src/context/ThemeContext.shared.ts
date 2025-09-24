import { createContext, useContext } from 'react'

export type ThemeState = {
  primaryColor: string
  secondaryColor: string
  cardBackgroundColor: string
  textColor: string
  bodyFont: string
  headerFont: string
  buttonTextColor: string
}

export type ThemeContextValue = ThemeState & {
  setPrimaryColor: (v: string) => void
  setSecondaryColor: (v: string) => void
  setCardBackgroundColor: (v: string) => void
  setTextColor: (v: string) => void
  setBodyFont: (v: string) => void
  setHeaderFont: (v: string) => void
  setButtonTextColor: (v: string) => void
  resetTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}



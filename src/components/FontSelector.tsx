import React, { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext.shared'
import { AVAILABLE_FONTS } from '../constants/themeDefaults'

export const FontSelector: React.FC = () => {
  const { bodyFont, headerFont, setBodyFont, setHeaderFont } = useTheme()

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--font-preview-body', bodyFont)
    root.style.setProperty('--font-preview-header', headerFont)
  }, [bodyFont, headerFont])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <label className="flex items-center gap-2">
          <span className="text-sm opacity-80">Body</span>
          <select
            value={bodyFont}
            onChange={(e) => setBodyFont(e.target.value)}
            className="bg-cardBg text-text border border-secondary rounded px-2 py-1"
          >
            {AVAILABLE_FONTS.map((f: string) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-sm opacity-80">Headers</span>
          <select
            value={headerFont}
            onChange={(e) => setHeaderFont(e.target.value)}
            className="bg-cardBg text-text border border-secondary rounded px-2 py-1"
          >
            {AVAILABLE_FONTS.map((f: string) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="flex gap-6 items-center">
        <p className="preview-body text-sm opacity-80">Body preview</p>
        <p className="preview-header text-sm opacity-80">Header preview</p>
      </div>
    </div>
  )
}



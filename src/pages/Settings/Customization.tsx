import React from 'react'
import { useTheme, AVAILABLE_FONTS } from '../../context/ThemeContext'
import FontPreview from '../../components/FontPreview'

const Customization: React.FC = () => {
  const {
    bodyFont,
    headerFont,
    setBodyFont,
    setHeaderFont,
    primaryColor,
    secondaryColor,
    setPrimaryColor,
    setSecondaryColor,
    resetTheme,
  } = useTheme()

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Customization</h1>

      <section className="space-y-4">
        <h2 className="font-semibold">Fonts</h2>

        <label className="block">Body Font</label>
        <select
          aria-label="Body font selector"
          value={bodyFont}
          onChange={(e) => setBodyFont(e.target.value)}
          className="p-2 bg-card text-text border border-secondary rounded mb-2 block"
        >
          {AVAILABLE_FONTS.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
        <FontPreview font={bodyFont} id="body" />

        <label className="block mt-6">Header Font</label>
        <select
          aria-label="Header font selector"
          value={headerFont}
          onChange={(e) => setHeaderFont(e.target.value)}
          className="p-2 bg-card text-text border border-secondary rounded mb-2 block"
        >
          {AVAILABLE_FONTS.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
        <FontPreview font={headerFont} id="header" />
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Theme Colors</h2>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <span>Primary</span>
            <input type="color" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
          </label>
          <label className="flex items-center gap-2">
            <span>Secondary</span>
            <input type="color" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
          </label>
        </div>
        <div>
          <button
            type="button"
            className="mt-4 px-3 py-2 rounded bg-[var(--color-primary)]"
            onClick={resetTheme}
          >
            Reset to Defaults
          </button>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Live Previews</h2>

        {/* Body + header previews */}
        <p className="preview-body mb-2">
          Body Preview: The quick brown fox jumps over the lazy dog
        </p>
        <p className="preview-header mb-4">
          Header Preview: The quick brown fox jumps over the lazy dog
        </p>

        {/* Generic previews */}
        <div className="space-y-2">
          <FontPreview font={bodyFont} id="body" />
          <FontPreview font={headerFont} id="header" />
          <FontPreview font="Orbitron" id="headline" />
          <FontPreview font="Montserrat" id="caption" />
          <FontPreview font="Raleway" />
        </div>
      </section>
    </div>
  )
}

export default Customization



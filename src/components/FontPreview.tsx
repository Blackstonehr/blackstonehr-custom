import React, { useEffect } from 'react'

interface FontPreviewProps {
  font: string
  id?: string
}

const FontPreview: React.FC<FontPreviewProps> = ({ font, id = 'default' }) => {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty(`--font-preview-${id}`, font)
    if (id === 'default') {
      root.style.setProperty(`--font-preview-default`, font)
    }
  }, [font, id])

  return (
    <p
      className="preview"
      style={{ fontFamily: `var(--font-preview-${id}, var(--font-body))` }}
    >
      {id} preview: The quick brown fox jumps over the lazy dog
    </p>
  )
}

export default FontPreview



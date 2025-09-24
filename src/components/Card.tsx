import React, { useEffect, useMemo, useState } from 'react'
import { ChromePicker } from 'react-color'
import { useTheme } from '../context/ThemeContext.shared'
import { Modal } from './Modal'
import FontPreview from './FontPreview'
import { AVAILABLE_FONTS } from '../constants/themeDefaults'
import { defaultCardSettings } from '../constants/defaultCardSettings'
import type { CardSettings } from '../constants/defaultCardSettings'

interface CardProps {
  title?: string
  id?: string
  columns?: number
  rows?: number
  bgColor?: string
  textColor?: string
  borderStyle?: 'rounded' | 'sharp'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  highlight?: 'high' | 'medium' | 'low'
  font?: string
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  title,
  id,
  columns,
  rows,
  bgColor,
  textColor,
  borderStyle,
  shadow,
  highlight,
  font,
  children
}) => {
  const { bodyFont } = useTheme()
  const [settings, setSettings] = useState<CardSettings>({
    ...defaultCardSettings,
    ...(columns !== undefined ? { columns } : {}),
    ...(rows !== undefined ? { rows } : {}),
    ...(bgColor ? { bgColor } : {}),
    ...(textColor ? { textColor } : {}),
    ...(borderStyle ? { borderStyle } : {}),
    ...(shadow ? { shadow } : {}),
    ...(highlight ? { highlight } : {}),
    ...(font ? { font } : {}),
  })
  const [showPicker, setShowPicker] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Persist to localStorage per-card by id/title with migration
  const storageKey = useMemo(() => {
    const keyId = id ?? title ?? 'default'
    return `card-${keyId}`
  }, [id, title])

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        const parsed = JSON.parse(saved)
        setSettings(prev => ({ ...prev, ...parsed }))
        return
      }
      if (title) {
        const oldKey = `card_settings_${title}`
        const rawOld = localStorage.getItem(oldKey)
        if (rawOld) {
          const parsedOld = JSON.parse(rawOld)
          setSettings(prev => ({ ...prev, ...parsedOld }))
          localStorage.setItem(storageKey, rawOld)
          localStorage.removeItem(oldKey)
        }
      }
    } catch { /* no-op */ }
  }, [storageKey, title])

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(settings))
    } catch { /* no-op */ }
  }, [settings, storageKey])

  const pulseClass =
    settings.highlight === 'high'
      ? 'animate-pulse ring-2 ring-red-500'
      : settings.highlight === 'medium'
      ? 'ring-1 ring-[var(--color-primary)]'
      : 'ring-1 ring-white/20'

  type CardStyleVars = React.CSSProperties & {
    '--card-bg'?: string
    '--card-text'?: string
    '--card-font'?: string
    '--card-columns'?: string | number
    '--card-rows'?: string | number
    '--card-radius'?: string
    '--card-shadow'?: string
  }

  const styleVars: CardStyleVars = {
    '--card-bg': settings.bgColor,
    '--card-text': settings.textColor,
    '--card-font': settings.font || bodyFont,
    '--card-columns': settings.columns,
    '--card-rows': settings.rows,
    '--card-radius': settings.borderStyle === 'rounded' ? '1rem' : '0',
    '--card-shadow':
      settings.shadow === 'none'
        ? 'none'
        : settings.shadow === 'sm'
        ? '0 1px 2px rgba(0,0,0,0.2)'
        : settings.shadow === 'md'
        ? '0 4px 6px rgba(0,0,0,0.3)'
        : '0 10px 15px rgba(0,0,0,0.5)'
  }

  return (
    <div className={`relative p-6 ${pulseClass} card`} style={styleVars}>
      {title && (
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold uppercase">{title}</h2>
          <div className="flex items-center gap-2">
            <button onClick={() => setShowPicker(!showPicker)} className="px-2 py-1 rounded hover:bg-white/10" aria-label="Quick color">🎨</button>
            <button onClick={() => setShowModal(true)} className="px-2 py-1 rounded hover:bg-white/10" aria-label="Customize card">⋮</button>
          </div>
        </div>
      )}

      {children}

      {showPicker && (
        <div className="absolute top-10 right-4 z-50">
          <ChromePicker
            color={settings.bgColor}
            onChange={c => setSettings((prev) => ({ ...prev, bgColor: c.hex }))}
          />
        </div>
      )}

      <Modal open={showModal} onClose={() => setShowModal(false)} title="Customize Card">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="col-span-2">
            <div className="mb-2">Background</div>
            <ChromePicker
              color={settings.bgColor}
              onChange={c => setSettings(prev => ({ ...prev, bgColor: c.hex }))}
            />
          </div>
          <label className="flex items-center gap-2">
            <span>Text</span>
            <input type="color" value={settings.textColor} onChange={(e) => setSettings((p) => ({ ...p, textColor: e.target.value }))} />
          </label>
          <label className="flex items-center gap-2">
            <span>Priority</span>
            <select value={settings.highlight} onChange={(e) => setSettings((p) => ({ ...p, highlight: e.target.value as CardSettings['highlight'] }))} className="bg-cardBg border border-secondary rounded px-1 py-0.5">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span>Border</span>
            <select value={settings.borderStyle} onChange={(e) => setSettings((p) => ({ ...p, borderStyle: e.target.value as CardSettings['borderStyle'] }))} className="bg-cardBg border border-secondary rounded px-1 py-0.5">
              <option value="rounded">Rounded</option>
              <option value="sharp">Sharp</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span>Shadow</span>
            <select value={settings.shadow} onChange={(e) => setSettings((p) => ({ ...p, shadow: e.target.value as CardSettings['shadow'] }))} className="bg-cardBg border border-secondary rounded px-1 py-0.5">
              <option value="none">None</option>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span>Cols</span>
            <input type="number" min={1} max={12} value={settings.columns} onChange={(e) => setSettings((p) => ({ ...p, columns: Number(e.target.value) }))} className="w-20 bg-cardBg border border-secondary rounded px-1 py-0.5" />
          </label>
          <label className="flex items-center gap-2">
            <span>Rows</span>
            <input type="number" min={1} max={12} value={settings.rows} onChange={(e) => setSettings((p) => ({ ...p, rows: Number(e.target.value) }))} className="w-20 bg-cardBg border border-secondary rounded px-1 py-0.5" />
          </label>
          <div className="col-span-2 grid grid-cols-2 gap-2 items-center">
            <label className="flex items-center gap-2">
              <span>Font</span>
              <select value={settings.font} onChange={(e) => setSettings((p) => ({ ...p, font: e.target.value }))} className="bg-cardBg border border-secondary rounded px-1 py-0.5">
                {AVAILABLE_FONTS.map((f: string) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </label>
            <FontPreview font={settings.font} id={`card-${title ?? 'untitled'}`} />
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button className="px-3 py-1 rounded bg-white/10" onClick={() => setShowModal(false)}>Close</button>
          <button
            className="px-3 py-1 rounded bg-gray-700 text-white"
            onClick={() => {
              try { localStorage.removeItem(storageKey) } catch { /* no-op */ }
              setSettings({ ...defaultCardSettings })
            }}
          >
            Reset Card
          </button>
        </div>
      </Modal>
    </div>
  )
}



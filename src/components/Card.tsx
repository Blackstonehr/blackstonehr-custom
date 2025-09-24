import React, { useEffect, useMemo, useState } from 'react'
import { ChromePicker } from 'react-color'
import { useTheme } from '../context/ThemeContext'
import { Modal } from './Modal'
import FontPreview from './FontPreview'
import { AVAILABLE_FONTS } from '../context/ThemeContext'

interface CardProps {
  title?: string
  bgColor?: string
  textColor?: string
  borderStyle?: 'rounded' | 'sharp'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  highlight?: 'high' | 'medium' | 'low'
  columns?: number
  rows?: number
  font?: string
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  bgColor = '#1a1a1a',
  textColor = '#ffffff',
  borderStyle = 'rounded',
  shadow = 'md',
  highlight = 'low',
  columns = 1,
  rows = 1,
  font = 'Inter'
}) => {
  const { bodyFont } = useTheme()
  const [settings, setSettings] = useState({
    bgColor,
    textColor,
    borderStyle,
    shadow,
    highlight,
    columns,
    rows,
    font
  })
  const [showPicker, setShowPicker] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Persist to localStorage per-card by title if present
  const storageKey = useMemo(() => (title ? `card_settings_${title}` : undefined), [title])
  useEffect(() => {
    if (!storageKey) return
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) {
        const parsed = JSON.parse(raw)
        setSettings((prev) => ({ ...prev, ...parsed }))
      }
    } catch { /* no-op */ }
  }, [storageKey])
  useEffect(() => {
    if (!storageKey) return
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
    <div
      className={`relative p-4 ${pulseClass} card`}
      style={styleVars}
    >
      {title && (
        <div className="flex justify-between items-center mb-2">
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
            onChange={c =>
              setSettings(prev => ({ ...prev, bgColor: c.hex }))
            }
          />
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <label className="flex items-center gap-2">
              <span>Text</span>
              <input
                type="color"
                value={settings.textColor}
                onChange={(e) => setSettings((p) => ({ ...p, textColor: e.target.value }))}
              />
            </label>
            <label className="flex items-center gap-2">
              <span>Border</span>
              <select
                value={settings.borderStyle}
                onChange={(e) => setSettings((p) => ({ ...p, borderStyle: e.target.value as 'rounded' | 'sharp' }))}
                className="bg-card border border-secondary rounded px-1 py-0.5"
              >
                <option value="rounded">Rounded</option>
                <option value="sharp">Sharp</option>
              </select>
            </label>
            <label className="flex items-center gap-2">
              <span>Shadow</span>
              <select
                value={settings.shadow}
                onChange={(e) => setSettings((p) => ({ ...p, shadow: e.target.value as 'none' | 'sm' | 'md' | 'lg' }))}
                className="bg-card border border-secondary rounded px-1 py-0.5"
              >
                <option value="none">None</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </label>
            <label className="flex items-center gap-2">
              <span>Priority</span>
              <select
                value={settings.highlight}
                onChange={(e) => setSettings((p) => ({ ...p, highlight: e.target.value as 'high' | 'medium' | 'low' }))}
                className="bg-card border border-secondary rounded px-1 py-0.5"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </label>
            <label className="flex items-center gap-2">
              <span>Cols</span>
              <input
                type="number"
                min={1}
                max={12}
                value={settings.columns}
                onChange={(e) => setSettings((p) => ({ ...p, columns: Number(e.target.value) }))}
                className="w-16 bg-card border border-secondary rounded px-1 py-0.5"
              />
            </label>
            <label className="flex items-center gap-2">
              <span>Rows</span>
              <input
                type="number"
                min={1}
                max={12}
                value={settings.rows}
                onChange={(e) => setSettings((p) => ({ ...p, rows: Number(e.target.value) }))}
                className="w-16 bg-card border border-secondary rounded px-1 py-0.5"
              />
            </label>
            <label className="flex items-center gap-2 col-span-2">
              <span>Font</span>
              <input
                type="text"
                value={settings.font}
                onChange={(e) => setSettings((p) => ({ ...p, font: e.target.value }))}
                placeholder={bodyFont}
                className="flex-1 bg-card border border-secondary rounded px-1 py-0.5"
              />
            </label>
            <button
              className="col-span-2 mt-1 px-2 py-1 rounded bg-[var(--color-primary)]"
              onClick={() => setShowPicker(false)}
            >
              Close
            </button>
          </div>
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
            <select value={settings.highlight} onChange={(e) => setSettings((p) => ({ ...p, highlight: e.target.value as 'high' | 'medium' | 'low' }))} className="bg-card border border-secondary rounded px-1 py-0.5">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span>Border</span>
            <select value={settings.borderStyle} onChange={(e) => setSettings((p) => ({ ...p, borderStyle: e.target.value as 'rounded' | 'sharp' }))} className="bg-card border border-secondary rounded px-1 py-0.5">
              <option value="rounded">Rounded</option>
              <option value="sharp">Sharp</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span>Shadow</span>
            <select value={settings.shadow} onChange={(e) => setSettings((p) => ({ ...p, shadow: e.target.value as 'none' | 'sm' | 'md' | 'lg' }))} className="bg-card border border-secondary rounded px-1 py-0.5">
              <option value="none">None</option>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span>Cols</span>
            <input type="number" min={1} max={12} value={settings.columns} onChange={(e) => setSettings((p) => ({ ...p, columns: Number(e.target.value) }))} className="w-20 bg-card border border-secondary rounded px-1 py-0.5" />
          </label>
          <label className="flex items-center gap-2">
            <span>Rows</span>
            <input type="number" min={1} max={12} value={settings.rows} onChange={(e) => setSettings((p) => ({ ...p, rows: Number(e.target.value) }))} className="w-20 bg-card border border-secondary rounded px-1 py-0.5" />
          </label>
          <div className="col-span-2 grid grid-cols-2 gap-2 items-center">
            <label className="flex items-center gap-2">
              <span>Font</span>
              <select
                aria-label="Card font selector"
                value={settings.font}
                onChange={(e) => setSettings((p) => ({ ...p, font: e.target.value }))}
                className="bg-card border border-secondary rounded px-1 py-0.5"
              >
                {AVAILABLE_FONTS.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </label>
            <FontPreview font={settings.font} id={`card-${title ?? 'untitled'}`} />
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button className="px-3 py-1 rounded bg-white/10" onClick={() => setShowModal(false)}>Close</button>
        </div>
      </Modal>
    </div>
  )
}



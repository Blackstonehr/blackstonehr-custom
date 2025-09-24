import React from 'react'

interface ButtonProps {
  label: string
  size?: 'sm' | 'md' | 'lg'
  shape?: 'pill' | 'rounded' | 'square'
  color?: string
  textColor?: string
  onClick?: () => void
  id?: string
}

export const Button: React.FC<ButtonProps> = ({
  label,
  size = 'md',
  shape = 'rounded',
  color = 'var(--color-primary)',
  textColor = 'var(--color-text)',
  onClick,
  id = 'default'
}) => {
  React.useEffect(() => {
    const root = document.documentElement
    root.style.setProperty(`--btn-bg-${id}`, color)
    root.style.setProperty(`--btn-text-${id}`, textColor)
  }, [color, textColor, id])

  const sizeClass =
    size === 'sm'
      ? 'px-2 py-1 text-sm'
      : size === 'lg'
      ? 'px-6 py-3 text-lg'
      : 'px-4 py-2 text-base'

  const shapeClass =
    shape === 'pill'
      ? 'rounded-full'
      : shape === 'square'
      ? 'rounded-none'
      : 'rounded-lg'

  return (
    <button
      onClick={onClick}
      className={`font-semibold ${sizeClass} ${shapeClass} button`}
      style={{
        backgroundColor: `var(--btn-bg-${id}, var(--color-primary))`,
        color: `var(--btn-text-${id}, var(--color-text))`
      }}
    >
      {label}
    </button>
  )
}



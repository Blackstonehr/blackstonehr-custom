export type CardSettings = {
  bgColor: string
  textColor: string
  borderStyle: 'rounded' | 'sharp'
  shadow: 'none' | 'sm' | 'md' | 'lg'
  highlight: 'high' | 'medium' | 'low'
  columns: number
  rows: number
  font: string
}

export const defaultCardSettings: CardSettings = {
  bgColor: '#1a1a1a',
  textColor: '#ffffff',
  borderStyle: 'rounded',
  shadow: 'md',
  highlight: 'low',
  columns: 1,
  rows: 1,
  font: 'Inter',
}



import React from 'react'
type Props = { left?: React.ReactNode; right?: React.ReactNode }
export default function FiltersTabs({ left, right }: Props = {}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">{left}</div>
      <div className="flex items-center gap-2">{right}</div>
    </div>
  )
}



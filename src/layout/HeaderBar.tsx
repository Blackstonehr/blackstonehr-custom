import React from 'react'
type Props = { title: string; cta?: React.ReactNode; right?: React.ReactNode }
export default function HeaderBar({ title, cta, right }: Props) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex items-center gap-2">
        {cta}
        {right}
      </div>
    </div>
  )
}



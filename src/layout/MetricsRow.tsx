import React from 'react'
export default function MetricsRow({ children }: { children?: React.ReactNode }) {
  return <div className="grid grid-cols-4 gap-4 mb-4">{children}</div>
}



import React from 'react'
export default function MetricsRow({ children }: { children?: React.ReactNode }) {
  return <div className="grid grid-cols-4 gap-6 mb-6">{children}</div>
}



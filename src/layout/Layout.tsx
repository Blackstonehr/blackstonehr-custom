import React from 'react'

export const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen bg-cardBg text-text w-[260px]">
      <div className="p-4 font-bold tracking-wider">Blackstone HR</div>
      {/* Nav items placeholder */}
    </aside>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cardBg text-text pl-[260px]">
      <Sidebar />
      <main className="p-6">{children}</main>
    </div>
  )
}



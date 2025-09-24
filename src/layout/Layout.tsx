import React from 'react'
import { FontSelector } from '../components/FontSelector'

export const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen bg-card text-text w-[260px]">
      <div className="p-4 font-bold tracking-wider">Blackstone HR</div>
      {/* Nav items placeholder */}
    </aside>
  )
}

export const HeaderBar: React.FC<{ title: string; cta?: React.ReactNode }> = ({ title, cta }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-secondary/40">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex items-center gap-4">
        <FontSelector />
        {cta}
      </div>
    </header>
  )
}

export const MetricsRow: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">{children}</section>
)

export const FiltersTabs: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <section className="px-6 pb-4 flex items-center gap-2 border-b border-secondary/30">{children}</section>
)

export const MainGrid: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <main className="p-6 grid gap-4 [grid-template-columns:repeat(12,minmax(0,1fr))]">{children}</main>
)

export const Layout: React.FC<{
  title: string
  headerCta?: React.ReactNode
  metrics?: React.ReactNode
  filters?: React.ReactNode
  children?: React.ReactNode
}> = ({ title, headerCta, metrics, filters, children }) => {
  return (
    <div className="min-h-screen bg-card text-text pl-[260px]">
      <Sidebar />
      <div>
        <HeaderBar title={title} cta={headerCta} />
        {metrics && <MetricsRow>{metrics}</MetricsRow>}
        {filters && <FiltersTabs>{filters}</FiltersTabs>}
        <MainGrid>{children}</MainGrid>
      </div>
    </div>
  )
}



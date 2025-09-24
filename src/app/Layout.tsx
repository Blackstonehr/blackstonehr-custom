import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const isActive = (to: string) => pathname === to
  const linkCls = (to: string) => `px-3 py-2 rounded flex items-center gap-2 ${isActive(to) ? 'bg-white/10' : 'hover:bg-white/10'}`

  return (
    <div className="grid grid-cols-[260px_1fr] min-h-screen bg-cardBg text-text">
      {/* Sidebar */}
      <nav className="h-screen bg-cardBg text-text p-4 border-r border-secondary/30">
        <div className="font-bold tracking-wider mb-4 text-sm uppercase opacity-80">Blackstone HR</div>
        <div className="flex flex-col gap-1 text-sm">
          <Link className={linkCls('/')} to="/">🏠 <span>Dashboard</span></Link>
          <Link className={linkCls('/sites')} to="/sites">🏗️ <span>Sites</span></Link>
          <Link className={linkCls('/employees')} to="/employees">👥 <span>Employees</span></Link>
          <Link className={linkCls('/compliance')} to="/compliance">✅ <span>Compliance</span></Link>
          <Link className={linkCls('/safety')} to="/safety">🛡️ <span>Safety</span></Link>
          <Link className={linkCls('/reports')} to="/reports">📊 <span>Reports</span></Link>
          <Link className={linkCls('/settings')} to="/settings">⚙️ <span>Settings</span></Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="p-8">
        <div className="max-w-[1400px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}



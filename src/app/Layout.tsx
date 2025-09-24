import { Link, Outlet, useLocation } from 'react-router-dom'
import HeaderBar from '../layout/HeaderBar'
import MetricsRow from '../layout/MetricsRow'
import FiltersTabs from '../layout/FiltersTabs'

function titleFromPath(pathname: string): string {
  if (pathname === '/') return 'Dashboard'
  const key = pathname.replace(/^\//, '')
  return key.charAt(0).toUpperCase() + key.slice(1)
}

export default function Layout() {
  const location = useLocation()
  const title = titleFromPath(location.pathname)

  return (
    <div className="grid grid-cols-[260px_1fr] min-h-screen bg-cardBg text-text">
      {/* Sidebar */}
      <nav className="h-screen bg-cardBg text-text p-4 space-y-3 border-r border-secondary/30">
        <div className="font-bold tracking-wider mb-2">Blackstone HR</div>
        <div className="flex flex-col gap-2">
          <Link to="/">Dashboard</Link>
          <Link to="/sites">Sites</Link>
          <Link to="/safety">Safety</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="p-6">
        <HeaderBar title={title} />
        <MetricsRow>{/* optional per-page metrics */}</MetricsRow>
        <FiltersTabs />
        <div className="grid grid-cols-4 gap-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}



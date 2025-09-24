import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="grid grid-cols-[260px_1fr] h-screen">
      {/* Sidebar */}
      <nav className="bg-cardBg text-text p-4 space-y-4 border-r border-secondary/30">
        <Link to="/">Dashboard</Link>
        <Link to="/sites">Sites</Link>
        <Link to="/foreman">Foreman</Link>
        <Link to="/safety">Safety</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      {/* Main content */}
      <main className="bg-cardBg p-6 overflow-y-auto text-text">
        <Outlet />
      </main>
    </div>
  )
}



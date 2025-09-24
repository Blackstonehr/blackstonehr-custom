import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from '../pages/Dashboard'
import Sites from '../pages/Sites'
import Foreman from '../pages/Foreman'
import Safety from '../pages/Safety'
import Reports from '../pages/Reports'
import Customization from '../pages/Settings/Customization'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/foreman" element={<Foreman />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Customization />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



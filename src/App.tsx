import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './app/Layout'
import Dashboard from './pages/Dashboard'
import Sites from './pages/Sites'
import Safety from './pages/Safety'
import Reports from './pages/Reports'
import Customization from './pages/Settings/Customization'
import Employees from './pages/Employees'
import Compliance from './pages/Compliance'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Customization />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

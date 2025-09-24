import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard'
import Sites from './pages/Sites'
import Safety from './pages/Safety'
import Reports from './pages/Reports'
import Customization from './pages/Settings/Customization'

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
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

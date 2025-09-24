import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

const monthlyData = [
  { month: 'Jan', revenue: 120, expenses: 80 },
  { month: 'Feb', revenue: 150, expenses: 95 },
  { month: 'Mar', revenue: 170, expenses: 105 },
  { month: 'Apr', revenue: 160, expenses: 110 },
  { month: 'May', revenue: 180, expenses: 120 },
  { month: 'Jun', revenue: 200, expenses: 130 },
]

const sites = [
  { name: 'Site A', progress: 78, budget: 450, spent: 390, efficiency: 92 },
  { name: 'Site B', progress: 64, budget: 520, spent: 480, efficiency: 88 },
  { name: 'Site C', progress: 85, budget: 610, spent: 570, efficiency: 94 },
  { name: 'Site D', progress: 51, budget: 300, spent: 260, efficiency: 87 },
  { name: 'Site E', progress: 73, budget: 420, spent: 350, efficiency: 90 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button label="New" />
      </div>
      <div className="grid gap-4 [grid-template-columns:repeat(12,minmax(0,1fr))]">
        <Card title="Headcount" columns={4} rows={1}>
          <div className="text-3xl font-bold">128</div>
          <div className="opacity-70">Total Employees</div>
        </Card>
        <Card title="Open Roles" columns={4} rows={1}>
          <div className="text-3xl font-bold">7</div>
          <div className="opacity-70">Hiring Now</div>
        </Card>
        <Card title="Attrition" columns={4} rows={1}>
          <div className="text-3xl font-bold">3.1%</div>
          <div className="opacity-70">Last 30 Days</div>
        </Card>
        <Card title="Recent Activity" columns={8} rows={3}>
          <div className="opacity-70">No recent items</div>
        </Card>
        <Card title="Approvals" columns={4} rows={3}>
          <div className="opacity-70">No pending approvals</div>
        </Card>
        <Card title="Monthly Performance" id="monthly-performance" columns={12} rows={4}>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#22c55e" />
              <Line type="monotone" dataKey="expenses" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card title="Site Performance Details" id="site-performance" columns={2} rows={4}>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400">
                <th>Site</th><th>Progress</th><th>Budget</th><th>Spent</th><th>Efficiency</th>
              </tr>
            </thead>
            <tbody>
              {sites.map(site => (
                <tr key={site.name} className="border-t border-gray-700">
                  <td>{site.name}</td>
                  <td>{site.progress}%</td>
                  <td>${site.budget}K</td>
                  <td>${site.spent}K</td>
                  <td>{site.efficiency}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}



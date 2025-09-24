import MetricCard from '../components/cards/MetricCard'
import { Card } from '../components/Card'

export default function Employees() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <MetricCard id="emp-total" title="Total Employees" value="--" change="--" />
        <MetricCard id="emp-new" title="New Hires" value="--" change="--" />
        <MetricCard id="emp-exits" title="Exits" value="--" change="--" />
        <MetricCard id="emp-openings" title="Open Roles" value="--" change="--" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card id="emp-trend" title="Headcount Trend" columns={2}>
          <div className="h-48 flex items-center justify-center text-sm text-gray-400">Chart Placeholder</div>
        </Card>
        <Card id="emp-by-site" title="Employees by Site" columns={2}>
          <div className="h-48 flex items-center justify-center text-sm text-gray-400">Bar Placeholder</div>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card id="emp-table" title="Employee Directory" columns={2}>
          <div className="h-48 flex items-center justify-center text-sm text-gray-400">Table Placeholder</div>
        </Card>
        <Card id="emp-attrition" title="Attrition Details" columns={2}>
          <div className="h-48 flex items-center justify-center text-sm text-gray-400">Table Placeholder</div>
        </Card>
      </div>
    </div>
  )
}



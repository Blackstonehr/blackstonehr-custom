import PageFrame from '../layout/PageFrame'
import MetricCard from '../components/cards/MetricCard'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

export default function Reports() {
  return (
    <PageFrame
      title="Reports & Analytics"
      cta={<Button label="Export Report" />}
      filtersLeft={
        <select aria-label="Time range" className="bg-cardBg text-text rounded px-2 py-1">
          <option>Last 30 Days</option>
          <option>This Month</option>
          <option>Last Month</option>
          <option>YTD</option>
        </select>
      }
      metrics={
        <>
          <MetricCard id="revenue" title="Revenue" value="--" change="--" />
          <MetricCard id="active-sites" title="Active Sites" value="--" change="--" />
          <MetricCard id="workers" title="Workers" value="--" change="--" />
          <MetricCard id="incidents" title="Incidents" value="--" change="--" />
        </>
      }
    >
      <Card id="monthly-performance" title="Monthly Performance" columns={2}>
        <div className="h-48 flex items-center justify-center text-sm text-gray-400">
          Chart Placeholder
        </div>
      </Card>
      <Card id="site-performance-details" title="Site Performance Details" columns={2}>
        <div className="h-48 flex items-center justify-center text-sm text-gray-400">
          Table Placeholder
        </div>
      </Card>
    </PageFrame>
  )
}

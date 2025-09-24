import MetricCard from '../components/cards/MetricCard'
import { Card } from '../components/Card'

export default function Compliance() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <MetricCard id="comp-audits" title="Open Audits" value="--" change="--" />
        <MetricCard id="comp-violations" title="Violations" value="--" change="--" />
        <MetricCard id="comp-training" title="Training Due" value="--" change="--" />
        <MetricCard id="comp-cert" title="Certs Expiring" value="--" change="--" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card id="comp-trend" title="Compliance Trend" columns={2}>
          <div className="h-48 flex items-center justify-center text-sm text-gray-400">Chart Placeholder</div>
        </Card>
        <Card id="comp-issues" title="Issues by Site" columns={2}>
          <div className="h-48 flex items-center justify-center text-sm text-gray-400">Bar Placeholder</div>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card id="comp-table" title="Compliance Log" columns={2}>
          <div className="h-48 flex items-center justify-center text-sm text-gray-400">Table Placeholder</div>
        </Card>
        <Card id="comp-actions" title="Required Actions" columns={2}>
          <div className="h-48 flex items-center justify-center text-sm text-gray-400">Table Placeholder</div>
        </Card>
      </div>
    </div>
  )
}



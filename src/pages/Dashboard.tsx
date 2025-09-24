import MetricCard from '../components/cards/MetricCard'
import KPITrendCard from '../components/cards/KPITrendCard'
import BarCard from '../components/cards/BarCard'
import DataTableCard from '../components/cards/DataTableCard'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Metrics row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <MetricCard id="revenue" title="Total Revenue" value="--" change="--" />
        <MetricCard id="expenses" title="Total Expenses" value="--" change="--" />
        <MetricCard id="net-profit" title="Net Profit" value="--" change="--" />
        <MetricCard id="profit-margin" title="Profit Margin" value="--" change="--" />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <KPITrendCard id="kpi-monthly" title="Monthly Performance" data={[]} />
        <BarCard id="kpi-site-perf" title="Site Performance" data={[]} />
      </div>

      {/* Tables row */}
      <div className="grid grid-cols-2 gap-4">
        <DataTableCard
          id="tbl-site"
          title="Site Performance Details"
          columns={[
            { key: 'site', label: 'Site', align: 'left' },
            { key: 'progress', label: 'Progress', align: 'right' },
            { key: 'budget', label: 'Budget', align: 'right' },
            { key: 'spent', label: 'Spent', align: 'right' },
            { key: 'efficiency', label: 'Efficiency', align: 'right' },
          ]}
          rows={[]}
        />
        <DataTableCard
          id="tbl-labor"
          title="Labor Performance Details"
          columns={[
            { key: 'category', label: 'Category', align: 'left' },
            { key: 'hours', label: 'Hours', align: 'right' },
            { key: 'cost', label: 'Cost', align: 'right' },
            { key: 'efficiency', label: 'Efficiency', align: 'right' },
          ]}
          rows={[]}
        />
      </div>
    </div>
  )
}

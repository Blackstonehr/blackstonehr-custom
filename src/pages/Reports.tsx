import PageFrame from '../layout/PageFrame'
import MetricCard from '../components/cards/MetricCard'
import KPITrendCard from '../components/cards/KPITrendCard'
import BarCard from '../components/cards/BarCard'
import DataTableCard from '../components/cards/DataTableCard'
import { Button } from '../components/Button'

const monthly = [
  { x: 'Jan', a: 520, b: 480 },
  { x: 'Feb', a: 540, b: 495 },
  { x: 'Mar', a: 580, b: 510 },
  { x: 'Apr', a: 560, b: 505 },
  { x: 'May', a: 610, b: 520 },
  { x: 'Jun', a: 590, b: 515 },
]

const siteBars = [
  { name: 'Downtown Office', value: 72 },
  { name: 'Riverside Apts', value: 38 },
  { name: 'Highway Bridge', value: 80 },
  { name: 'Shopping Ctr', value: 55 },
  { name: 'Industrial WH', value: 92 },
]

const siteTable = [
  { site: 'Downtown Office', progress: '65%', budget: '$2500K', spent: '$1925K', efficiency: '85%' },
  { site: 'Riverside Apts', progress: '45%', budget: '$1800K', spent: '$810K', efficiency: '72%' },
  { site: 'Highway Bridge', progress: '80%', budget: '$3500K', spent: '$2800K', efficiency: '90%' },
  { site: 'Shopping Ctr', progress: '0%', budget: '$1200K', spent: '$0', efficiency: '0%' },
  { site: 'Industrial WH', progress: '95%', budget: '$900K', spent: '$855K', efficiency: '95%' },
]

const laborTable = [
  { category: 'Skilled Labor', hours: '2,400', cost: '$180K', efficiency: '88%' },
  { category: 'Unskilled Labor', hours: '3,200', cost: '$98K', efficiency: '75%' },
  { category: 'Supervision', hours: '800', cost: '$120K', efficiency: '92%' },
  { category: 'Equipment Ops', hours: '1,200', cost: '$144K', efficiency: '85%' },
]

export default function Reports() {
  return (
    <PageFrame
      title="Reports & Analytics"
      cta={<Button label="Export Report" />}
      filtersLeft={
        <select className="bg-cardBg text-text rounded px-2 py-1">
          <option>Last 30 Days</option>
          <option>This Month</option>
          <option>Last Month</option>
          <option>YTD</option>
        </select>
      }
      metrics={
        <>
          <MetricCard id="kpi-revenue" title="Total Revenue" value="$5.9M" sublabel="Last 30 days" delta={{ value: '+12%', positive: true }} />
          <MetricCard id="kpi-expenses" title="Total Expenses" value="$5.1M" sublabel="Last 30 days" delta={{ value: '+8%', positive: false }} />
          <MetricCard id="kpi-netprofit" title="Net Profit" value="$800K" sublabel="Last 30 days" delta={{ value: '+15%', positive: true }} />
          <MetricCard id="kpi-margin" title="Profit Margin" value="13.6%" sublabel="vs prior" delta={{ value: '+2.1%', positive: true }} />
        </>
      }
    >
      <KPITrendCard id="kpi-monthly" title="Monthly Performance" data={monthly} columns={2} />
      <BarCard id="kpi-site-perf" title="Site Performance" data={siteBars} columns={2} />
      <DataTableCard
        id="tbl-site"
        title="Site Performance Details"
        columnsSpan={2}
        rowsSpan={3}
        columns={[
          { key: 'site', label: 'Site', align: 'left' },
          { key: 'progress', label: 'Progress', align: 'right' },
          { key: 'budget', label: 'Budget', align: 'right' },
          { key: 'spent', label: 'Spent', align: 'right' },
          { key: 'efficiency', label: 'Efficiency', align: 'right' },
        ]}
        rows={siteTable as unknown as Record<string, string>[]}
      />
      <DataTableCard
        id="tbl-labor"
        title="Labor Performance Details"
        columnsSpan={2}
        rowsSpan={3}
        columns={[
          { key: 'category', label: 'Category', align: 'left' },
          { key: 'hours', label: 'Hours', align: 'right' },
          { key: 'cost', label: 'Cost', align: 'right' },
          { key: 'efficiency', label: 'Efficiency', align: 'right' },
        ]}
        rows={laborTable as unknown as Record<string, string>[]}
      />
    </PageFrame>
  )
}



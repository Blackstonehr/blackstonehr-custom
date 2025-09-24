import PageFrame from '../layout/PageFrame'
import MetricCard from '../components/cards/MetricCard'
import KPITrendCard from '../components/cards/KPITrendCard'
import BarCard from '../components/cards/BarCard'
import DataTableCard from '../components/cards/DataTableCard'

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
]

export default function Dashboard() {
  return (
    <PageFrame
      title="Dashboard"
      metrics={
        <>
          <MetricCard id="revenue" title="Total Revenue" value="$5.9M" change="+12%" />
          <MetricCard id="expenses" title="Total Expenses" value="$5.1M" change="+8%" />
          <MetricCard id="net-profit" title="Net Profit" value="$800K" change="+15%" />
          <MetricCard id="profit-margin" title="Profit Margin" value="13.6%" change="+2.1%" />
        </>
      }
    >
      <KPITrendCard id="kpi-monthly" title="Monthly Performance" data={monthly} columns={6} rows={3} />
      <BarCard id="kpi-site-perf" title="Site Performance" data={siteBars} columns={6} rows={3} />
      <DataTableCard
        id="tbl-site"
        title="Site Performance Details"
        columnsSpan={6}
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
        columnsSpan={6}
        rowsSpan={3}
        columns={[
          { key: 'category', label: 'Category', align: 'left' },
          { key: 'hours', label: 'Hours', align: 'right' },
          { key: 'cost', label: 'Cost', align: 'right' },
          { key: 'efficiency', label: 'Efficiency', align: 'right' },
        ]}
        rows={[]}
      />
    </PageFrame>
  )
}

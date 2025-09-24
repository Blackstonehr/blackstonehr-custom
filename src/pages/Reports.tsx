import { Card } from '../components/Card'

export default function Reports() {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(12,minmax(0,1fr))]">
      {/* Metrics row */}
      <Card title="Total Revenue" id="revenue" columns={3}><div className="opacity-70">...</div></Card>
      <Card title="Total Expenses" id="expenses" columns={3}><div className="opacity-70">...</div></Card>
      <Card title="Net Profit" id="net-profit" columns={3}><div className="opacity-70">...</div></Card>
      <Card title="Profit Margin" id="profit-margin" columns={3}><div className="opacity-70">...</div></Card>

      {/* Graphs */}
      <Card title="Monthly Performance" id="monthly-performance" columns={6}><div className="opacity-70">...</div></Card>
      <Card title="Site Performance" id="site-performance" columns={6}><div className="opacity-70">...</div></Card>

      {/* Tables */}
      <Card title="Site Performance Details" id="site-details" columns={6}><div className="opacity-70">...</div></Card>
      <Card title="Labor Performance Details" id="labor-details" columns={6}><div className="opacity-70">...</div></Card>
    </div>
  )
}



import { Card } from '../Card'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

type Point = { x: string; a: number; b: number }

export default function KPITrendCard({
  id,
  title,
  data,
  columns = 2,
  rows = 3,
}: { id: string; title: string; data: Point[]; columns?: number; rows?: number }) {
  return (
    <Card id={id} title={title} columns={columns} rows={rows}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="a" stroke="#22c55e" />
          <Line type="monotone" dataKey="b" stroke="#ef4444" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}



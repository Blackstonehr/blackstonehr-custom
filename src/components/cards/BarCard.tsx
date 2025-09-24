import { Card } from '../Card'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

type BarPoint = { name: string; value: number }

export default function BarCard({
  id,
  title,
  data,
  columns = 2,
  rows = 3,
}: { id: string; title: string; data: BarPoint[]; columns?: number; rows?: number }) {
  return (
    <Card id={id} title={title} columns={columns} rows={rows}>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}



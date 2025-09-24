import { Card } from '../Card'

type Props = {
  id: string
  title: string
  value: string | number
  sublabel?: string
  delta?: { value: string; positive?: boolean }
  columns?: number
  rows?: number
}

export default function MetricCard({
  id, title, value, sublabel, delta, columns = 1, rows = 1
}: Props) {
  return (
    <Card id={id} title={title} columns={columns} rows={rows}>
      <div className="flex items-baseline justify-between">
        <div className="text-2xl font-bold">{value}</div>
        {delta && (
          <span className={`text-sm ${delta.positive ? 'text-green-400' : 'text-red-400'}`}>
            {delta.positive ? '▲' : '▼'} {delta.value}
          </span>
        )}
      </div>
      {sublabel && <div className="text-xs text-gray-400 mt-1">{sublabel}</div>}
    </Card>
  )
}



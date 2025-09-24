import { Card } from '../Card'

type Props = {
  id: string
  title: string
  value: string | number
  change?: string
  sublabel?: string
  delta?: { value: string; positive?: boolean }
  columns?: number
  rows?: number
}

export default function MetricCard({
  id, title, value, change, sublabel, delta, columns = 1, rows = 1
}: Props) {
  const changeText = change ?? delta?.value ?? '--'
  const positive = delta?.positive ?? (typeof change === 'string' ? change.trim().startsWith('+') : undefined)
  return (
    <Card id={id} title={title} columns={columns} rows={rows}>
      <div className="flex items-baseline justify-between">
        <div className="text-2xl font-bold">{value}</div>
        <span className={`text-sm ${positive === undefined ? 'text-gray-400' : positive ? 'text-green-400' : 'text-red-400'}`}>
          {positive === undefined ? '' : positive ? '▲ ' : '▼ '}{changeText}
        </span>
      </div>
      {sublabel && <div className="text-xs muted mt-1">{sublabel}</div>}
    </Card>
  )
}



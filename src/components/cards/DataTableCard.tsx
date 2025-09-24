import { Card } from '../Card'

type Column = { key: string; label: string; align?: 'left' | 'right' | 'center' }

export default function DataTableCard({
  id,
  title,
  columns,
  rows,
  columnsSpan = 2,
  rowsSpan = 3,
}: {
  id: string
  title: string
  columns: Column[]
  rows: Record<string, string>[]
  columnsSpan?: number
  rowsSpan?: number
}) {
  return (
    <Card id={id} title={title} columns={columnsSpan} rows={rowsSpan}>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-400">
            {columns.map((c) => (
              <th key={c.key} className={c.align === 'right' ? 'text-right' : c.align === 'center' ? 'text-center' : 'text-left'}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={idx} className="border-t border-gray-700">
              {columns.map((c) => (
                <td key={c.key} className={c.align === 'right' ? 'text-right' : c.align === 'center' ? 'text-center' : 'text-left'}>
                  {r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}



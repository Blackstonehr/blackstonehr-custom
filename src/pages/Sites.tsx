import PageFrame from '../layout/PageFrame'
import MetricCard from '../components/cards/MetricCard'
import { Card } from '../components/Card'

const siteTable = [
  { site: 'Downtown Office', status: 'On Track' },
  { site: 'Riverside Apts', status: 'Delayed' },
  { site: 'Highway Bridge', status: 'On Track' },
]

export default function Sites() {
  return (
    <PageFrame
      title="Sites"
      metrics={
        <>
          <MetricCard id="sites-active" title="Active Sites" value="12" change="+2" />
          <MetricCard id="sites-delayed" title="Delayed" value="3" change="+1" />
          <MetricCard id="sites-budget" title="On Budget" value="9" change="--" />
          <MetricCard id="sites-risk" title="At Risk" value="2" change="--" />
        </>
      }
    >
      <Card id="sites-productivity" title="Site Productivity" columns={6}>
        <div className="h-48 flex items-center justify-center text-sm text-gray-400">Bar Placeholder</div>
      </Card>
      <Card id="sites-status" title="Site Status" columns={6}>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400">
              <th>Site</th>
              <th className="text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {siteTable.map((row) => (
              <tr key={row.site} className="border-t border-gray-700">
                <td>{row.site}</td>
                <td className="text-right">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </PageFrame>
  )
}



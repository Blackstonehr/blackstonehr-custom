import { Layout } from './layout/Layout'
import { Card } from './components/Card'
import { Button } from './components/Button'
import FontPreview from './components/FontPreview'

function App() {
  return (
    <Layout
      title="Dashboard"
      headerCta={<Button label="New" />}
      metrics={
        <>
          <Card title="Headcount" columns={4} rows={1}>
            <div className="text-3xl font-bold">128</div>
            <div className="opacity-70">Total Employees</div>
          </Card>
          <Card title="Open Roles" columns={4} rows={1}>
            <div className="text-3xl font-bold">7</div>
            <div className="opacity-70">Hiring Now</div>
          </Card>
          <Card title="Attrition" columns={4} rows={1}>
            <div className="text-3xl font-bold">3.1%</div>
            <div className="opacity-70">Last 30 Days</div>
          </Card>
        </>
      }
      filters={<div className="flex gap-2">{/* Tabs/Filters placeholder */}</div>}
    >
      <Card title="Recent Activity" columns={8} rows={3}>
        <div className="opacity-70">No recent items</div>
      </Card>
      <Card title="Approvals" columns={4} rows={3}>
        <div className="opacity-70">No pending approvals</div>
      </Card>

      {/* Example preview block */}
      <div className="col-span-12 p-6 rounded-lg border border-secondary/30 mt-4">
        <h2 className="text-xl font-semibold mb-4">Font Previews</h2>
        <div className="space-y-4">
          <p className="preview-body">Body Preview: The quick brown fox jumps over the lazy dog</p>
          <p className="preview-header">Header Preview: The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="space-y-4 mt-6">
          <FontPreview font="Orbitron" id="headline" />
          <FontPreview font="Montserrat" id="caption" />
          <FontPreview font="Raleway" />
        </div>
      </div>
    </Layout>
  )
}

export default App

import React from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button label="New" />
      </div>
      <div className="grid gap-4 [grid-template-columns:repeat(12,minmax(0,1fr))]">
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
        <Card title="Recent Activity" columns={8} rows={3}>
          <div className="opacity-70">No recent items</div>
        </Card>
        <Card title="Approvals" columns={4} rows={3}>
          <div className="opacity-70">No pending approvals</div>
        </Card>
      </div>
    </div>
  )
}



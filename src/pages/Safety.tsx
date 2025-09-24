import { Card as CardComponent } from '../components/Card'

export default function Safety() {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(12,minmax(0,1fr))]">
      <CardComponent id="safety" title="Safety" columns={12}>
        <div className="opacity-70">Placeholder</div>
      </CardComponent>
    </div>
  )
}



import { Card as CardComponent } from '../components/Card'

export default function Sites() {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(12,minmax(0,1fr))]">
      <CardComponent id="sites" title="Sites" columns={12}>
        <div className="opacity-70">Placeholder</div>
      </CardComponent>
    </div>
  )
}



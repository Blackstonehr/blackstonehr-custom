import React from 'react'
import HeaderBar from './HeaderBar'
import MetricsRow from './MetricsRow'
import FiltersTabs from './FiltersTabs'

type Props = {
  title: string
  cta?: React.ReactNode
  headerRight?: React.ReactNode
  metrics?: React.ReactNode
  filtersLeft?: React.ReactNode
  filtersRight?: React.ReactNode
  children: React.ReactNode
}

export default function PageFrame({
  title, cta, headerRight, metrics, filtersLeft, filtersRight, children
}: Props) {
  return (
    <div className="min-h-full">
      <HeaderBar title={title} cta={cta} right={headerRight} />
      {metrics && <MetricsRow>{metrics}</MetricsRow>}
      {(filtersLeft || filtersRight) && (
        <FiltersTabs left={filtersLeft} right={filtersRight} />
      )}
      <div className="grid grid-cols-4 gap-4">{children}</div>
    </div>
  )
}



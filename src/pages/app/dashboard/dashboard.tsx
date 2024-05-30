import { Helmet } from 'react-helmet-async'

import { Resizable } from '@/components/common/resizable'
import { SummaryCard } from '@/components/common/summary-card'
import { SummaryCards } from '@/components/common/summary-cards'
import { PopularProductsChart } from '@/components/dashboard/popular-products-chart'

import { RevenueChart } from '../../../components/dashboard/revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <SummaryCards>
        <SummaryCard
          title="Total Revenue"
          description="Check the total revenue"
          total={20.2}
        />
        <SummaryCard
          title="Orders (this month)"
          description="Check this month orders"
          total={20.2}
        />
        <SummaryCard
          title="Orders (today)"
          description="Check today orders"
          total={20.2}
        />
        <SummaryCard
          title="Cancelations"
          description="Check the cancelations"
          total={20.2}
        />
      </SummaryCards>
      <Resizable />
      <div className="my-2 grid grid-cols-12 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </>
  )
}

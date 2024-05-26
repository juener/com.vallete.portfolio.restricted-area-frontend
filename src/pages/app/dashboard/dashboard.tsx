import { Helmet } from 'react-helmet-async'

import { Cards } from '@/components/common/cards'
import { Resizable } from '@/components/common/resizable'
import { PopularProductsChart } from '@/components/dashboard/popular-products-chart'

import { RevenueChart } from '../../../components/dashboard/revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <Cards />
      <Resizable />
      <div className="my-2 grid grid-cols-12 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </>
  )
}

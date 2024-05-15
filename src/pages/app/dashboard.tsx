import { Helmet } from 'react-helmet-async'

import { Cards } from '@/components/common/cards'
import { Resizable } from '@/components/common/resizable'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <Cards />
      <Resizable />
    </>
  )
}

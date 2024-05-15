import { Helmet } from 'react-helmet-async'

import { DataTable } from '@/components/common/data-table'
import { Pagination } from '@/components/common/pagination'

import { Form } from './orders/form'

export function Orders() {
  return (
    <>
      <Helmet title="Orders" />
      <Form />
      <DataTable />
      <Pagination pageIndex={0} totalCount={235} perPage={5} />
    </>
  )
}

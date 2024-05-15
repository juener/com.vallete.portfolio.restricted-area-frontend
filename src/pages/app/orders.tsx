import { Helmet } from 'react-helmet-async'

import { DataTable } from '@/components/common/data-table'

import { Form } from './orders/form'

export function Orders() {
  return (
    <>
      <Helmet title="Orders" />
      <Form />
      <DataTable />
    </>
  )
}

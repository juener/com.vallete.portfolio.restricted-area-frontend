import { Outlet } from 'react-router-dom'

import { Aside } from '@/components/common/aside'
import { Cards } from '@/components/common/cards'
import { Footer } from '@/components/common/footer'
import { Header } from '@/components/common/header'
import { Resizable } from '@/components/common/resizable'

export function AppLayout() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-row bg-background text-primary">
        <Aside />
        <main className="flex flex-1 flex-col">
          <Outlet />
        </main>
      </div>
    </>
  )
}

import { Outlet } from 'react-router-dom'

import { Aside } from '@/components/common/aside'
import { Header } from '@/components/common/header'

export function AppLayout() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-row bg-background text-primary">
        <Aside />
        <main className="flex flex-1 flex-col">
          <Outlet />
        </main>
      </div>
      <footer className="flex h-16 flex-1 items-end justify-end p-6 uppercase">
        vallete.com
      </footer>
    </div>
  )
}

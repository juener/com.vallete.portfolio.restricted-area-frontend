import { Mouse } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function AuthLayout() {
  return (
    <div className="grid-2-cols grid min-h-screen">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Mouse />
          <Button>Test</Button>
        </div>
        Header
        <Outlet />
        <footer className="text-sm">Copyright</footer>
      </div>
    </div>
  )
}

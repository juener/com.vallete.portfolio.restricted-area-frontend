import { Separator } from '@/components/ui/separator'

import { ModeToggle } from '../theme/theme-toogle'

export function Header() {
  return (
    <header className="flex flex-row justify-between px-4 py-2">
      <h1 className="py-2 text-2xl font-bold">Dashboard</h1>
      <div className="flex flex-row items-center justify-center gap-3">
        <span>Hello</span>
        <Separator orientation="vertical" />
        <span>Hello</span>
        <Separator orientation="vertical" />
        <span>Hello</span>
        <Separator orientation="vertical" />
        <ModeToggle />
      </div>
    </header>
  )
}

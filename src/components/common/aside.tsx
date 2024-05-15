import {
  FilePlus,
  Fingerprint,
  Home,
  LineChart,
  SlidersHorizontal,
} from 'lucide-react'

import { NavLink } from './nav-link'
import { Sheet } from './sheet'

export function Aside() {
  return (
    <aside>
      <div className="mx-1 flex flex-col rounded-lg bg-gradient-to-bl from-primary/15 via-background to-background">
        <NavLink to="/">
          <Home /> Dashboard
        </NavLink>
        <NavLink to="/">
          <FilePlus /> Register
        </NavLink>
        <NavLink to="/">
          <LineChart /> Statistics
        </NavLink>
        <NavLink to="/">
          <Fingerprint /> Data
        </NavLink>
        <NavLink to="/">
          <SlidersHorizontal /> Settings
        </NavLink>
        {/* <Outlet /> */}
        <Sheet />
      </div>
    </aside>
  )
}

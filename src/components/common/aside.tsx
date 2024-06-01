import { useQuery } from '@tanstack/react-query'
import {
  FilePlus,
  Fingerprint,
  Home,
  LineChart,
  ListOrdered,
  SlidersHorizontal,
} from 'lucide-react'

import { getProfile } from '@/api/get-profile'

import { Skeleton } from '../ui/skeleton'
import { NavLink } from './nav-link'
import { Sheet } from './sheet'

export function Aside() {
  const { data: profile, isLoading: isLoadingGetProfile } = useQuery({
    queryKey: ['get-profile'],
    queryFn: getProfile,
  })

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
        <NavLink to="/authentication/complete-register">
          <Fingerprint /> Data
        </NavLink>
        <NavLink to="/orders">
          <ListOrdered /> Orders
        </NavLink>
        <NavLink to="/">
          <SlidersHorizontal /> Settings
        </NavLink>
        {/* <Outlet /> */}
        <Sheet />
        <NavLink to="/">
          <SlidersHorizontal />
          {isLoadingGetProfile ? (
            <Skeleton className="h-4 w-full" />
          ) : (
            profile?.user.name
          )}
        </NavLink>
      </div>
    </aside>
  )
}

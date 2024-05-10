import { Home } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import { NavLink } from '@/components/common/nav-link'

export function AppLayout() {
  return (
    <div className="flex min-h-screen w-screen flex-row ">
      <div className="flex h-screen flex-col bg-primary text-secondary">
        <section className="flex w-full text-white">df</section>
        <section className="flex w-auto flex-1 flex-col justify-around bg-primary">
          <NavLink to="/">
            <Home /> Dashboard
          </NavLink>
          <NavLink to="/">
            <Home /> asdfasd fasdfsafd
          </NavLink>
          <NavLink to="/">
            <Home /> Dashboard
          </NavLink>
          <NavLink to="/">
            <Home /> a
          </NavLink>
          <NavLink to="/">
            <Home /> Dashboard
          </NavLink>
        </section>
        <h1>App</h1>
        Header
        <Outlet />
        Foot
      </div>

      <div className="flex flex-1 flex-col bg-primary">
        <section className="h-16 ">sdf</section>
        <section className="flex flex-1 rounded-lg bg-card">
          <main className="">sfd</main>
          <footer className="">footer</footer>
        </section>
      </div>
    </div>
  )
}

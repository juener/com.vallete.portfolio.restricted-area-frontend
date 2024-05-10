import { Earth } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="flex min-h-screen w-screen flex-row">
      <section className="hidden h-screen w-7/12 flex-col rounded-lg border-r border-foreground/5 bg-primary px-6 py-10 text-muted-foreground lg:flex">
        <div className="flex flex-1 items-center justify-center">
          <h2 className="text-5xl text-secondary">Howdy!</h2>
        </div>
        <footer className="flex h-1 flex-row">
          <Earth className="mr-2" />
          <span>Go to the website.</span>
        </footer>
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-4 bg-primary-foreground text-center lg:w-5/12">
        <img src="/images/logo.png" alt="Delivery Logo" className="w-4/12" />
        <span className="w-9/12 font-bold">Restricted Area</span>
        <Outlet />
        <span className="w-11/12 text-xs italic">
          Whenever you log in, you are accepting our terms and conditions.
        </span>
      </section>
    </div>
  )
}

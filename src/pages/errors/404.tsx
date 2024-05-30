import { SearchX } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <>
      <Helmet title="Page Not Found" />
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <SearchX className="h-20 w-20 text-destructive" />
        <h1 className="text-3xl">Page not found.</h1>
        <p>
          Return to the{' '}
          <Link to="/" className="font-bold text-destructive">
            Dashboard
          </Link>
          .
        </p>
      </div>
    </>
  )
}

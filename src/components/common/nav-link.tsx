import { Link, LinkProps } from 'react-router-dom'

export function NavLink(props: LinkProps) {
  return (
    <>
      <Link
        className="flex h-16 items-center justify-start gap-2 p-6 text-secondary hover:bg-foreground"
        {...props}
      ></Link>
    </>
  )
}

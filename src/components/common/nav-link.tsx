import { Link, LinkProps } from 'react-router-dom'

export function NavLink(props: LinkProps) {
  return (
    <Link
      className="flex gap-2 p-6 text-primary hover:bg-secondary "
      {...props}
    />
  )
}

import { Card } from './card'

export function Cards() {
  return (
    <section className="grid flex-1 grid-cols-1 flex-row gap-3 px-4 md:grid-cols-2 lg:grid-cols-3">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}

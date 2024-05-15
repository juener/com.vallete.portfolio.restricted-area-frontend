import { Input } from '@/components/ui/input'

export function Form() {
  return (
    <form className="mb-2 flex flex-row items-center gap-2 rounded-lg border-2 p-2">
      <span>Search:</span>
      <Input className="w-48" />
    </form>
  )
}

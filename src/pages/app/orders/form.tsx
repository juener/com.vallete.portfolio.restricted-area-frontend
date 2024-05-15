import { SelectValue } from '@radix-ui/react-select'
import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'

export function Form() {
  return (
    <form className="mx-2 mb-2 flex flex-row items-center gap-2 rounded-lg border-2 p-2">
      <span>Filters:</span>
      <Input className="w-36" placeholder="Order ID" />
      <Input className="w-[30%]" placeholder="Customer Name" />
      <Select defaultValue={'all'}>
        <SelectTrigger className="w-36">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="delivering">Delivering</SelectItem>
          <SelectItem value="canceled">Canceled</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
      <Button variant={'outline'}>
        <Search className="p-1" />
        Filter Results
      </Button>
      <Button variant={'link'}>
        <X className="p-1" />
        Remove Filters
      </Button>
    </form>
  )
}

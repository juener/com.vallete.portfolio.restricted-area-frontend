import { Fingerprint } from 'lucide-react'

import {
  Sheet as SheetShadcn,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export function Sheet() {
  return (
    <SheetShadcn>
      <SheetTrigger>
        <div className="flex flex-row gap-2 p-6">
          <Fingerprint />
          <span>Data</span>
        </div>
      </SheetTrigger>
      <SheetContent side={'left'} className="rounded-lg">
        <SheetHeader>
          <SheetTitle>This is the title</SheetTitle>
          <SheetDescription>This is the description</SheetDescription>
        </SheetHeader>
        <div className="h-full bg-red-500">To fill it.</div>
      </SheetContent>
    </SheetShadcn>
  )
}

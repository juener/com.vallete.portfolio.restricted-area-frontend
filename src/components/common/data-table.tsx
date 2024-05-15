import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '../ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

export function DataTable() {
  return (
    <div className="m-2 rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12" />
            <TableHead className="w-[10%]">ID</TableHead>
            <TableHead className="w-[10%]">Time</TableHead>
            <TableHead className="w-[10%]">Status</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="w-[10%]">Total</TableHead>
            <TableHead className="w-[10%]" />
            <TableHead className="w-[10%]" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <Drawer>
                    <DrawerTrigger>
                      <Search className="p-1" />
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>This Order</DrawerTitle>
                        <DrawerDescription>
                          This is a header description
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="m-4 h-80 rounded-lg bg-red-300 p-4">
                        : asodi fjaosid jfoisa jdfoiasdjf
                      </div>
                      <DrawerFooter className="flex w-full flex-row items-center justify-center">
                        <Button>Submit</Button>
                        <DrawerClose>
                          <Button variant={'outline'}>Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </TableCell>
                <TableCell>as5df143a2s</TableCell>
                <TableCell>15 min ago</TableCell>
                <TableCell>
                  <span className="w-1 rounded-full" />
                  Pending
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>R$ 29,90</TableCell>
                <TableCell>
                  <ArrowRight className="inline-flex p-1" />
                  Approve
                </TableCell>
                <TableCell>
                  <X className="inline-flex p-1" />
                  Cancel
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

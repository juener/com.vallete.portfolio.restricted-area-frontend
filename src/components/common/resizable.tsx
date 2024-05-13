import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable'
import { Separator } from '../ui/separator'

export function Resizable() {
  return (
    <>
      <Separator orientation="horizontal" className="mt-2" />
      <ResizablePanelGroup className="p-4" direction="horizontal">
        <ResizablePanel defaultSize={50} className="h-80">
          aaaaaa
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={35}>CCCC</ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={65}>DDDD</ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
      <Separator orientation="horizontal" className="mt-2" />
    </>
  )
}

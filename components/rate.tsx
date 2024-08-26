"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Frown, Meh, Smile } from "lucide-react"

export const RateComponent=({provider,imgUrl}:{provider:string,imgUrl:string})=>{
    return(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Rate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Rate</DialogTitle>
          <Separator className=""/>
          <div className="flex gap-5">
            <img alt="test" src={imgUrl==""? "/no-image.jpg":imgUrl} className={cn(imgUrl==""&&"border","h-[120px] w-[200px]")}/>
            <p  className="font-semibold uppercase">{provider}</p>
          </div>
        </DialogHeader>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[150px]"></TableHead>
                    <TableHead>Poor</TableHead>
                    <TableHead>Good</TableHead>
                    <TableHead>Excellent</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Cleanliness</TableCell>
                        <TableCell><Frown className="h-12 w-12 hover:text-red-600 text-black "/></TableCell>
                        <TableCell><Meh className="h-12 w-12 hover:text-yellow-600 text-black "/></TableCell>
                        <TableCell><Smile className="h-12 w-12 hover:text-green-600 text-black "/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Services</TableCell>
                        <TableCell><Frown className="h-12 w-12 hover:text-red-600 text-black "/></TableCell>
                        <TableCell><Meh className="h-12 w-12 hover:text-yellow-600 text-black "/></TableCell>
                        <TableCell><Smile className="h-12 w-12 hover:text-green-600 text-black "/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Staff</TableCell>
                        <TableCell><Frown className="h-12 w-12 hover:text-red-600 text-black"/></TableCell>
                        <TableCell><Meh className="h-12 w-12 hover:text-yellow-600 text-black "/></TableCell>
                        <TableCell><Smile className="h-12 w-12 hover:text-green-600 text-black "/></TableCell>
                    </TableRow>

                </TableBody>
            </Table>
            <p className="text-sm font-semibold">Your review for this dealer</p>
            <Textarea />
        <DialogFooter>
          <Button type="submit">Rate US.</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    )
}
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Check, ChevronUp } from "lucide-react"

interface PropsType{
    data:{name:string}[],
    text:string
}


export function Filter({data,text}:PropsType) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? data.find((nm) => nm.name === value)?.name
            : text}
            <ChevronUp className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={text} className="h-9" />
          <CommandList>
            <CommandEmpty>No {text} found.</CommandEmpty>
            <CommandGroup>
              {data.map((nm) => (
                <CommandItem
                  key={nm.name}
                  value={nm.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {nm.name}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === nm.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

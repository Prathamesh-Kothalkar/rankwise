"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

type Option = {
  label: string
  value: string
}

interface MultiSelectProps {
  options: Option[]
  placeholder?: string
  selected?: string[]
  onChange?: (selected: string[]) => void
}

export function MultiSelect({ options, placeholder = "Select options", selected = [], onChange }: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedValues, setSelectedValues] = React.useState<string[]>(selected)

  const handleSelect = React.useCallback((value: string) => {
    setSelectedValues((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value)
      }
      return [...prev, value]
    })
  }, [])

  const handleRemove = React.useCallback((value: string) => {
    setSelectedValues((prev) => prev.filter((item) => item !== value))
  }, [])

  React.useEffect(() => {
    onChange?.(selectedValues)
  }, [selectedValues, onChange])

  return (
    <div className="relative">
      <div
        className="flex flex-wrap gap-1 rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
        onClick={() => setOpen(true)}
      >
        {selectedValues.length > 0 ? (
          selectedValues.map((value) => {
            const option = options.find((opt) => opt.value === value)
            return (
              <Badge key={value} variant="secondary" className="rounded-sm px-1 font-normal">
                {option?.label}
                <button
                  type="button"
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemove(value)
                  }}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            )
          })
        ) : (
          <span className="text-sm text-muted-foreground">{placeholder}</span>
        )}
      </div>
      {open && (
        <div className="absolute top-full z-10 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
          <Command>
            <CommandInput placeholder="Search options..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selectedValues.includes(option.value)
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => handleSelect(option.value)}
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <div
                        className={`flex h-4 w-4 items-center justify-center rounded-sm border ${
                          isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"
                        }`}
                      >
                        {isSelected && <X className="h-3 w-3" />}
                      </div>
                      <span>{option.label}</span>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
      {open && <div className="fixed inset-0 z-0" onClick={() => setOpen(false)} />}
    </div>
  )
}

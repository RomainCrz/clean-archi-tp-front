"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const allStatus = [
  {
    value: "draft",
    label: "draft",
  },
  {
    value: "sent",
    label: "sent",
  },
  {
    value: "paid",
    label: "paid",
  },
  {
    value: "cancelled",
    label: "cancelled",
  },
  {
    value: "overdue",
    label: "overdue",
  },
];

type StatusComboProps = {
  initialValue: string;
  invoiceId: string;
  onChange: (value: "draft" | "sent" | "paid" | "cancelled" | "overdue", invoiceId: string) => void;
};
export function StatusCombo(props: StatusComboProps) {
  const { initialValue, onChange, invoiceId } = props;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(initialValue);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? allStatus.find((status) => status.value === value)?.label : "Select status..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search status..." className="h-9" />
          <CommandEmpty>No status found.</CommandEmpty>
          <CommandGroup>
            {allStatus.map((status) => (
              <CommandItem
                key={status.value}
                value={status.value}
                onSelect={(currentValue) => {
                  setValue(currentValue);
                  setOpen(false);
                  onChange(currentValue as "draft" | "sent" | "paid" | "cancelled" | "overdue", invoiceId);
                }}
              >
                {status.label}
                <CheckIcon className={cn("ml-auto h-4 w-4", value === status.value ? "opacity-100" : "opacity-0")} />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

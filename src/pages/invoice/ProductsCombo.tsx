import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Product } from "schema/productSchema";

export type ProductsComboProps = {
  products: Product[];
  handleSelectProduct: (product: Product) => void;
};

export const ProductsCombo = (props: ProductsComboProps) => {
  const { products, handleSelectProduct } = props;
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[300px] justify-between">
          {name ? products.find((product) => product.name === name)?.name : "Select product to add in invoice"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search product..." className="h-9" />
          <CommandEmpty>No product found.</CommandEmpty>
          <CommandGroup>
            {products.map((product) => (
              <CommandItem
                key={product.id}
                value={product.name}
                onSelect={(currentValue) => {
                  setName(currentValue);
                  setOpen(false);
                  handleSelectProduct(product);
                }}
              >
                {product.name}
                <CheckIcon className={cn("ml-auto h-4 w-4", name === product.name ? "opacity-100" : "opacity-0")} />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

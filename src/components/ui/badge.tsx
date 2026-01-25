import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#FF6B35] text-white [a&]:hover:bg-[#FF8F6B]",
        secondary:
          "border-[#FFE8E0] bg-[#FFF8F5] text-[#4B5563] [a&]:hover:bg-[#FFE8E0]",
        destructive:
          "border-transparent bg-red-500 text-white [a&]:hover:bg-red-600",
        outline:
          "border-[#FFE8E0] text-[#4B5563] [a&]:hover:bg-[#FFF8F5] [a&]:hover:text-[#FF6B35]",
        orange:
          "border-transparent bg-gradient-to-r from-[#FF6B35] to-[#FF8F6B] text-white",
        purple:
          "border-transparent bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

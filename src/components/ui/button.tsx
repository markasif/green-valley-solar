import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-heading ring-offset-background transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/95 ring-1 ring-primary/10 shadow-none",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-primary/10 bg-transparent text-primary hover:bg-primary/5",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-none",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-cta text-primary-foreground font-semibold shadow-md transform-gpu transition-transform hover:scale-[1.02]",
        heroStrong: "bg-gradient-cta-strong text-primary-foreground font-semibold shadow-lg transform-gpu transition-transform hover:scale-105",
        heroOutline: "border border-primary/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/6 backdrop-blur-sm",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-none",
        amber: "bg-gradient-to-r from-[#FFD700] to-[#FFB800] text-[#1A1A1A] hover:from-[#FFC000] hover:to-[#FFA000] shadow-[0_4px_14px_0_rgba(255,184,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,184,0,0.23)] hover:-translate-y-0.5 transition-all duration-200 font-bold",
        ghostWhite: "border-2 border-white/80 bg-transparent text-white hover:bg-white/10 hover:border-white transition-all duration-200",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-md",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

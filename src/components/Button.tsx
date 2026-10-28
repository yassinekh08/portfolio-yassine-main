import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "outline" | "ghost" | "icon";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, variant = "primary", className, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={ref}
        className={cn("button", `button-${variant}`, className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
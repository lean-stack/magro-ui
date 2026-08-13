import {
  Button as _Button,
  type ButtonProps as _ButtonProps,
} from "react-aria-components";
import { cva, type VariantProps } from "../utils/cva";

const buttonClasses = cva({
  base: ["px-4 py-2 rounded-md transition-colors"],
  variants: {
    variant: {
      default: ["border text-app-11 hover:bg-app-4 hover:text-app-12"],
      primary: ["border bg-black text-white hover:bg-accent-10"],
      ghost: ["text-app-11 hover:bg-app-4 hover:text-app-12"],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends _ButtonProps,
    VariantProps<typeof buttonClasses> {}

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <_Button className={buttonClasses({ variant, className })} {...props} />
  );
}

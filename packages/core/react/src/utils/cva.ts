import { defineConfig } from "cva";
import { twMerge } from "tailwind-merge";

export const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});

export type { ClassValue, VariantProps } from "cva";
export { twMerge } from "tailwind-merge";

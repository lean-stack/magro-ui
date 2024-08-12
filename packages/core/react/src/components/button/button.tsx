import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
  composeRenderProps,
} from 'react-aria-components';

import { type VariantProps, tv } from 'tailwind-variants';
import { focusRingStyles } from '../base-styles';

const styles = tv({
  extend: focusRingStyles,
  base: [
    'flex cursor-default items-center rounded-default px-4 py-2 font-semibold transition',
    'data-[pressed=true]:scale-95',
  ],
  variants: {
    color: {
      default: 'bg-component text-component hover:bg-component-hover',
      primary:
        'bg-component-accent text-component-accent hover:bg-component-accent-hover',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

namespace Button {
  export interface Props
    extends RACButtonProps,
      Pick<VariantProps<typeof styles>, 'color'> {}
}

export function Button({ className, color, ...props }: Button.Props) {
  return (
    <RACButton
      className={composeRenderProps(className, (className, renderProps) =>
        styles({ ...renderProps, color, className }),
      )}
      {...props}
    />
  );
}

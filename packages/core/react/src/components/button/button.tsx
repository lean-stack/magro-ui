import {
  Button as _Button,
  type ButtonProps as _ButtonProps,
} from "react-aria-components";

export interface ButtonProps extends _ButtonProps {}

export function Button({ ...props }: ButtonProps) {
  return <_Button {...props} />;
}

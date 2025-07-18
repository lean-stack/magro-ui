import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from "react-aria-components";

namespace Button {
  export interface Props extends RACButtonProps {}
}

export function Button({ ...props }: Button.Props) {
  return <RACButton {...props} />;
}

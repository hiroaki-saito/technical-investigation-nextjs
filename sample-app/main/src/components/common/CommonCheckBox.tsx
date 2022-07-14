import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { CommonCheckBoxProps } from "./props";

const CommonCheckBox: any = (props: CommonCheckBoxProps) => {
  const { message } = props;
  return <Checkbox>{message}</Checkbox>;
};

export default CommonCheckBox;

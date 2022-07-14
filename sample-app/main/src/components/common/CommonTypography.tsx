import { Text } from "@chakra-ui/react";
import { CommonTypographyProps } from "./props";

const CommonTypography: any = (props: CommonTypographyProps) => {
  const { message, fontSize, textAlign } = props;
  return (
    <Text fontSize={fontSize} textAlign={textAlign}>
      {message}
    </Text>
  );
};

export default CommonTypography;

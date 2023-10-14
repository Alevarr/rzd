import { Badge } from "@chakra-ui/react";

interface Props {
  children: string;
}

export default ({ children }: Props) => {
  return (
    <Badge color="white" bg="red.500" p={1} textTransform="none">
      {children}
    </Badge>
  );
};

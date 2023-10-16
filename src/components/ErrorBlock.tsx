import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}
export default ({ children: message }: Props) => {
  return (
    <Box padding={5} m={4}>
      <Heading as="h1" size="md" fontFamily="Ubuntu">
        Oops!
      </Heading>
      <Text>{message}</Text>
    </Box>
  );
};

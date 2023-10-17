import { HStack, Square, VStack, Text } from "@chakra-ui/react";

export default () => {
  return (
    <VStack alignItems="flex-start">
      <HStack justifyContent="flex">
        <Square size="28px" bg="red" borderRadius={4} boxShadow="lg"></Square>
        <Text>Свободное</Text>
      </HStack>
      <HStack justifyContent="flex">
        <Square
          size="28px"
          bg="red.200"
          borderRadius={4}
          boxShadow="lg"
        ></Square>
        <Text>Занятое место</Text>
      </HStack>
      <HStack justifyContent="flex">
        <Square size="28px" bg="blue" borderRadius={4} boxShadow="lg"></Square>
        <Text>Рекомендованное место</Text>
      </HStack>
    </VStack>
  );
};

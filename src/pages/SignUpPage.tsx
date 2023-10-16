import { Center, VStack } from "@chakra-ui/react";
import SignUpForm from "../components/SignUpForm";

export default function () {
  return (
    <Center mt="40px">
      <VStack spacing={8} p={8} boxShadow="lg" bg="white">
        <SignUpForm />
      </VStack>
    </Center>
  );
}

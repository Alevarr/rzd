import { Center, VStack } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

export default function () {
  return (
    <Center my="40px" pb="40px">
      <VStack spacing={8} p={8} boxShadow="lg" bg="white">
        <LoginForm />
      </VStack>
    </Center>
  );
}

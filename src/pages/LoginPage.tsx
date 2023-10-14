import { Center, Heading, Text, VStack } from "@chakra-ui/react";
// import LoginForm from "../components/LoginForm";

export default function () {
  return (
    <Center mt="40px">
      <VStack
        spacing={8}
        border={["none", "2px"]}
        borderColor={["orange.900", "orange.900"]}
        borderRadius={6}
        p={8}
        boxShadow={["none", "lg"]}
      >
        <Heading as="h2" size="lg" fontFamily="Ubuntu" textAlign="center">
          Добро пожаловать на{" "}
          <Text
            fontFamily="Visitor TT1 BRK"
            fontSize="32px"
            color="orange.900"
            as="span"
          >
            SKILLSPRINT
          </Text>
          !
        </Heading>
        {/* <LoginForm /> */}
      </VStack>
    </Center>
  );
}

import { Center, Heading, Text, VStack } from "@chakra-ui/react";
// import SignUpForm from "../components/SignUpForm";

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
          Рады видеть вас на{" "}
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
        {/* <SignUpForm /> */}
      </VStack>
    </Center>
  );
}

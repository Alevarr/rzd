import { VStack } from "@chakra-ui/react";
import RouteCard from "../components/RouteCard";

export default () => {
  return (
    <VStack mt="46px" p={8} spacing={4}>
      <RouteCard></RouteCard>
      <RouteCard></RouteCard>
      <RouteCard></RouteCard>
    </VStack>
  );
};

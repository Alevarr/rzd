import { Text, VStack } from "@chakra-ui/react";
import RouteCard from "../components/RouteCard";
import useTrainRoutes from "../hooks/useTrainRoutes";

export default () => {
  const { data, error, isLoading } = useTrainRoutes();
  return (
    <VStack mt="46px" p={8} spacing={4}>
      {data?.results.map((route) => (
        <RouteCard route={route} key={route.trainName} />
      ))}
    </VStack>
  );
};

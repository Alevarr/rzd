import { Skeleton, VStack } from "@chakra-ui/react";
import RouteCard from "../components/RouteCard";
import useTrainRoutes from "../hooks/useTrainRoutes";

export default () => {
  const { data, isLoading } = useTrainRoutes();
  const skeletons = [0, 1, 2];
  return (
    <VStack mt="46px" p={8} spacing={4}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <Skeleton
            w="100%"
            h={{ base: "350px", lg: "120px" }}
            key={skeleton}
          />
        ))}
      {data?.results.map((route) => (
        <RouteCard route={route} key={route.trainName} />
      ))}
    </VStack>
  );
};

import {
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import "./seatsPage.css";
import { useParams } from "react-router-dom";
import useTrainRoute from "../hooks/useTrainRoute";
import ErrorBlock from "../components/ErrorBlock";
import KupeCart from "../components/KupeCart";
import PlatsCart from "../components/PlatsCart";

export default () => {
  const { id } = useParams();
  const { data, error, isLoading } = useTrainRoute(id as string);
  if (isLoading) return <Spinner m={8} />;
  if (error) return <ErrorBlock>{error.message}</ErrorBlock>;
  if (!data) return <ErrorBlock>404 Page not found</ErrorBlock>;
  return (
    <Stack bg="white">
      <Tabs colorScheme="red">
        <TabList>
          {data.carriages.map((cart) => (
            <Tab key={cart.number}>ВАГОН {cart.number}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.carriages.map((cart) => {
            return (
              <TabPanel>
                {["2Т", "2Э", "2К"].includes(cart.typeSlug) ? (
                  <KupeCart
                    carriage={cart}
                    buyCallback={(seatIndex) => {
                      console.log(seatIndex);
                    }}
                  />
                ) : ["3Э", "3Б"].includes(cart.typeSlug) ? (
                  <PlatsCart
                    carriage={cart}
                    buyCallback={(seatIndex) => {
                      console.log(seatIndex);
                    }}
                  />
                ) : (
                  <Text>aboba</Text>
                )}
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

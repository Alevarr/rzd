import {
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import "./seatsPage.css";
import { useParams } from "react-router-dom";
import useTrainRoute from "../hooks/useTrainRoute";
import ErrorBlock from "../components/ErrorBlock";
import KupeCart from "../components/KupeCart";
import PlatsCart from "../components/PlatsCart";
import SVCart from "../components/SVCart";
import ApiClient from "../services/api-client";

export default () => {
  const { id } = useParams();
  const { data, error, isLoading } = useTrainRoute(id as string);
  if (isLoading) return <Spinner m={8} />;
  if (error) return <ErrorBlock>{error.message}</ErrorBlock>;
  if (!data) return <ErrorBlock>404 Page not found</ErrorBlock>;

  const toast = useToast();
  const apiClient = new ApiClient("/trainRoutes");
  const sendBuySeat = (carriage: number, seat: number) => {
    apiClient
      .postSingle({
        params: {
          carriage: carriage,
          seat: seat,
          trainRouteId: data._id,
        },
      })
      .then(() =>
        toast({
          title: "Место успешно забронировано",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
      )
      .catch((e) =>
        toast({
          title: "Ошибка",
          description: e?.data,
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      );
  };

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
              <TabPanel key={cart.number}>
                {["2Т", "2Э", "2К"].includes(cart.typeSlug) ? (
                  <KupeCart
                    carriage={cart}
                    buyCallback={(seatIndex) => {
                      sendBuySeat(cart.number, seatIndex);
                    }}
                  />
                ) : ["3Э", "3Б"].includes(cart.typeSlug) ? (
                  <PlatsCart
                    carriage={cart}
                    buyCallback={(seatIndex) => {
                      sendBuySeat(cart.number, seatIndex);
                    }}
                  />
                ) : (
                  <SVCart
                    carriage={cart}
                    buyCallback={(seatIndex) => {
                      sendBuySeat(cart.number, seatIndex);
                    }}
                  />
                )}
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

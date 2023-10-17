import { Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import Carriage from "../entities/Carriage";
import { BsDot } from "react-icons/bs";
import SeatCell from "./SeatCell";

interface Props {
  carriage: Carriage;
  buyCallback: (seatIndex: number) => void;
}

export default ({ carriage, buyCallback }: Props) => {
  let seatsCounter = 0;
  let evenOrderCounter = 16;
  let oddOrderCounter = 32;
  return (
    <VStack alignItems="flex-start" spacing={8} p={8} overflowX="scroll">
      <Grid
        templateRows="36px 36px"
        templateColumns="repeat(16, 36px)"
        rowGap={4}
        columnGap={8}
      >
        {carriage.seats.map((seat) => {
          seatsCounter++;
          return (
            <GridItem
              order={
                seatsCounter % 2 == 0 ? evenOrderCounter-- : oddOrderCounter--
              }
              key={seatsCounter}
            >
              <SeatCell
                seatNumber={seatsCounter}
                price={seat.price}
                typeSlug={carriage.typeSlug}
                buyCallback={buyCallback}
                isBooked={seat.isBooked}
                userBooked={seat.userBooked}
              />
            </GridItem>
          );
        })}
      </Grid>
      <Text as="p">
        Вы можете выкупить «Купе целиком» со скидкой. Введите данные всех
        пассажиров, которые отправятся в поездку, затем выберите тариф «Купе
        целиком». Цена за купе будет показана на следующем шаге покупки. Если
        пассажиров меньше, чем мест в купе, укажите в заказе для оставшихся мест
        данные одного из пассажиров повторно.
      </Text>
      <HStack spacing={0} fontSize="32px" justifyContent="flex-start">
        <Text as="span">Вагон {carriage.number}</Text>
        <BsDot color="red" />
        <Text as="span">{carriage.type}</Text>
        <BsDot color="red" />
        <Text as="span">ФПК</Text>
      </HStack>
    </VStack>
  );
};

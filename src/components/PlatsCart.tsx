import { Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import Carriage from "../entities/Carriage";
import { BsDot } from "react-icons/bs";
import SeatCell from "./SeatCell";
import Hints from "./Hints";

interface Props {
  carriage: Carriage;
  buyCallback: (seatIndex: number) => void;
}

export default ({ carriage, buyCallback }: Props) => {
  let seatsCounter = 0;
  let evenOrderCounter = 0;
  let oddOrderCounter = 18;
  let shownAboveTirtySeven = 0;
  return (
    <VStack alignItems="flex-start" spacing={8} p={8} overflowX="scroll">
      <Grid
        templateRows="36px 36px 36px"
        templateColumns="repeat(18, 36px)"
        rowGap={4}
        columnGap={8}
      >
        {carriage.seats.map((seat) => {
          seatsCounter++;
          return (
            <GridItem
              order={
                seatsCounter < 37
                  ? seatsCounter % 2 == 0
                    ? ++evenOrderCounter
                    : ++oddOrderCounter
                  : 54 - shownAboveTirtySeven++
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
      <Hints />

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

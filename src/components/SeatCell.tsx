import {
  Popover,
  Text,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  HStack,
} from "@chakra-ui/react";
import User from "../entities/User";

interface Props {
  seatNumber: number;
  typeSlug: string;
  price: number;
  buyCallback: (seatIndex: number) => void;
  isBooked: boolean;
  userBooked: User | null;
}

export default ({
  seatNumber,
  typeSlug,
  price,
  buyCallback,
  isBooked,
  userBooked,
}: Props) => {
  const index = seatNumber - 1;
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          borderRadius={0}
          colorScheme="red"
          w="40px"
          h="40px"
          isDisabled={isBooked}
        >
          {seatNumber}
        </Button>
      </PopoverTrigger>
      <PopoverContent bg="gray.700" color="white">
        <PopoverHeader fontWeight="bold" border={0}>
          №{seatNumber} Купе
        </PopoverHeader>
        <PopoverArrow bg="gray.700" />
        <PopoverCloseButton />
        <PopoverBody>
          {seatNumber % 2 == 0 ? "Верхнее" : "Нижнее"} (Класс {typeSlug})
        </PopoverBody>
        <PopoverFooter border={0}>
          <HStack justifyContent="space-between">
            <Text as="span" fontSize="18px">
              {price.toLocaleString("ru")}₽
            </Text>
            <Button
              colorScheme="red"
              fontSize="14px"
              borderRadius={0}
              isDisabled={isBooked}
              onClick={() => {
                buyCallback(index);
              }}
            >
              Забронировать
            </Button>
          </HStack>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

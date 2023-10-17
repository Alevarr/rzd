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
  Tooltip,
} from "@chakra-ui/react";
import SeatsPageUser from "../entities/SeatUser";

interface Props {
  seatNumber: number;
  typeSlug: string;
  price: number;
  buyCallback: (seatIndex: number) => void;
  isBooked: boolean;
  userBooked: SeatsPageUser | null;
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
  const optionsMap: { [key: string]: string } = {
    activeLifeStyle: "Активный образ жизни",
    arts: "Искусство",
    cars: "Автомобили",
    gardening: "Садоводство",
    midAge: "Попутчики схожего возраста",
    noChildren: "Без детей",
    oldAge: "Попутчики схожего возраста",
    read: "Книги",
    silence: "Тишина",
    sleep: "Сон",
    sports: "Спорт",
    travel: "Путешествия",
    uncommunicative: "Неразговорчивость",
    withFriends: "С друзьями",
    work: "Работа в пути",
    youngAge: "Попутчики схожего возраста",
  };
  let tooltipString = "";
  if (userBooked) {
    for (const [key, value] of Object.entries(userBooked.options)) {
      if (value === true) tooltipString += optionsMap[key] + ", ";
    }
  }

  return (
    <Popover>
      <PopoverTrigger>
        {isBooked ? (
          <Tooltip label={tooltipString}>
            <Button
              borderRadius={0}
              colorScheme="red"
              w="40px"
              h="40px"
              isDisabled={isBooked}
            >
              {seatNumber}
            </Button>
          </Tooltip>
        ) : (
          <Button
            borderRadius={0}
            colorScheme="red"
            w="40px"
            h="40px"
            isDisabled={isBooked}
          >
            {seatNumber}
          </Button>
        )}
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

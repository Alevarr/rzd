import {
  Card,
  CardBody,
  Divider,
  HStack,
  Icon,
  Link,
  Show,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import FeatureBadge from "./FeatureBadge";
import { useNavigate } from "react-router-dom";
import TrainRoute from "../entities/TrainRoute";

interface Props {
  route: TrainRoute;
}

export default ({ route }: Props) => {
  const navigate = useNavigate();
  const departureDate = new Date(route.departureDate * 1000);
  const arrivalDate = new Date(route.arrivalDate * 1000);
  return (
    <Card
      width="100%"
      borderRadius={0}
      _hover={{
        transform: "scale(1.01)",
        transition: "transform .15s ease-in",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/${route._id}`)}
    >
      <CardBody>
        <VStack alignItems="stretch">
          <HStack justifyContent="flex-start">
            <FeatureBadge>Фирменный</FeatureBadge>
          </HStack>
          <HStack>
            <Icon color="red.500">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.095 18H16.02a.98.98 0 01-.042 0H0V3h12.317a10 10 0 019.663 7.423l1.014 3.804A3 3 0 0120.095 18zM2 9v7h4v-6a1 1 0 00-1-1H2zm6 7h6.743l-.469-2.031A11.57 11.57 0 003.005 5H2v2h3a3 3 0 013 3v6zm4.317-11h-2.225a13.585 13.585 0 014.787 5.007c.04-.005.08-.007.121-.007h4.734a8 8 0 00-7.417-5zm8.744 9.742l-.744-2.793A1 1 0 0120 12h-4.222c.176.492.325 1 .445 1.519L16.796 16h3.3a1 1 0 00.965-1.258zM0 20a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1z"
              />
            </Icon>
            <HStack spacing={0} fontSize="12px">
              <Text as="span" fontWeight="bold">
                {route.trainName}
              </Text>
              <BsDot color="red" />
              <Text as="span">ФПК</Text>
              <BsDot color="red" />
              <Text as="span">{route.departureStation}</Text>
              <MdOutlineArrowRightAlt />
              <Text as="span">{route.arrivalStation}</Text>
            </HStack>
            <Link href="#" color="red" fontSize="12px">
              Маршрут
            </Link>
          </HStack>
          <Stack
            alignItems="stretch"
            justifyContent="space-between"
            spacing={8}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <VStack flexGrow={2} alignItems="stretch">
              <HStack justifyContent="space-between">
                <VStack justifyContent="flex-start">
                  <Text as="span" fontSize="36px">
                    {departureDate.getDate() +
                      "." +
                      departureDate.getMonth() +
                      " " +
                      departureDate.getHours() +
                      ":0" +
                      departureDate.getMinutes()}
                  </Text>
                  <Text as="span" fontSize="12px" fontWeight="bold">
                    {route.departureStation}
                  </Text>
                </VStack>
                <VStack>
                  <HStack spacing={0}>
                    <BsDot color="red" size="24px" />

                    <Divider
                      borderColor="red"
                      width="256px"
                      borderWidth="1px"
                      ml="-8px"
                    />
                    <Icon as={RiArrowRightSLine} color="red" ml="-8px" />
                  </HStack>
                </VStack>
                <VStack justifyContent="flex-start">
                  <Text as="span" fontSize="36px">
                    {arrivalDate.getDate() +
                      "." +
                      arrivalDate.getMonth() +
                      " " +
                      arrivalDate.getHours() +
                      ":" +
                      arrivalDate.getMinutes()}
                  </Text>
                  <Stack spacing={0}>
                    <Text as="span" fontSize="12px"></Text>
                    <Text as="span" fontSize="12px" fontWeight="bold">
                      {route.arrivalStation}
                    </Text>
                  </Stack>
                </VStack>
              </HStack>
              <HStack justifyContent="flex-start" spacing={4}>
                <Icon boxSize="24px">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 2v6.796c0 .07.007.138.02.204H2v.5c0 .52.072 1.023.207 1.5A5.508 5.508 0 006.5 14.91V22a1 1 0 102 0v-7.09A5.508 5.508 0 0012.793 11c.135-.477.207-.98.207-1.5V9h-.02c.013-.066.02-.134.02-.204V2a1 1 0 10-2 0v6.796c0 .07.007.138.02.204H8.5V2a1 1 0 00-2 0v7H3.98c.013-.066.02-.134.02-.204V2a1 1 0 00-2 0zm5.5 11a3.5 3.5 0 01-3.163-2h6.326A3.5 3.5 0 017.5 13zM20 3h-1a2 2 0 00-2 2v8h3V3zm-3 12h3v7a1 1 0 102 0V1h-3a4 4 0 00-4 4v10h2z"
                  />
                </Icon>
                <Icon boxSize="24px">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 1a1 1 0 00-2 0v4a1 1 0 102 0V1zM4 14V9h12v5H4zm-2 1v1a4 4 0 004 4h8a4 4 0 004-4h1a4 4 0 004-4v-1a4 4 0 00-4-4H3a1 1 0 00-1 1v7zm2 1a2 2 0 002 2h8a2 2 0 002-2H4zm14-7v5h1a2 2 0 002-2v-1a2 2 0 00-2-2h-1zM1 23a1 1 0 011-1h16a1 1 0 110 2H2a1 1 0 01-1-1zM16 0a1 1 0 011 1v4a1 1 0 11-2 0V1a1 1 0 011-1zM4 3a1 1 0 011 1v1a1 1 0 01-2 0V4a1 1 0 011-1zm9 1a1 1 0 10-2 0v1a1 1 0 102 0V4z"
                  />
                </Icon>
                <Icon boxSize="24px">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 4h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1zM0 5a3 3 0 013-3h18a3 3 0 013 3v14a3 3 0 01-3 3H3a3 3 0 01-3-3V5zm10 3l6 4-6 4V8z"
                  />
                </Icon>
                <Icon boxSize="24px">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.91 4.995l-1.753-3.008L12 0l-1.157 1.987L9.09 4.995l-3.402.737-2.248.487 1.533 1.714 2.32 2.597-.351 3.463-.232 2.288 2.104-.927L12 13.95l3.186 1.404 2.104.927-.232-2.287-.35-3.464 2.32-2.597L20.56 6.22l-2.248-.487-3.403-.737zm1.87 2.452l-2.294-.497a2 2 0 01-1.305-.948L12 3.974l-1.181 2.028a2 2 0 01-1.305.948l-2.294.497 1.564 1.75a2 2 0 01.498 1.534l-.236 2.335 2.148-.946a2 2 0 011.612 0l2.148.946-.236-2.335a2 2 0 01.498-1.534l1.564-1.75zM1 23a1 1 0 011-1h20a1 1 0 110 2H2a1 1 0 01-1-1zm6-5a1 1 0 100 2h10a1 1 0 100-2H7z"
                  />
                </Icon>
                <Icon boxSize="24px">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.095 18H16.02a.98.98 0 01-.042 0H0V3h12.317a10 10 0 019.663 7.423l1.014 3.804A3 3 0 0120.095 18zM2 9v7h4v-6a1 1 0 00-1-1H2zm6 7h6.743l-.469-2.031A11.57 11.57 0 003.005 5H2v2h3a3 3 0 013 3v6zm4.317-11h-2.225a13.585 13.585 0 014.787 5.007c.04-.005.08-.007.121-.007h4.734a8 8 0 00-7.417-5zm8.744 9.742l-.744-2.793A1 1 0 0120 12h-4.222c.176.492.325 1 .445 1.519L16.796 16h3.3a1 1 0 00.965-1.258zM0 20a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1z"
                  />
                </Icon>
                <Icon boxSize="24px">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.5 0a1 1 0 000 2H6v6.252A8 8 0 1016 16h3.5v1.145a3.502 3.502 0 001 6.855 3.5 3.5 0 001-6.855V15a1 1 0 00-1-1h-4.752C14.86 10.55 11.728 8 8 8V7h9.428a1 1 0 100-2H8V0H3.5zM14 16a6 6 0 11-12 0 6 6 0 0112 0zm8 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 17a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6z"
                  />
                </Icon>
              </HStack>
            </VStack>
            <Show above="lg">
              <Divider orientation="vertical" h="114px" />
            </Show>
            <Show below="lg">
              <Divider orientation="horizontal" />
            </Show>
            <VStack flexGrow={1} alignItems="stretch">
              <HStack fontSize="14px">
                <Text as="span" flexGrow={1}>
                  Купе
                </Text>
                <Text as="span" width="50px" textAlign="end" color="gray">
                  {route.arrivalStation == "Казань Пасс"
                    ? 192
                    : route.arrivalStation == "Мурманск"
                    ? 128
                    : 128}
                </Text>
                <Text as="span" width="100px" textAlign="end" color="red">
                  от{" "}
                  {route.arrivalStation == "Казань Пасс"
                    ? "3 377"
                    : route.arrivalStation == "Мурманск"
                    ? "6 325"
                    : "4 731"}
                  ₽
                </Text>
              </HStack>
              {route.arrivalStation != "Нижний Новгород Московский" && (
                <HStack fontSize="14px">
                  <Text as="span" flexGrow={1}>
                    СВ
                  </Text>
                  <Text as="span" width="50px" textAlign="end" color="gray">
                    {route.arrivalStation == "Казань Пасс" ? 18 : 18}
                  </Text>
                  <Text as="span" width="100px" textAlign="end" color="red">
                    от{" "}
                    {route.arrivalStation == "Казань Пасс" ? "9 901" : "20 958"}{" "}
                    ₽
                  </Text>
                </HStack>
              )}
              {route.arrivalStation != "Казань Пасс" && (
                <HStack fontSize="14px">
                  <Text as="span" flexGrow={1}>
                    Плацкарт
                  </Text>
                  <Text as="span" width="50px" textAlign="end" color="gray">
                    {route.arrivalStation == "Мурманск" ? 216 : 270}
                  </Text>
                  <Text as="span" width="100px" textAlign="end" color="red">
                    от {route.arrivalStation == "Мурманск" ? "5 275" : "3 283"}₽
                  </Text>
                </HStack>
              )}
            </VStack>
          </Stack>
        </VStack>
      </CardBody>
    </Card>
  );
};

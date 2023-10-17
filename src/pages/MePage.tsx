import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  Switch,
  Center,
  VStack,
  HStack,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import ApiClient from "../services/api-client";
import useUser from "../hooks/useUser";
import ErrorBlock from "../components/ErrorBlock";
import Option from "../entities/Option";
import { FieldValues, useForm } from "react-hook-form";
import User from "../entities/User";
import { useNavigate, useOutletContext } from "react-router-dom";

export default () => {
  const toast = useToast();
  const { data, isLoading, error } = useUser();
  const options = data?.options;
  const age = data?.age;
  let checkSameAge = false;

  const setToken =
    useOutletContext<[string | null, (token: string | null) => void]>()[1];

  const navigate = useNavigate();

  if (options) {
    if (
      options.oldAge.checked ||
      options.youngAge.checked ||
      options.midAge.checked
    )
      checkSameAge = true;
  }

  if ((!isLoading && !options) || error)
    return <ErrorBlock>Something went wrong...</ErrorBlock>;

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const values = data;
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        options[key].checked = values[key];
        if (key == "midAge" || key == "youngAge" || key == "oldAge")
          options[key].checked = false;
      }
    }
    if (values["sameAge"] == true && age && options) {
      if (age < 24) {
        options.youngAge.checked = true;
      } else if (age >= 24 && age < 45) {
        options.midAge.checked = true;
      } else {
        options.oldAge.checked = true;
      }
    }
    const apiClient = new ApiClient<User>("/users/me");
    apiClient
      .putSingle({ params: { options: { ...options } } })
      .then(() =>
        toast({
          title: "Успешно сохранено",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
      )
      .catch((res) => {
        res = res.response;
        toast({
          title: "Ошибка",
          description: res?.data,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };
  return (
    <Center mt="40px">
      <VStack spacing={8} p={8} boxShadow="lg" bg="white">
        {isLoading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              {Object.entries(options as { [key: string]: Option }).map(
                ([slug, option]) => {
                  if (
                    slug == "youngAge" ||
                    slug == "oldAge" ||
                    slug == "midAge"
                  )
                    return <></>;
                  return (
                    <FormControl key={slug}>
                      <HStack justifyContent="space-between">
                        <FormLabel m={0} htmlFor={slug}>
                          {option.description}
                        </FormLabel>
                        <Switch
                          {...register(slug)}
                          id={slug}
                          colorScheme="red"
                          defaultChecked={option.checked}
                        />
                      </HStack>
                    </FormControl>
                  );
                }
              )}
              <FormControl key={"sameAge"}>
                <HStack justifyContent="space-between">
                  <FormLabel m={0} htmlFor={"sameAge"}>
                    Предпочту попутчиков своего возраста
                  </FormLabel>
                  <Switch
                    {...register("sameAge")}
                    id={"sameAge"}
                    colorScheme="red"
                    defaultChecked={checkSameAge}
                  />
                </HStack>
              </FormControl>
              <Button colorScheme="red" type="submit" mt={4} borderRadius={0}>
                Сохранить
              </Button>
              <Button
                colorScheme="red"
                variant="ghost"
                onClick={() => {
                  setToken(null);
                  navigate("/");
                  window.location.reload();
                }}
              >
                Выйти из аккаунта
              </Button>
            </Stack>
          </form>
        )}
      </VStack>
    </Center>
  );
};

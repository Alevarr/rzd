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

export default () => {
  const toast = useToast();
  const { data, isLoading, error } = useUser();
  const options = data?.options;
  if ((!isLoading && !options) || error)
    return <ErrorBlock>Something went wrong...</ErrorBlock>;

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const values = data;
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        options[key].checked = values[key];
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
                ([slug, option]) => (
                  <FormControl key={slug}>
                    <HStack justifyContent="space-between">
                      <FormLabel m={0} htmlFor={slug}>
                        {option.description}
                      </FormLabel>
                      <Switch
                        {...register(slug)}
                        id={slug}
                        colorScheme="red"
                        checked={option.checked}
                      />
                    </HStack>
                  </FormControl>
                )
              )}
              <Button colorScheme="red" type="submit" mt={4} borderRadius={0}>
                Сохранить
              </Button>
            </Stack>
          </form>
        )}
      </VStack>
    </Center>
  );
};

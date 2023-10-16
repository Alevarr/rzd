import {
  Stack,
  FormControl,
  Input,
  Button,
  Select,
  FormErrorMessage,
  useToast,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import ApiClient from "../services/api-client";

export interface FieldProps {
  field: any;
  form: any;
}

export default function () {
  const navigate = useNavigate();
  const toast = useToast();
  const setToken =
    useOutletContext<[string | null, (token: string) => void]>()[1];
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        age: 0,
        sex: "",
      }}
      validate={(values) => {
        if (values.password !== values.repeatPassword)
          return { password: "Пароли не совпадают" };
      }}
      onSubmit={(values, actions) => {
        ApiClient.signUpUser({
          params: {
            email: values.email,
            name: values.name,
            password: values.password,
            age: values.age,
            sex: values.sex,
          },
        })
          .then((res) => {
            const tokenReceived: string = res.data["x-auth-token"];
            setToken(tokenReceived);
            navigate("/me");
            window.location.reload();
          })
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
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <Stack spacing={4}>
            <Field name="name">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <Input
                    {...field}
                    placeholder="Ваше имя"
                    focusBorderColor="gray.200"
                    borderColor="gray.100"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email" type="email">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <Input
                    {...field}
                    placeholder="Email для регистрации"
                    focusBorderColor="gray.200"
                    borderColor="gray.100"
                    type="email"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="age">
              {({ form, field }: FieldProps) => (
                <FormControl isRequired>
                  <NumberInput
                    min={1}
                    max={106}
                    focusBorderColor="gray.200"
                    borderColor="gray.100"
                  >
                    <NumberInputField {...field} placeholder="Возраст" />
                  </NumberInput>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }: FieldProps) => {
                return (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <Input
                      {...field}
                      placeholder="Надежный пароль"
                      type="password"
                      focusBorderColor="gray.200"
                      borderColor="gray.100"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                );
              }}
            </Field>
            <Field name="repeatPassword">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <Input
                    {...field}
                    placeholder="Повторите пароль"
                    type="password"
                    focusBorderColor="gray.200"
                    borderColor="gray.100"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="sex">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <Select
                    {...field}
                    placeholder="Пол"
                    focusBorderColor="gray.200"
                    borderColor="gray.100"
                  >
                    <option value="m">Мужчина</option>
                    <option value="f">Женщина</option>
                  </Select>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button borderRadius={0} colorScheme="red" type="submit" mt={4}>
              Зарегистрироваться
            </Button>
            <Button
              borderRadius={0}
              colorScheme="red"
              variant="outline"
              onClick={() => navigate("/login")}
            >
              Вход
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

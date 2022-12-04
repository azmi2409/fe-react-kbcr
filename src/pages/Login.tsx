import { useForm, yupResolver } from "@mantine/form";
import { useContext } from "react";
import * as yup from "yup";
import AuthContext from "../contexts/AuthContext";
import { Button, TextInput, Group, PasswordInput } from "@mantine/core";

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type LoginData = yup.InferType<typeof loginSchema>;

const Login = () => {
  const { getInputProps, onSubmit } = useForm({
    validate: yupResolver(loginSchema),
  });

  const { login, auth } = useContext(AuthContext);

  const submit = (values: any) => {
    login(values.email, values.password);
  };

  return (
    <div className="flex justify-center flex-col gap-5 items-center p-5">
      <h1 className="text-5xl text-blue-500 font-semibold">Login Form</h1>
      <form
        onSubmit={onSubmit(submit)}
        className="mt-10 w-1/2 flex flex-col gap-5"
      >
        <TextInput
          withAsterisk
          label="Email"
          placeholder="Enter your email"
          {...getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Enter your password"
          {...getInputProps("password")}
        />
        <Group position="center" mt="md">
          <Button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-2 active:scale-95 mt-5"
            size="lg"
          >
            Login
          </Button>
        </Group>
      </form>
    </div>
  );
};

export default Login;

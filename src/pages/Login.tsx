import { useForm, FieldValues } from "react-hook-form";
import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../contexts/AuthContext";

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type LoginData = yup.InferType<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { login, auth } = useContext(AuthContext);

  const onSubmit = ({ email, password }: FieldValues) => {
    login(email, password);
  };

  return (
    <div className="flex justify-center flex-col gap-5 items-center p-5">
      <h1 className="text-5xl text-blue-500 font-semibold">Login Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 w-1/2 flex flex-col gap-5"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="h-10 rounded-md px-3"
            type="email"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="h-10 rounded-md px-3"
            type="password"
            id="password"
            {...register("password")}
          />
        </div>
        <button className="bg-blue-500 text-white rounded-md py-2 active:scale-95 mt-5">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

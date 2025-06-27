import { Dispatch, SetStateAction, useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import { User } from "../types";

type LoginProps = {
  users: User[];
  setRegistering?: Dispatch<SetStateAction<boolean>>;
  setSuccessLogin: Dispatch<SetStateAction<boolean>>;
};

type LoginForm = {
  username: string;
  password: string;
};

export default function Login({
  setRegistering,
  users,
  setSuccessLogin,
}: LoginProps) {
  const { register, handleSubmit, reset } = useForm<LoginForm>();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (data: LoginForm) => {
    const username = data.username;
    const password = data.password;

    if (!username && !password) {
      setErrorMessage("Username and Password is empty");
      return;
    }

    if (!username) {
      setErrorMessage("Username is empty");
      return;
    }

    if (!password) {
      setErrorMessage("Password is empty");
      return;
    }

    const found = users.find(
      (user) =>
        user.username === data.username && user.password === data.password,
    );

    if (!found) {
      setErrorMessage("Invalid username or password");
    } else {
      setSuccessLogin(true);
    }
  };

  const handleResetForm = () => {
    reset();
    setErrorMessage("");
    setSuccessLogin(false);
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div
        className={"w-full h-full flex flex-col items-center justify-center"}
      >
        <h1 className={"w-full text-3xl font-semibold text-center pb-4"}>
          Hello There,
          <br />
          Welcome Back!
        </h1>
        <p className={"text-gray-400 pb-6"}>Let's get you signed in.</p>
        <div
          className={
            "w-3/4  flex flex-col gap-6 items-start justify-center p-4"
          }
        >
          <div className={"w-full space-y-2"}>
            <label>Username</label>
            <CustomInput
              register={register("username")}
              placeholder="Username"
            />
          </div>
          <div className={"w-full space-y-2 pb-4"}>
            <label>Password</label>
            <CustomInput
              register={register("password")}
              type="password"
              placeholder="Password"
            />
          </div>
          {errorMessage && (
            <div className={"col-span-2 text-red-500 text-nowrap text-center"}>
              {errorMessage}
            </div>
          )}
          <CustomButton>Login</CustomButton>
          <label>
            Don't have an account?{" "}
            <button
              className={
                "text-primary hover:scale-125 hover:translate-x-2 hover:-translate-y-1  transition-transform duration-200 ease-in-out rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-primary"
              }
              type="button"
              onClick={() => {
                setRegistering?.(true);
                setTimeout(() => handleResetForm(), 500);
              }}
            >
              Register
            </button>
          </label>
        </div>
      </div>
    </form>
  );
}

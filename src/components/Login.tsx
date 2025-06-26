import { Dispatch, SetStateAction } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

type LoginProps = {
  setRegistering?: Dispatch<SetStateAction<boolean>>;
};

export default function Login({ setRegistering }: LoginProps) {
  return (
    <div className={"w-full h-full flex flex-col items-center justify-center"}>
      <h1 className={"w-full text-3xl font-semibold text-center pb-4"}>
        Hello There,
        <p />
        Welcome Back!
      </h1>
      <p className={"text-sm text-gray-400 pb-12"}>
        Login to your account using your username and password.
      </p>
      <div
        className={"w-3/4  flex flex-col gap-6 items-start justify-center p-4"}
      >
        <div className={"w-full space-y-2"}>
          <label>Username</label>
          <CustomInput />
        </div>
        <div className={"w-full space-y-2"}>
          <label>Password</label>
          <CustomInput type="password" />
        </div>
        <CustomButton onClick={() => {}}>Login</CustomButton>
        <label>
          Don't have an account?{" "}
          <button
            className={"text-primary"}
            onClick={() => setRegistering?.(true)}
          >
            Register
          </button>
        </label>
      </div>
    </div>
  );
}

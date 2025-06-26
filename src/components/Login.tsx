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
      <p className={"text-gray-400 pb-6"}>Let's get you signed in.</p>
      <div
        className={"w-3/4  flex flex-col gap-6 items-start justify-center p-4"}
      >
        <div className={"w-full space-y-2"}>
          <label>Username</label>
          <CustomInput placeholder="Username" />
        </div>
        <div className={"w-full space-y-2 pb-4"}>
          <label>Password</label>
          <CustomInput type="password" placeholder="Password" />
        </div>
        <CustomButton>Login</CustomButton>
        <label>
          Don't have an account?{" "}
          <button
            className={
              "text-primary hover:scale-125 hover:translate-x-2 transition-transform duration-200 ease-in-out"
            }
            onClick={() => setRegistering?.(true)}
          >
            Register
          </button>
        </label>
      </div>
    </div>
  );
}

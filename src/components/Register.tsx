import { Dispatch, SetStateAction } from "react";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";

type RegisterProps = {
  setRegistering?: Dispatch<SetStateAction<boolean>>;
};

type FormValues = {
  username: string;
  password: string;
  retypedPassword: string;
  department: string;
};

export default function Register({ setRegistering }: RegisterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
      retypedPassword: "",
      department: "",
    },
  });

  const password = watch("password");

  const handleRegister = () => {
    console.log(getValues());
  };
  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <div
        className={"w-full h-full flex flex-col justify-center items-center"}
      >
        <h1 className={"w-full text-3xl font-semibold text-center pb-4"}>
          Brand new? <br /> Let’s fix that real quick.
        </h1>
        <p className={"text-gray-400 pb-6"}>
          Create your account to get started.
        </p>
        <div className={"w-3/4  grid grid-cols-2 place-items-center gap-6"}>
          <div
            className={
              "w-full space-y-2 transition-all duration-300 ease-in-out"
            }
          >
            <label>
              Username{" "}
              {errors.username && <span className={"text-red-500"}>*</span>}
            </label>
            <CustomInput
              register={register("username", { required: "required" })}
            />
          </div>
          <div className={"w-full space-y-2"}>
            <label>
              Department{" "}
              {errors.department && <span className={"text-red-500"}>*</span>}
            </label>
            <CustomSelect
              register={register("department", { required: "required" })}
              options={[
                "AccountX",
                "AssetX",
                "ContractX",
                "EIX",
                "HRX",
                "HotelX",
                "PropertyX",
                "RentX",
              ]}
            />
          </div>
          <div className={"w-full space-y-2"}>
            <label>
              Password{" "}
              {errors.password && <span className={"text-red-500"}>*</span>}
            </label>
            <CustomInput
              register={register("password", { required: "required" })}
              type="password"
            />
          </div>
          <div className={"w-full space-y-2"}>
            <label>
              Re-typed Password{" "}
              {errors.retypedPassword && (
                <span className={"text-red-500"}>*</span>
              )}
            </label>
            <CustomInput
              register={register("retypedPassword", {
                validate: (value) =>
                  value === password || "Passwords do not match.",
              })}
              type="password"
            />
          </div>
          <span className={"col-span-2 text-red-500 text-nowrap text-center"}>
            {errors.retypedPassword && errors.retypedPassword.message}
          </span>
          <div className={"w-full space-y-2 col-span-2"}>
            <CustomButton>Register</CustomButton>
          </div>
          <span className={"col-span-2"}>
            Already have an account?{" "}
            <button
              className={
                "text-primary hover:scale-125 hover:translate-x-2 hover:-translate-y-1 transition-transform duration-200 ease-in-out rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-primary "
              }
              onClick={() => setRegistering?.(false)}
            >
              Login
            </button>
          </span>
        </div>
      </div>
    </form>
  );
}

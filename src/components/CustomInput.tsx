import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { UseFormRegisterReturn } from "react-hook-form";

type CustomInputProps = {
  register: UseFormRegisterReturn;
  placeholder?: string;
  className?: string;
  type?: "text" | "password";
};

export default function CustomInput({
  register,
  placeholder = "Search",
  className,
  type = "text",
}: CustomInputProps) {
  const [isVisible, setIsVisible] = useState(type === "text");
  return (
    <div className={"relative w-full flex items-center "}>
      <input
        className={`${className} w-full outline-none focus:border-2 focus:outline-none focus:ring-4 focus:ring-tertiary border-2 border-primary rounded-lg p-2 bg-slate-50 transition-all duration-300 ease-in-out pr-12 overflow-x-auto`}
        placeholder={placeholder}
        type={isVisible ? "text" : "password"}
        {...register}
      />

      {type === "password" && (
        <div
          className={"absolute right-5 top-1/2 -translate-y-1/2 ml-2"}
          onMouseDown={() => setIsVisible(true)}
          onMouseUp={() => setIsVisible(false)}
          onMouseLeave={() => setIsVisible(false)}
        >
          {isVisible ? (
            <FaRegEyeSlash
              size={20}
              className={
                "hover:scale-125 transition-transform duration-300 ease-in-out"
              }
            />
          ) : (
            <FaRegEye
              size={20}
              className={
                "hover:scale-125 transition-transform duration-300 ease-in-out"
              }
            />
          )}
        </div>
      )}
    </div>
  );
}

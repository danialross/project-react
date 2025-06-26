import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type CustomInputProps = {
  placeholder?: string;
  className?: string;
  type?: "text" | "password";
};

export default function CustomInput({
  placeholder = "Search",
  className,
  type = "text",
}: CustomInputProps) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={"relative w-full flex items-center "}>
      <input
        className={`${className} w-full focus:border-2 focus:outline-none focus:ring-4 focus:ring-tertiary border-2 border-primary rounded-lg p-2 bg-slate-50`}
        placeholder={placeholder}
        type={isVisible ? "text" : "password"}
      />

      {type === "password" && (
        <div
          className={"absolute right-3 top-1/2 -translate-y-1/2 ml-2"}
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
        </div>
      )}
    </div>
  );
}

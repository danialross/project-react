import { UseFormRegisterReturn } from "react-hook-form";

type CustomSelectProp = {
  register: UseFormRegisterReturn;
  options: string[];
  className?: string;
};

export default function CustomSelect({
  options,
  className,
  register,
}: CustomSelectProp) {
  return (
    <select
      className={`${className} w-full h-11 outline-none focus:border-2 focus:outline-none focus:ring-4 focus:ring-tertiary border-2 border-primary rounded-lg p-2 bg-slate-50 transition-all duration-300 ease-in-out`}
      {...register}
    >
      <option value="" disabled>
        Select
      </option>
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

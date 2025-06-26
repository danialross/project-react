type CustomInputProps = {
  placeholder?: string;
  className?: string;
};

export default function CustomInput({
  placeholder = "Search",
  className,
}: CustomInputProps) {
  return (
    <input
      className={`${className} w-full focus:border-2 focus:outline-none focus:ring-4 focus:ring-tertiary border-2 border-primary rounded-lg p-2 bg-slate-50`}
      placeholder={placeholder}
    ></input>
  );
}

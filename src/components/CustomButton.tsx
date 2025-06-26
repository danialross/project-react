import { useState } from "react";

type CustomButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function CustomButton({
  children,
  onClick,
  className,
}: CustomButtonProps) {
  const [, setIsHovering] = useState<boolean>(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`${className} bg-primary w-full h-14 hover:scale-105 active:scale-95 rounded-lg outline-none focus:outline-none focus:ring-tertiary focus:ring-4 transition-all duration-200 ease-in-out `}
    >
      {children}
    </button>
  );
}

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
  const [isHovering, setIsHovering] = useState<boolean>(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`${className} bg-primary w-full h-14 rounded-lg hover:text-lg focus:outline-none focus:ring-tertiary focus:ring-4 transition-all duration-300 ease-in-out `}
    >
      {children}
    </button>
  );
}

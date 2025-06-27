import { useEffect, useState } from "react";

export default function Outro() {
  const [isStartingAnimation, setIsStartingAnimation] =
    useState<boolean>(false);
  const [isFadingAwayAnimation, setIsFadingAwayAnimation] =
    useState<boolean>(false);

  useEffect(() => {
    setIsStartingAnimation(true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsFadingAwayAnimation(true), 3000);
    return () => clearTimeout(timeout);
  }, [isStartingAnimation]);

  return (
    <div
      className={`absolute z-20 w-screen h-screen bg-tertiary flex flex-col justify-center items-center text-5xl font-semibold transition-opacity duration-700 ease-in-out ${isStartingAnimation ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`flex flex-col justify-center items-center transition-opacity duration-2000 ease-in-out ${isFadingAwayAnimation ? "opacity-0" : "opacity-100"}`}
      >
        <div className="text-center translate-y-2 space-y-4">
          <p>Welcome</p>
          <p>To</p>
        </div>
        <img src={"/Logo.webp"} alt="Logo" className={"object-contain w-1/3"} />
      </div>
    </div>
  );
}

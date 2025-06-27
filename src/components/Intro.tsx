import { useEffect, useState } from "react";

export default function Intro() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isShowingLogo, setIsShowingLogo] = useState(false);
  const [isHidingLogo, setIsHidingLogo] = useState(false);

  useEffect(() => {
    const showingTimeout = setTimeout(() => {
      setIsShowingLogo(true);
    }, 300);
    const overlayTimeout = setTimeout(() => {
      setIsOverlayVisible(false);
    }, 3000);
    return () => {
      clearTimeout(showingTimeout);
      clearTimeout(overlayTimeout);
    };
  }, []);

  useEffect(() => {
    const hidingTimeout = setTimeout(() => {
      setIsHidingLogo(true);
    }, 2000);
    return () => {
      clearTimeout(hidingTimeout);
    };
  }, [isShowingLogo]);

  return (
    <div
      className={`absolute bg-tertiary z-20 w-screen h-screen flex items-center justify-center ${isOverlayVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity duration-700 ease-in-out`}
    >
      <div className={"relative w-1/3 "}>
        <div
          className={`absolute ${isShowingLogo ? "translate-x-full" : "translate-x-0"} top-0 w-full h-full bg-tertiary transition-transform duration-700 ease-in-out`}
        />
        <div
          className={`absolute ${isHidingLogo ? "translate-x-0" : "-translate-x-full"} top-0 w-full h-full  bg-tertiary transition-transform duration-700 ease-in-out`}
        />
        <img src={"/Logo.webp"} alt="Logo" className={"object-contain"} />
      </div>
    </div>
  );
}

import { Dispatch, SetStateAction } from "react";

type LogoBannerProps = {
  className?: string;
  isRegistering?: Dispatch<SetStateAction<Boolean>>;
};

const logos = [
  "/AssetX.webp",
  "/ContractX.webp",
  "/HotelX.svg",
  "/HRX.webp",
  "/PropertyX.webp",
  "/RentX.webp",
];
export default function LogoBanner({
  className,
  isRegistering,
}: LogoBannerProps) {
  return (
    <div className={`${className} w-1/2 h-full p-4`}>
      <div className="bg-tertiary w-full h-full rounded-xl text-black p-4 grid grid-cols-2 place-items-center">
        <img
          src={"/Logo.webp"}
          alt={"Logo"}
          className={"w-2/3 h-2/3 object-contain col-span-2"}
        />
        <label className={"col-span-2 text-lg font-semibold text-center"}>
          Empowering businesses with next-generation cloud-based solutions.
        </label>
        {logos.map((logo) => (
          <img
            key={logo}
            src={logo}
            alt={`${logo}`}
            className={" object-contain w-full h-full"}
          />
        ))}
        <img
          src={"/AccountX.png"}
          alt={"Logo"}
          className={"w-1/3 h-1/3 object-contain col-span-2"}
        />
      </div>
    </div>
  );
}

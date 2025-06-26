type LogoBannerProps = {
  className?: string;
};

export default function LogoBanner({ className }: LogoBannerProps) {
  return (
    <div className={`${className} w-1/2 h-full p-4`}>
      <div className="relative overflow-hidden bg-tertiary w-full h-full rounded-xl text-black p-8 flex flex-col gap-32 justify-center items-center">
        <div
          className={`z-10 rounded-full w-[300px] h-[300px] bg-tertiary flex items-center justify-center border-4 border-primary`}
        >
          <img
            src={"/Logo.webp"}
            alt={"Logo"}
            className={" bg-tertiary w-[200px] h-[200px]  object-contain"}
          />
        </div>
        <label
          className={
            "z-10 text-xl  text-center italic col-span-2 p-4 bg-tertiary rounded-lg border-4 border-primary"
          }
        >
          Your Digitalisation Partner in Navigating The Future of Work
        </label>
        <img
          src={"/pattern.png"}
          alt={"pattern"}
          className={"absolute z-1 h-full object-cover"}
        />
      </div>
    </div>
  );
}

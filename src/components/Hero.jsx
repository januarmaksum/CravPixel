import Image from "next/image";
import bgHero1 from "@/assets/about17.jpg";
import bgHero3 from "@/assets/about22.jpg";
import bgHero4 from "@/assets/about20.jpg";
import bgHero5 from "@/assets/about21.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between px-5 md:px-6 lg:px-0 lg:max-w-[95%] 2xl:max-w-7xl mx-auto container pt-10 lg:pt-40 xl:pt-48">
      <div className="flex-none w-full md:w-[60%] mt-0 md:mt-5 lg:mt-10 text-center md:text-left">
        <div className="text-cp-blue-light font-medium text-base md:text-xl md:mb-4">
          Instant Website Creation Services
        </div>
        <div className="xl:max-w-2xl">
          <p className="text-3xl md:text-4xl xl:text-5xl font-extrabold !leading-tight text-balance">
            Your website is ready to go in just 48 hours
          </p>
          <p className="hidden md:block mt-4 text-sm lg:text-xl text-balance text-slate-300">
            Create a website the way you want. The website is ready to use
            straight away!
          </p>
        </div>
        <button className="btn bg-cp-red/80 hover:bg-cp-red/65 text-white uppercase mt-5 lg:btn-lg md:mt-10 lg:mt-14">
          Get Started
        </button>
      </div>
      <div className="flex items-center mx-auto mt-8 md:mt-0">
        <ul className="columns-2 gap-0">
          <li className="p-2">
            <Image
              priority
              src={bgHero4}
              alt="brief"
              className="size-[150px] md:size-[120px] lg:size-[180px] xl:size-[200px] object-cover animate-border bg-gradient-to-r from-cp-red via-purple-500 to-cp-blue-light bg-[length:400%_400%] p-2"
            />
          </li>
          <li className="p-2">
            <Image
              priority
              src={bgHero3}
              alt="ideas"
              className="size-[150px] md:size-[120px] lg:size-[180px] xl:size-[200px] object-cover rounded-bl-[5rem] animate-border bg-gradient-to-r from-cp-red via-purple-500 to-cp-blue-light bg-[length:400%_400%] p-2"
            />
          </li>
          <li
            className="p-2 animate-diagonal-bounce"
            style={{
              animation: "diagonal-bounce 3s infinite",
            }}
          >
            <Image
              priority
              src={bgHero1}
              alt="mockup"
              className="size-[150px] md:size-[120px] lg:size-[180px] xl:size-[200px] object-cover rounded-tr-[5rem] animate-border bg-gradient-to-r from-cp-red via-purple-500 to-cp-blue-light bg-[length:400%_400%] p-2 "
            />
          </li>
          <li className="p-2">
            <Image
              priority
              src={bgHero5}
              alt="deal"
              className="size-[150px] md:size-[120px] lg:size-[180px] xl:size-[200px] object-cover animate-border bg-gradient-to-r from-cp-red via-purple-500 to-cp-blue-light bg-[length:400%_400%] p-2"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

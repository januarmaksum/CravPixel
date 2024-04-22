import Image from "next/image";
import bgHero1 from "@/assets/about17.jpg";
import bgHero3 from "@/assets/about22.jpg";
import bgHero4 from "@/assets/about20.jpg";
import bgHero5 from "@/assets/about21.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between px-5 md:px-6 lg:px-0 lg:max-w-[95%] 2xl:max-w-7xl mx-auto container pt-10 lg:pt-40 xl:pt-48">
      <div className="flex-none w-full md:w-[60%] mt-0 md:mt-20 text-center md:text-left">
        <div className="text-cp-blue-light font-bold text-base md:text-xl xl:text-3xl md:mb-4">
          Instant Website Creation Services
        </div>
        <div className="lg:max-w-4xl">
          <p className="text-3xl md:text-4xl xl:text-6xl font-extrabold !leading-tight text-balance">
            Your website is ready to go in just 48 hours
          </p>
        </div>
        <button className="btn bg-cp-red/80 hover:bg-cp-red/65 text-white mt-5 lg:btn-lg md:mt-10 lg:mt-14">
          Get Started Now
        </button>
      </div>
      <div className="flex items-center mx-auto mt-8 md:mt-0">
        <ul className="columns-2 gap-0">
          <li className="p-2">
            <Image
              priority
              src={bgHero4}
              alt="design"
              className="size-[150px] md:size-[120px] lg:size-[180px] xl:size-[240px] object-cover animate-border bg-gradient-to-r from-cp-red via-purple-500 to-cp-blue-light bg-[length:400%_400%] p-2"
            />
          </li>
          <li className="p-2">
            <Image
              priority
              src={bgHero3}
              alt="design"
              className="size-[150px] md:size-[120px] lg:size-[180px] xl:size-[240px] object-cover rounded-bl-[5rem] animate-border bg-gradient-to-r from-cp-red via-purple-500 to-cp-blue-light bg-[length:400%_400%] p-2"
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
              alt="design"
              className="size-[150px] md:size-[120px] lg:size-[180px] xl:size-[240px] object-cover rounded-tr-[5rem] animate-border bg-gradient-to-r from-cp-red via-purple-500 to-cp-blue-light bg-[length:400%_400%] p-2 "
            />
          </li>
          <li className="p-2">
            <Image
              priority
              src={bgHero5}
              alt="design"
              className="size-[150px] md:size-[120px] lg:size-[180px] xl:size-[240px] object-cover animate-border bg-gradient-to-r from-cp-red via-purple-500 to-cp-blue-light bg-[length:400%_400%] p-2"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

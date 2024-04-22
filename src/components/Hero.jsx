import Image from "next/image";
import bgHero1 from "@/assets/about17.jpg";
import bgHero2 from "@/assets/about22.jpg";
import bgHero3 from "@/assets/about20.jpg";
import bgHero4 from "@/assets/about21.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between px-5 md:px-6 lg:px-0 lg:max-w-[95%] 2xl:max-w-7xl mx-auto container pt-10 lg:pt-40 xl:pt-48">
      <div className="flex-none w-full md:w-[60%] mt-0 md:mt-5 text-center md:text-left">
        <h2 className="text-cp-blue-light font-medium text-base md:text-xl mb-2 md:mb-4">
          Jasa Pembuatan Website Profesional
        </h2>
        <div className="xl:max-w-2xl">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-extrabold !leading-tight text-balance">
            Solusi Cepat dan Hemat untuk Website Bisnis Anda
          </h1>
          <p className="hidden md:block mt-4 text-sm lg:text-xl text-balance text-slate-300">
            Wujudkan website profesional untuk berbagai kebutuhan dengan design,
            fitur dan teknologi website yang paling up-to-date! 🚀
          </p>
        </div>
        <div className="flex gap-3 justify-center md:justify-start">
          <button className="btn bg-primary text-white border-none hover:bg-primary/70 mt-5 lg:btn-lg md:mt-10 lg:mt-14">
            Lihat Portfolio Kami
          </button>
          <button className="btn btn-outline hover:bg-primary hover:border-primary hover:text-white text-white mt-5 lg:btn-lg md:mt-10 lg:mt-14">
            Harga Website
          </button>
        </div>
      </div>
      <div className="flex items-center mx-auto mt-8 md:mt-0">
        <ul className="columns-2 gap-0">
          <li className="p-2">
            <Image
              priority
              src={bgHero3}
              alt="brief"
              className="size-[150px] md:size-[120px] lg:size-[180px] xl:size-[200px] object-cover animate-border bg-gradient-to-r from-cp-red via-purple-500 to-cp-blue-light bg-[length:400%_400%] p-2"
            />
          </li>
          <li className="p-2">
            <Image
              priority
              src={bgHero2}
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
              src={bgHero4}
              alt="deal"
              className="size-[150px] md:size-[120px] lg:size-[180px] xl:size-[200px] object-cover animate-border bg-gradient-to-r from-cp-red via-purple-500 to-cp-blue-light bg-[length:400%_400%] p-2"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

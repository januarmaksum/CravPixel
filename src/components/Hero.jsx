"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import bgHero3 from "@/assets/about17.jpg";
import bgHero2 from "@/assets/about22.jpg";
import bgHero1 from "@/assets/about20.jpg";
import bgHero4 from "@/assets/about21.jpg";

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col md:flex-row justify-between px-5 md:px-6 lg:px-0 lg:max-w-[95%] 2xl:max-w-7xl mx-auto container pt-10 lg:pt-40 xl:pt-48">
      <motion.div
        className="flex-none w-full md:w-[60%] mt-0 md:mt-5 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-cp-blue-light font-medium text-base md:text-xl mb-2 md:mb-4">
          Jasa Pembuatan Website Profesional
        </h2>
        <div className="xl:max-w-2xl">
          <motion.h1
            className="text-2xl md:text-4xl xl:text-5xl font-extrabold !leading-tight text-balance"
            variants={fadeInUp}
          >
            Solusi Cepat dan Hemat untuk Website Bisnis Anda
          </motion.h1>
          <motion.p
            className="hidden md:block mt-4 text-sm lg:text-xl text-balance text-slate-300 font-light"
            variants={fadeInUp}
          >
            Wujudkan website profesional untuk berbagai kebutuhan dengan design,
            fitur dan teknologi yang paling up-to-date! 🚀
          </motion.p>
        </div>
        <div className="flex gap-3 justify-center md:justify-start">
          <button className="btn bg-primary text-white border-none hover:bg-primary/70 mt-5 lg:btn-lg md:mt-10 lg:mt-14">
            Lihat Portfolio Kami
          </button>
          <button className="btn btn-outline hover:bg-primary hover:border-primary hover:text-white text-white mt-5 lg:btn-lg md:mt-10 lg:mt-14">
            Harga Website
          </button>
        </div>
      </motion.div>
      <HeroObject />
    </div>
  );
}

export function HeroObject() {
  const object = [
    {
      image: bgHero1,
      alt: "brief",
      className: "",
      animateClass: "",
    },
    {
      image: bgHero2,
      alt: "ideas",
      className: "rounded-bl-[5rem]",
      animateClass: "",
    },
    {
      image: bgHero3,
      alt: "mockup",
      className: "rounded-tr-[5rem]",
      animateClass: "animate-diagonal-bounce",
    },
    {
      image: bgHero4,
      alt: "deal",
      className: "",
      animateClass: "",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="flex items-center mx-auto mt-8 md:mt-0">
      <motion.ul initial="hidden" animate="visible" className="columns-2 gap-0">
        {object.map((item, index) => (
          <motion.li
            key={index}
            variants={fadeIn}
            className={`p-2 ${item.animateClass}`}
          >
            <Image
              priority
              src={item.image}
              alt={item.alt}
              className={`size-[150px] md:size-[120px] lg:size-[180px] xl:size-[200px] object-cover animate-border bg-gradient-to-r from-cp-red via-purple-500 to-cp-blue-light bg-[length:400%_400%] p-2 ${item.className}`}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

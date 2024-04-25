"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollToElementById } from "@/utils";
import Image from "next/image";
import bgHero3 from "@/assets/about17.jpg";
import bgHero2 from "@/assets/about22.jpg";
import bgHero1 from "@/assets/about20.jpg";
import bgHero4 from "@/assets/about21.jpg";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const scrollToTarget = () => {
    scrollToElementById("whatYouGet");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative">
      <div
        ref={ref}
        className="flex flex-col md:flex-row justify-between px-5 md:px-6 lg:px-0 lg:max-w-[95%] 2xl:max-w-7xl mx-auto container pt-10 lg:pt-40 xl:pt-48 pb-24 md:pb-32 lg:pb-44 xl:pb-48 2xl:pb-60"
      >
        <motion.div
          className="flex-none w-full md:w-[60%] mt-0 md:mt-5 text-center md:text-left"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h1 className="text-blue-light font-medium text-base md:text-xl mb-2 md:mb-4">
            Jasa Pembuatan Website Berkualitas
          </h1>
          <div className="xl:max-w-2xl">
            <motion.h2
              className="text-2xl md:text-4xl xl:text-5xl font-extrabold !leading-tight text-balance"
              variants={fadeInUp}
            >
              Solusi Cepat dan Hemat untuk Website Bisnis Anda
            </motion.h2>
            <motion.p
              className="hidden md:block mt-4 text-sm lg:text-xl text-balance text-slate-300 font-light"
              variants={fadeInUp}
            >
              Wujudkan website profesional untuk berbagai kebutuhan dengan
              design dan fitur lengkap untuk meraih kesuksesan online! 🚀
            </motion.p>
          </div>
          <div className="flex gap-3 justify-center md:justify-start">
            <button
              onClick={scrollToTarget}
              className="btn bg-primary text-white border-none hover:bg-primary/70 mt-5 lg:btn-lg md:mt-10 lg:mt-14"
            >
              Pelajari Lebih Lanjut
            </button>
            <button className="btn btn-outline hover:bg-primary hover:border-primary hover:text-white text-white mt-5 lg:btn-lg md:mt-10 lg:mt-14">
              Harga Website
            </button>
          </div>
        </motion.div>
        <HeroObject />
      </div>
      <div className="custom-shape-divider-bottom-1713854242">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}

const object = [
  {
    image: bgHero1,
    alt: "brief",
    className: "",
    animateClass: "",
    priority: false,
  },
  {
    image: bgHero2,
    alt: "ideas",
    className: "rounded-bl-[5rem]",
    animateClass: "",
    priority: false,
  },
  {
    image: bgHero3,
    alt: "mockup",
    className: "rounded-tr-[5rem]",
    animateClass: "animate-diagonal-bounce",
    priority: true,
  },
  {
    image: bgHero4,
    alt: "deal",
    className: "",
    animateClass: "",
    priority: false,
  },
];

export function HeroObject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-500px 0px 0px 0px" });

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div ref={ref} className="flex items-center mx-auto mt-8 md:mt-0">
      <motion.ul
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="columns-2 gap-0"
      >
        {object.map((item, index) => (
          <motion.li
            key={index}
            variants={zoomIn}
            className={`p-2 ${item.animateClass}`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              priority={item.priority}
              className={`size-[150px] md:size-[120px] lg:size-[180px] xl:size-[200px] object-cover animate-border bg-gradient-to-r from-primary via-purple-500 to-blue-light bg-[length:400%_400%] p-2 ${item.className}`}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

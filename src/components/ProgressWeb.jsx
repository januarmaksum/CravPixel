"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import useScreenSize from "@/hooks/useScreenSize";
import progresForWeb from "@/data/progresForWeb";
import imgBuilding from "@/assets/building.jpg";
import imgIdeas from "@/assets/ideas.jpg";
import imgPublish from "@/assets/publish.jpg";

export default function ProgressWeb() {
  const screenSize = useScreenSize();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom.delay },
    }),
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, delay: custom.delay },
    }),
  };

  return (
    <section
      id="progressWeb"
      ref={ref}
      className="bg-dark-secondary pt-20 lg:pt-28 pb-32 -mt-1 overflow-hidden"
    >
      <div className="lg:max-w-[95%] 2xl:max-w-7xl mx-auto container">
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={{ delay: 0.5 }}
          variants={fadeInUp}
          className="text-2xl md:text-4xl px-5 md:px-0 xl:text-5xl font-extrabold !leading-tight text-balance text-center mb-2 lg:mb-4"
        >
          Langkah & Proses Membuat Website
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={{ delay: 0.7 }}
          variants={fadeInUp}
          className="text-center font-light px-5 md:px-0 text-sm md:text-base lg:text-xl md:tracking-wide text-pretty md:text-balance text-slate-300 lg:w-2/3 mx-auto"
        >
          Kami akan membantu memastikan bahwa kebutuhan dan keinginan Anda
          sesuai dengan hasil akhir
        </motion.p>
        <div className="px-5 lg:px-0 grid lg:grid-cols-2 gap-20 mt-5 md:mt-11 xl:mt-20">
          <div>
            <ul className="steps steps-vertical">
              {progresForWeb.map((item, index) => (
                <motion.li
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={{ delay: 0.5 }}
                  variants={fadeInUp}
                  key={index}
                  className="step step-error"
                >
                  <div className="text-left py-4">
                    <motion.h3
                      variants={fadeInUp}
                      custom={{ delay: index * 0.5 }}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="text-base md:text-xl text-blue-light font-semibold mb-2 text-balance"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      variants={fadeInUp}
                      custom={{ delay: index * 0.5 }}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="text-slate-200 font-extralight flex-grow text-sm lg:text-base xl:text-lg"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={{ delay: 0.9 }}
              variants={slideInLeft}
              className="mt-5 text-center md:text-left md:pl-24"
            >
              <button className="btn lg:btn-lg bg-primary border-none hover:bg-primary/70 text-white">
                Buat Website Sekarang
              </button>
            </motion.div>
          </div>
          {screenSize.width >= 1024 && <ObjectWeb />}
        </div>
      </div>
    </section>
  );
}

export function ObjectWeb() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, delay: custom.delay },
    }),
  };

  return (
    <div ref={ref} className="hidden lg:flex gap-9 items-center">
      <div className="flex flex-1 flex-col gap-9">
        <motion.div
          variants={slideInRight}
          animate={isInView ? "visible" : "hidden"}
          initial="hidden"
          custom={{ delay: 0.3 }}
          className="relative"
        >
          <Image
            src={imgIdeas}
            alt="puzzle like pixel"
            width={250}
            height={250}
            quality={100}
            className="w-[250px] h-[250px] ml-auto object-cover animate-border bg-gradient-to-r from-primary via-purple-500 to-blue-light bg-[length:400%_400%] p-2"
          />
        </motion.div>
        <motion.div
          variants={slideInRight}
          animate={isInView ? "visible" : "hidden"}
          initial="hidden"
          custom={{ delay: 0.5 }}
          className="relative"
        >
          <Image
            src={imgBuilding}
            alt="meeting with partner"
            width={250}
            height={250}
            quality={100}
            className="w-[250px] h-[250px] ml-auto object-cover animate-border bg-gradient-to-r from-primary via-purple-500 to-blue-light bg-[length:400%_400%] p-2"
          />
        </motion.div>
      </div>
      <div className="flex flex-1">
        <motion.div
          variants={slideInRight}
          animate={isInView ? "visible" : "hidden"}
          initial="hidden"
          custom={{ delay: 0.8 }}
          className="relative"
        >
          <Image
            src={imgPublish}
            alt="web designer"
            width={250}
            height={250}
            quality={100}
            className="w-[250px] h-[250px] object-cover animate-border bg-gradient-to-r from-primary via-purple-500 to-blue-light bg-[length:400%_400%] p-2"
          />
        </motion.div>
      </div>
    </div>
  );
}

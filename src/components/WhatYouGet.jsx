"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GoCheckCircleFill } from "react-icons/go";
import Image from "next/image";
import imgPuzzle from "@/assets/puzzle.jpg";
import imgMeeting from "@/assets/meeting.jpg";
import imgWebdesigner from "@/assets/webdesigner.jpg";
import userGetForWeb from "@/data/userGetForWeb";
import useScreenSize from "@/hooks/useScreenSize";

export default function WhatYouGet() {
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
      id="whatYouGet"
      ref={ref}
      className="px-5 md:px-6 lg:px-0 pt-20 lg:pt-32 pb-20 lg:pb-32 bg-dark-secondary -mt-1 overflow-hidden"
    >
      <div className="lg:max-w-[95%] 2xl:max-w-7xl mx-auto container">
        <motion.h2
          animate={isInView ? "visible" : "hidden"}
          custom={{ delay: 0.5 }}
          variants={fadeInUp}
          className="text-2xl md:text-4xl xl:text-5xl font-extrabold !leading-tight text-balance text-center mb-2 lg:mb-4"
        >
          Buat Website Sesuai Keinginanmu!
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={{ delay: 0.7 }}
          variants={fadeInUp}
          className="text-center font-light text-sm md:text-base lg:text-xl md:tracking-wide text-balance text-slate-300 lg:w-2/3 mx-auto"
        >
          Cocok untuk Website Company Profile, Blog, Toko Online, UMKM, Custom Web &
          Aplikasi Mobile
        </motion.p>
        <div className="flex md:px-6 lg:px-0 mt-8 lg:mt-20">
          <div className="flex-none w-full lg:flex-1">
            <motion.h2
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={{ delay: 0.9 }}
              variants={fadeInUp}
              className="text-xl text-center md:text-left lg:text-3xl font-bold text-balance lg:tracking-wide text-blue-light"
            >
              Apa yang kamu dapatkan dalam jasa pembuatan website?
            </motion.h2>
            <ul className="mt-6 md:mt-10 flex gap-4 flex-col">
              {userGetForWeb.map((item, index) => (
                <motion.li
                  key={index}
                  variants={slideInLeft}
                  custom={{ delay: index * 0.2 }}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <div className="flex items-center gap-3">
                    <GoCheckCircleFill className="text-green-500 text-xl md:text-2xl" />
                    <h3 className="text-sm md:text-lg text-balance">
                      {item.description}
                    </h3>
                  </div>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={{ delay: 0.9 }}
              variants={slideInLeft}
              className="text-center md:text-left"
            >
              <button className="mt-12 btn lg:btn-lg bg-primary border-none hover:bg-primary/70 text-white">
                Lihat Semua Desain
              </button>
            </motion.div>
          </div>
          {screenSize.width >= 1024 && <ObjectWhatYouGet />}
        </div>
      </div>
    </section>
  );
}

export function ObjectWhatYouGet() {
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
    <div ref={ref} className="flex-none w-full lg:flex-1">
      <div className="flex gap-9 items-center">
        <div className="flex flex-1 flex-col gap-9">
          <motion.div
            variants={slideInRight}
            animate={isInView ? "visible" : "hidden"}
            initial="hidden"
            custom={{ delay: 0.3 }}
            className="relative"
          >
            <Image
              src={imgPuzzle}
              alt="puzzle like pixel"
              className="w-[190px] h-[210px] object-cover ml-auto animate-border bg-gradient-to-r from-primary via-purple-500 to-blue-light bg-[length:400%_400%] p-2"
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
              src={imgMeeting}
              alt="meeting with partner"
              className="size-[250px] object-cover ml-auto animate-border bg-gradient-to-r from-primary via-purple-500 to-blue-light bg-[length:400%_400%] p-2"
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
              src={imgWebdesigner}
              alt="web designer"
              className="w-[250px] h-[400px] object-cover animate-border bg-gradient-to-r from-primary via-purple-500 to-blue-light bg-[length:400%_400%] p-2"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import progresForWeb from "@/data/progresForWeb";

export default function ProgressWeb() {
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
      className="bg-dark-secondary pt-20 lg:pt-28 pb-20 lg:pb-40 -mt-1 overflow-hidden"
    >
      <div className="lg:max-w-[95%] 2xl:max-w-7xl mx-auto container">
        <div className="px-5 lg:px-0 flex flex-col xl:flex-row gap-4 xl:gap-16">
          <div className="xl:flex-none xl:w-2/5">
            <motion.h2
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={{ delay: 0.5 }}
              variants={fadeInUp}
              className="text-2xl md:text-4xl md:px-0 xl:text-5xl font-extrabold !leading-tight text-balance mb-2 lg:mb-4"
            >
              Langkah & Proses Membuat Website
            </motion.h2>
            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={{ delay: 0.7 }}
              variants={fadeInUp}
              className="font-light md:px-0 text-sm md:text-base lg:text-xl text-pretty md:text-balance lg:text-pretty text-slate-300"
            >
              Kami akan membantu memastikan bahwa kebutuhan dan keinginan Anda
              sesuai dengan hasil akhir
            </motion.p>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={{ delay: 0.9 }}
              variants={slideInLeft}
              className="mt-12 hidden xl:block text-center md:text-left"
            >
              <button className="btn lg:btn-lg bg-primary border-none hover:bg-primary/70 text-white">
                Buat Website Sekarang
              </button>
            </motion.div>
          </div>
          <div className="flex-auto lg:-mt-6 xl:-mt-2">
            <ul className="steps steps-vertical">
              {progresForWeb.map((item, index) => (
                <li key={index} className="step step-error">
                  <div className="text-left py-4">
                    <motion.h3
                      variants={fadeInUp}
                      custom={{ delay: index * 0.5 }}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="text-base text-balance md:text-xl text-blue-light font-semibold mb-2"
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
                </li>
              ))}
            </ul>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={{ delay: 0.9 }}
              variants={slideInLeft}
              className="mt-4 block xl:hidden text-center md:text-left"
            >
              <button className="btn lg:btn-lg btn-wide bg-primary border-none hover:bg-primary/70 text-white">
                Buat Website Sekarang
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

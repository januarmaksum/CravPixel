"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import fiturWeb from "@/data/fiturWeb";

import { BiTimer, BiHappyBeaming, BiLayout, BiSupport } from "react-icons/bi";
import { RiSeoLine } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";

const icons = {
  BiTimer: <BiTimer className="text-2xl lg:text-5xl" />,
  BiHappyBeaming: <BiHappyBeaming className="text-2xl lg:text-5xl" />,
  BiLayout: <BiLayout className="text-2xl lg:text-5xl" />,
  RiSeoLine: <RiSeoLine className="text-2xl lg:text-5xl" />,
  BiSupport: <BiSupport className="text-2xl lg:text-5xl" />,
  TbWorldWww: <TbWorldWww className="text-2xl lg:text-5xl" />,
};

export default function WhyCreateWebsite() {
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

  const zoomIn = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: custom.delay },
    }),
  };

  return (
    <section id="whyUs" ref={ref} className="pt-20 pb-20 lg:pb-28 bg-dark-secondary -mt-1">
      <div className="lg:max-w-[95%] 2xl:max-w-7xl mx-auto container">
        <div className="px-5 md:px-0 xl:w-4/5 2xl:w-2/3 mx-auto">
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={{ delay: 0.5 }}
            variants={fadeInUp}
            className="text-2xl md:text-4xl xl:text-5xl font-extrabold !leading-tight text-balance text-center mb-10 lg:mb-16"
          >
            Mengapa Harus Membuat Website di <span className="text-primary">CravPixel</span>?
          </motion.h2>
          {/* <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={{ delay: 0.7 }}
            variants={fadeInUp}
            className="text-sm md:text-sm lg:text-base text-slate-200 xl:text-lg text-center text-balance font-extralight"
          >
            Cukup berikan kami materi untuk website Anda dalam bentuk company
            profile, brosur atau apapun mengenai usaha Anda. Kami akan buatkan
            websitenya, merawat dan mengoptimalkannya.
          </motion.p> */}
        </div>
        <div className="px-5 md:px-6 lg:px-0">
          <ul className="list-inside grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {fiturWeb.map((fitur, index) => (
              <motion.li
                key={index}
                className="flex flex-col"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={{ delay: index * 0.3 }}
                variants={zoomIn}
              >
                <div className="card w-full bg-secondary shadow-md flex-grow">
                  <div className="card-body gap-4 flex flex-col px-3 pt-3 pb-3 md:pb-8 md:pt-8 lg:px-8">
                    <div className="rounded-2xl flex w-max p-4 bg-blue-light/5 text-blue-light shadow-md">
                      {icons[fitur.icon]}
                    </div>
                    <h3 className="card-title text-sm md:text-xl text-blue-light">
                      {fitur.title}
                    </h3>
                    <p className="text-slate-200 font-extralight flex-grow text-xs md:text-sm lg:text-base xl:text-lg">
                      {fitur.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

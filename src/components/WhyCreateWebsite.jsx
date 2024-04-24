"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fiturWeb from "@/data/fiturWeb";

export default function WhyCreateWebsite() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
    <section ref={ref} className="pt-20 pb-40 bg-[#171a20] -mt-1">
      <div className="lg:max-w-[95%] 2xl:max-w-7xl mx-auto container">
        <div className="bg-[#171a20] px-5 md:px-0 xl:w-4/5 2xl:w-2/3 mx-auto md:py-10">
          <motion.h2
            initial="hidden"
            animate={controls}
            custom={{ delay: 0.5 }}
            variants={fadeInUp}
            className="text-2xl md:text-4xl xl:text-4xl text-center font-extrabold !leading-tight text-balance mb-6"
          >
            Mengapa Harus Membuat Website di CravPixel?
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={controls}
            custom={{ delay: 0.7 }}
            variants={fadeInUp}
            className="text-sm md:text-sm lg:text-base text-slate-200 xl:text-lg text-center text-balance font-extralight"
          >
            Cukup berikan kami materi untuk website Anda dalam bentuk company
            profile, brosur atau apapun mengenai usaha Anda. Kami akan buatkan
            websitenya, merawat dan mengoptimalkannya.
          </motion.p>
        </div>
        <div className="mt-10 px-5 md:px-6 lg:px-0">
          <ul className="list-inside grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 text-lg text-balance">
            {fiturWeb.map((fitur, index) => (
              <motion.li
                key={index}
                className="flex flex-col"
                initial="hidden"
                animate={controls}
                custom={{ delay: index * 0.3 }}
                variants={zoomIn}
              >
                <div className="card w-full bg-secondary shadow-md flex-grow">
                  <div className="card-body flex flex-col px-3 pt-3 md:pt-8 md:px-8">
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

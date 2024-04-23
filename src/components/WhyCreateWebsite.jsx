"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
  };

  return (
    <section ref={ref} className="pt-20 pb-40 bg-[#171a20] -mt-1">
      <div className="lg:max-w-[95%] 2xl:max-w-7xl mx-auto container">
        <div className="bg-[#171a20] px-5 md:px-0 xl:w-4/5 2xl:w-2/3 mx-auto md:py-10">
          <motion.h2
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="text-2xl md:text-4xl xl:text-4xl text-center font-extrabold !leading-tight text-balance mb-6"
          >
            Mengapa Harus Membuat Website di CravPixel?
          </motion.h2>
          <p className="text-sm md:text-sm lg:text-base text-slate-200 xl:text-lg text-center text-balance font-extralight">
            Cukup berikan kami materi untuk website Anda dalam bentuk company
            profile, brosur atau apapun mengenai usaha Anda. Kami akan buatkan
            websitenya, merawat dan mengoptimalkannya.
          </p>
        </div>
        <div className="mt-10 px-5 md:px-6 lg:px-0">
          <ul className="list-inside grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 text-lg text-balance">
            <li className="flex flex-col">
              <div className="card w-full bg-secondary shadow-2xl flex-grow">
                <div className="card-body flex flex-col px-3 pt-3 md:pt-8 md:px-8">
                  <h3 className="card-title text-sm md:text-xl text-blue-light">
                    Gratis Domain
                  </h3>
                  <p className="text-slate-200 font-extralight flex-grow text-xs md:text-sm lg:text-base xl:text-lg">
                    Gratis domain untuk membuat identitas online Anda tanpa
                    biaya tambahan.
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="card w-full bg-secondary shadow-2xl flex-grow">
                <div className="card-body flex flex-col px-3 pt-3 md:pt-8 md:px-8">
                  <h3 className="card-title text-sm md:text-xl text-blue-light">
                    Gratis Hosting
                  </h3>
                  <p className="text-slate-200 font-extralight flex-grow text-xs md:text-sm lg:text-base xl:text-lg">
                    Gratis hosting, sehingga Anda dapat menjalankan website
                    dengan lancar tanpa khawatir tentang biaya server.
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="card w-full bg-secondary shadow-2xl flex-grow">
                <div className="card-body flex flex-col px-3 pt-3 md:pt-8 md:px-8">
                  <h3 className="card-title text-sm md:text-xl text-blue-light">
                    SEO Friendly
                  </h3>
                  <p className="text-slate-200 font-extralight flex-grow text-xs md:text-sm lg:text-base xl:text-lg">
                    Kami membuat website yang SEO friendly, sehingga website
                    Anda mudah ditemukan di mesin pencari.
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="card w-full bg-secondary shadow-2xl flex-grow">
                <div className="card-body flex flex-col px-3 pt-3 md:pt-8 md:px-8">
                  <h3 className="card-title text-sm md:text-xl text-blue-light">
                    Mobile Friendly
                  </h3>
                  <p className="text-slate-200 font-extralight flex-grow text-xs md:text-sm lg:text-base xl:text-lg">
                    Kami membuat website yang mobile friendly, sehingga website
                    dapat diakses pada perangkat apa saja.
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="card w-full bg-secondary shadow-2xl flex-grow">
                <div className="card-body flex flex-col px-3 pt-3 md:pt-8 md:px-8">
                  <h3 className="card-title text-sm md:text-xl text-blue-light">
                    Pengoperasian Mudah
                  </h3>
                  <p className="text-slate-200 font-extralight flex-grow text-xs md:text-sm lg:text-base xl:text-lg">
                    CMS yang mudah digunakan, memungkinkan Anda untuk mengelola
                    konten website dengan mudah.
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-col">
              <div className="card w-full bg-secondary shadow-2xl flex-grow">
                <div className="card-body flex flex-col px-3 pt-3 md:pt-8 md:px-8">
                  <h3 className="card-title text-sm md:text-xl text-blue-light">
                    Bantuan Konsultasi
                  </h3>
                  <p className="text-slate-200 font-extralight flex-grow text-xs md:text-sm lg:text-base xl:text-lg">
                    Bantuan & konsultasi gratis dari tim kami yang berpengalaman
                    untuk memastikan website Anda terus berjalan dengan optimal.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

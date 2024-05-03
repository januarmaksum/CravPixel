import { GoCheck } from "react-icons/go";

export default function PriceWeb() {
  return (
    <section id="priceWeb" className="pb-20 pt-24 lg:pt-40 relative -mt-1">
      <div className="custom-shape-divider-top-1714370345">
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
      <div className="lg:max-w-[95%] 2xl:max-w-7xl mx-auto container">
        <div className="px-5 md:px-0 xl:w-4/5 2xl:w-2/3 mx-auto">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-extrabold !leading-tight text-balance text-center mb-10 lg:mb-16">
            Harga Pembuatan Website
          </h2>
        </div>
      </div>
      <div className="px-5 lg:px-0 flex flex-col lg:flex-row gap-8 items-center justify-center mt-16 lg:mt-24">
        <div className="w-full md:w-96 bg-dark-secondary p-7 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-bold text-balance mb-4">
            Silver
          </h3>
          <p className="text-sm md:text-base text-slate-300 mb-4 line-through">
            Rp1.200.000
          </p>
          <div className="flex mb-6">
            <p className="text-sm font-bold text-primary mr-1">Rp</p>
            <p className="text-4xl md:text-5xl font-bold text-primary">
              750.000
            </p>
            <p className="text-sm items-end flex font-bold text-primary">
              /tahun
            </p>
          </div>
          <p className="text-blue-light mb-3">Layanan Awal</p>
          <ul className="flex gap-2 flex-col text-white">
            <li>
              <div className="flex items-center gap-3">
                <GoCheck className="text-green-500 text-xl md:text-2xl" />
                <h3 className="text-sm md:text-base text-balance">
                  3 Pages Website
                </h3>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <GoCheck className="text-green-500 text-xl md:text-2xl" />
                <h3 className="text-sm md:text-base text-balance">
                  Free Domain & Hosting
                </h3>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <GoCheck className="text-green-500 text-xl md:text-2xl" />
                <h3 className="text-sm md:text-base text-balance">
                  SEO & Mobile Friendly
                </h3>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <GoCheck className="text-green-500 text-xl md:text-2xl" />
                <h3 className="text-sm md:text-base text-balance">
                  Email Bisnis
                </h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-96 bg-dark-secondary p-7 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-bold text-balance mb-4">
            Diamond
          </h3>
          <p className="text-sm md:text-base text-slate-300 mb-4 line-through">
            Rp3.200.000
          </p>
          <div className="flex mb-6">
            <p className="text-sm font-bold text-primary mr-1">Rp</p>
            <p className="text-4xl md:text-5xl font-bold text-primary">
              1.500.000
            </p>
            <p className="text-sm items-end flex font-bold text-primary">
              /tahun
            </p>
          </div>
          <p className="text-blue-light mb-3">Layanan Awal</p>
          <ul className="flex gap-2 flex-col text-white">
            <li>
              <div className="flex items-center gap-3">
                <GoCheck className="text-green-500 text-xl md:text-2xl" />
                <h3 className="text-sm md:text-base text-balance">
                  10 Pages Website
                </h3>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <GoCheck className="text-green-500 text-xl md:text-2xl" />
                <h3 className="text-sm md:text-base text-balance">
                  Free Domain & Hosting
                </h3>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <GoCheck className="text-green-500 text-xl md:text-2xl" />
                <h3 className="text-sm md:text-base text-balance">
                  SEO & Mobile Friendly
                </h3>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <GoCheck className="text-green-500 text-xl md:text-2xl" />
                <h3 className="text-sm md:text-base text-balance">
                  Email Bisnis
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

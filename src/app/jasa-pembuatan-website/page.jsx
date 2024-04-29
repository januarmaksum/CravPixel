import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatYouGet from "@/components/WhatYouGet";
import WhyCreateWebsite from "@/components/WhyCreateWebsite";
import ProgressWeb from "@/components/ProgressWeb";
import PriceWeb from "@/components/PriceWeb";

export const metadata = {
  title: "Jasa Pembuatan Website Gratis Domain & Hosting",
};

export default function CreateWebsite() {
  return (
    <>
      <Header />
      <Hero />
      <WhatYouGet />
      <WhyCreateWebsite />
      <ProgressWeb />
      <PriceWeb />
    </>
  );
}

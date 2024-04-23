import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyCreateWebsite from "@/components/WhyCreateWebsite";

export const metadata = {
  title: "Jasa Pembuatan Website Gratis Domain & Hosting",
};

export default function CreateWebsite() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <WhyCreateWebsite />
    </div>
  );
}

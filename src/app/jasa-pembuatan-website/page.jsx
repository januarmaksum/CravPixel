import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import TextMarquee from "@/components/TextMarquee";
import WhyCreateWebsite from "@/components/WhyCreateWebsite";

export const metadata = {
  title: "Jasa Pembuatan Website Gratis Domain & Hosting",
};

export default function CreateWebsite() {
  return (
    <div className="relative">
      <div className="bg-gradient-radial" />
      <section className="relative lg:overflow-x-hidden">
        <Header />
        <Hero />
      </section>
      <WhyCreateWebsite />
    </div>
  );
}

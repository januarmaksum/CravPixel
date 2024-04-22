import Header from "@/components/Header";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Jasa Pembuatan Website Gratis Domain & Hosting",
};

export default function CreateWebsite() {
  return (
    <div className="relative">
      <div className="bg-gradient-radial" />
      <section className="lg:min-h-screen relative hero-area-six lg:overflow-x-hidden">
        <Header />
        <Hero />
      </section>
    </div>
  );
}

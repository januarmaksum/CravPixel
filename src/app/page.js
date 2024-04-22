import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative">
      <div className="bg-gradient-radial" />
      <section className="lg:min-h-screen relative z-10 hero-area-six lg:overflow-x-hidden">
        <div className="bg-lines hidden lg:block">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Header />
        <Hero />
      </section>
    </div>
  );
}

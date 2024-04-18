import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <section className="pt-44 px-4 md:px-0 lg:max-w-7xl mx-auto">
        <Hero />
      </section>
    </>
  );
}

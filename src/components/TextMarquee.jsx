export default function TextMarquee() {
  return (
    <section className="py-5 bg-secondary-light mt-20">
      <div className="w-full overflow-hidden">
        <div className="whitespace-nowrap scrolling-marquee inline-block">
          <h4 className="text-3xl md:text-7xl font-black text-blue-light inline-block !leading-normal">
            Website Development — Website Design — Logo Design
          </h4>
          <h4 className="text-3xl md:text-7xl font-black text-blue-light inline-block !leading-normal">
            &nbsp; — Design Branding — Custom Design — SEO Optimization
          </h4>
        </div>
      </div>
    </section>
  );
}

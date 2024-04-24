import dynamic from "next/dynamic";

const About = dynamic(() => import("./About"));

export const metadata = {
  title: "CravPixel - About",
};

export default function AboutPage() {
  return <About />;
}

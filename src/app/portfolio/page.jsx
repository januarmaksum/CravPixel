import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("./Portfolio"));

export const metadata = {
  title: "CravPixel - Portfolio",
};

export default function PortfolioPage() {
  return <Portfolio />;
}

import dynamic from "next/dynamic";

const Service = dynamic(() => import("./Service"));

export const metadata = {
  title: "CravPixel - Service",
};

export default function ServicePage() {
  return <Service />;
}

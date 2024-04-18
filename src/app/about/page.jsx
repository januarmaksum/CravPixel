import Link from "next/link";

export const metadata = {
  title: "CravPixel - About"
};

export default function About() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Link href={"/"} className="btn btn-primary">
        Home
      </Link>
    </div>
  );
}

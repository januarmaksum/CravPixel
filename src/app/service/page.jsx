import Link from "next/link";

export const metadata = {
  title: "CravPixel - Service"
};

export default function Service() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="mb-4">Service page</h1>
      <Link href={"/"} className="btn btn-primary">
        Home
      </Link>
    </div>
  );
}

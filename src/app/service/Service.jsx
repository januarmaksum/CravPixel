import Header from "@/components/Header";
import Link from "next/link";

export default function Service() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="mb-4">Service page</h1>
        <Link href={"/"} className="btn btn-primary">
          Home
        </Link>
      </div>
    </>
  );
}

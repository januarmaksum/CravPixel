import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="mb-4">About page</h1>
      <Link href={"/"} className="btn btn-primary">
        Home
      </Link>
    </div>
  );
}

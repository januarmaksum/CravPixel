import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Link href={'/about'} className="btn btn-primary">About</Link>
    </main>
  );
}

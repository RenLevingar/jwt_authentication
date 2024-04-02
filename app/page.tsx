import Link from "next/link";

export default async function Home() {
  return (
    <section>
      <h1>Welcome To The Site</h1>
      <Link href={"/login"}>Login</Link>
    </section>
  )
}
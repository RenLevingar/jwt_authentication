import Link from "next/link";
import { redirect } from "next/navigation";
import {getSession} from '../lib'

export default async function Home() {
  const session = await getSession();
  let user = session?.user
  if(!user){redirect('/')}
  return (
    <section>
      <h1>Welcome To The Site</h1>
      <Link href={"/profile"}>Profile</Link>
    </section>
  )
}
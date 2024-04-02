import { redirect } from "next/navigation";
import {getSession, logout} from '../lib'

export default async function Profile() {
  const session = await getSession();
  let user = session?.user
  return (
    <section>
      <h1>Hello {user.name}</h1>
      <h2>Email: {user.email}</h2>
      <form action={async (formdata)=>{
        'use server'
        await logout()
        redirect('/')
      }}>
        
        <button type="submit">Logout</button>
      </form>
    </section>
  )
}
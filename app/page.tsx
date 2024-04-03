"use client"

import { redirect } from "next/navigation";
import {login} from './lib';

export default function Login() {
  
  return (
    <section>
      <form action={async (formdata)=>{
        const success = await login(formdata);
        if(success){redirect('/home')}else{alert("Wrong email/password")}
      }}>
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </section>
  )
}
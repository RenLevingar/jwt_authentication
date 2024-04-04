"use client"

import { redirect } from "next/navigation";
import {login} from './lib';

export default function Login() {
  
  return (
    <section className="loginSection">
      <form action={async (formdata)=>{
        const success = await login(formdata);
        if(success){redirect('/home')}else{alert("Wrong email/password")}
      }}>
        <main className="loginMain">
          <h1>Login</h1>
          <input type="email" name="email" id="email"/>
          <input type="password" name="password" id="password"/>
          <button type="submit">Login</button>
        </main>
      </form>
    </section>
  )
}
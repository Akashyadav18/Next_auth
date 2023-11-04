"use client";

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Login = () => {

  const router = useRouter()

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const onLogin = async (e: any) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:3000/api/users/login", user)
          console.log(res.data);
          if(res.data.status === 201) {
            toast.success(res.data.message, {position: "top-center"});
            router.push("/profile")
          }
          if(res.data.status === 400){
            toast.error(res.data.message, {position: "top-center"});
          }
          
        } catch (error: any) {
          console.log(error);
          toast.error(error.message, {position: "top-center"});
        }
        finally {
          setUser({email: "", password:""})
        }
    }

  return (
    <div className='h-[calc(100vh-9rem)] w-[90%] sm:w-[60%] md:w-[35%] mx-auto flex flex-col justify-center items-center gap-10'>
      <h1 className='text-xl font-semibold'>Login</h1>
      <input type='email' className='p-2 ring-2 ring-gray-300 w-full' onChange={(e) => setUser({...user, email: e.target.value})} value={user.email} placeholder='Email'/>
      <input type='password' className='p-2 ring-2 ring-gray-300 w-full' onChange={(e) => setUser({...user, password: e.target.value})} value={user.password} placeholder='Password'/>
      <button type='submit' className='px-3 py-2 bg-[#0891b2] text-white text-xl font-semibold rounded-md hover:ring-2 ring-[#5eead4]' onClick={onLogin}>Login</button>
      <Link href="/signup">Sign Up</Link>
    </div>
  )
}

export default Login

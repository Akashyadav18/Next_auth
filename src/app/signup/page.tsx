"use client";

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, {useState} from 'react'
import toast from 'react-hot-toast';

const SignUp = () => {

  const router = useRouter();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    })

    const onSignup = async (e: any) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:3000/api/users/signup", user);
          console.log(res.data);
          router.push("/login");
          toast.success("Sign up Successfully", {position: "top-center"})
        } catch (error: any) {
          console.log(error); 
          toast.error(error.message, {position: "top-center"});
        } finally {
          setUser({username: "", password: "", email: ""})
        }        
    }

  return (
    <div className='h-[calc(100vh-9rem)] w-[90%] sm:w-[60%] md:w-[35%] mx-auto flex flex-col justify-center items-center gap-10'>
      <h1 className='text-2xl font-semibold'>Sign Up</h1>
      <input type="text" className='p-2 ring-2 ring-gray-300 w-full' onChange={(e) => setUser({...user, username: e.target.value})} value={user.username} placeholder='User Name'/>
      <input type='email' className='p-2 ring-2 ring-gray-300 w-full' onChange={(e) => setUser({...user, email: e.target.value})} value={user.email} placeholder='Email'/>
      <input type='password' className='p-2 ring-2 ring-gray-300 w-full' onChange={(e) => setUser({...user, password: e.target.value})} value={user.password} placeholder='Password'/>
      <button type='submit' className='px-3 py-2 bg-[#0891b2] text-white text-xl font-semibold rounded-md hover:ring-2 ring-[#5eead4]' onClick={onSignup}>Sign Up</button>
      <Link href="/login">Login</Link>
    </div>
  )
}

export default SignUp

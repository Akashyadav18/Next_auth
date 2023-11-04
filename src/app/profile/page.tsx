"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

const Profile = () => {

  const router = useRouter()

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/users/logout");
      console.log(res.data);
      toast.success(res.data.message, {position: "top-center"})
      router.push("/login")
      
    } catch (error: any) {
      console.log(error);
      toast.error(error.message, {position: "top-center"});
      
    }

  }

  return (
    <div className='h-[calc(100vh-9rem)] flex flex-col justify-center items-center'>
      Profile
      <button onClick={handleLogout} className='px-3 py-2 bg-[#0891b2] text-white text-xl font-semibold rounded-md hover:ring-2 ring-[#5eead4]'>Logout</button>
    </div>
  )
}

export default Profile

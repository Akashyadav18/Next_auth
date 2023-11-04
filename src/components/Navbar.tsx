import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 flex justify-center items-center gap-4 md:gap-10 text-lg md:text-2xl font-semibold border-b-2 border-gray-400'>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
    </div>
  )
}

export default Navbar

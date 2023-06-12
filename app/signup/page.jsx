"use client"
import React, { useState } from 'react'
import { account } from '../../Appwrite/appwriteConfig'
import Link from 'next/link'

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSignUp = async() => {
    try {
      const res = await account.create(`${Math.ceil(Math.random() * 100000000)}`,
        user.email,
        user.password,
        user.name
      )
      setUser("")
      alert("Account Created Successfully")
      window.location.href="/login"
        console.log(res);
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className='flex justify-center mt-8'>
      <div className="shadow-md w-1/3 p-16 bg-gray-300 rounded-xl">
        <h1 className='text-2xl text-center font-bold mb-10'>Create Account</h1>
          <input type="text" id='name' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder='Enter Name' className='px-2 rounded text-[14px] w-full h-8 focus:ring-2 focus:ring-[#db2777] outline-none' />

          <input type="email" id='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder='Enter email' className='px-2 mt-6 rounded text-[14px] w-full h-8 focus:ring-2 focus:ring-[#db2777] outline-none' />
          <input type="password" id='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='Enter password' className='px-2 mt-6 rounded text-[14px] w-full h-8 focus:ring-2 focus:ring-[#db2777] outline-none' />
        <p className="text-center mt-6 font-Poppins">Already have Account &nbsp;
          <Link href='/login'>
            <span className='text-[#db2777] font-Poppins'>Login</span>
          </Link>
        </p>
        <button onClick={handleSignUp} className='w-full mt-6 h-10 px-2 py-1 font-bold hover:text-[#db2777] bg-[#db2777] text-white hover:bg-white rounded'>Signup</button>



      </div>
    </div>
  )
}

export default Signup
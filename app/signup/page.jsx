"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { account } from '@/Appwrite/appwriteConfig'
import { useRouter } from 'next/navigation'

const Signup = () => {
  const router = useRouter()
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
      alert("Account Created Successfully")
      router.push('/login')
    } catch (error) {
      console.log(error);
    }
  }

  return (
      <div className='flex justify-center mt-8'>
      <div className="shadow-md w-1/3 p-16 bg-gray-300 rounded-xl">
        <h1 className='text-2xl text-center font-bold mb-10'>Create Account</h1>
      <div className='relative'>
      <Image src="/user-solid.svg" alt="User Logo" width={14} height={12} className='absolute top-9 left-2'/> &nbsp;
      <input type="text" id='name' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}placeholder='Enter Name' className='px-8 rounded text-[14px] w-full h-10 focus:ring-2 focus:ring-[#db2777] outline-none' />
      </div>
      <div className='relative'>
      <Image src="/envelope-solid.svg" alt="User Logo" width={16} height={12} className='absolute top-[60px] left-2'/> &nbsp;
      <input type="email" id='email'  value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}  placeholder='Enter email' className='px-8 mt-6 rounded text-[14px] w-full h-10 focus:ring-2 focus:ring-[#db2777] outline-none' />
      </div>
      <div className='relative'>
      <Image src="/lock-solid.svg" alt="User Logo" width={14} height={12} className='absolute top-[60px] left-2'/> &nbsp;
      <input type="password" id='password' placeholder='Enter password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className='px-8 mt-6 rounded text-[14px] w-full h-10 focus:ring-2 focus:ring-[#db2777] outline-none' />
      </div>
        <p className="text-center mt-6 font-Poppins">Already have an account? &nbsp;
          <Link href='/login'>
            <span className='text-[#db2777] font-Poppins'>Login</span>
          </Link>
        </p>
        <button onClick={handleSignUp} className='w-full mt-6 h-12 px-2 py-1 font-bold hover:text-[#db2777] bg-[#db2777] text-white hover:bg-white rounded'>Signup</button>
      </div>
    </div>
  )
}

export default Signup



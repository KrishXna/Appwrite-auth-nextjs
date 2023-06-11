"use client"
import React,{useState} from 'react'
import { account } from '../../Appwrite/appwriteConfig'
import Link from 'next/link'

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignUp = () => {
    const promise = account.create(`${Math.ceil(Math.random() * 100000000)}`,
      email,
      password,
      name
    )
    promise.then(function (response) {
      console.log(response);
  }, function (error) {
      console.log(error);
  });
  }
  return (
    <div className='flex justify-center py-10'>
    <div className="shadow-md p-16 max-w-xl bg-[#40407a] rounded-xl">
    <h1 className='text-2xl text-white text-center mb-10'>Create Account</h1>
        <div className="flex justify-between m-4">
        <label htmlFor="name" className='mr-2 font-semibold text-xl text-[#fff]'>Name</label>
        <input type="text" id='name' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter Name' className='border-2 outline-none px-2 rounded' />
        </div>
        <div className="flex justify-between m-4">
        <label htmlFor="email" className='mr-2 font-semibold text-xl text-[#fff]'>Email</label>
        <input type="email" id='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter email'className='border-2 outline-none px-2 rounded' />
        </div>
        <div className="flex justify-between m-4">
        <label htmlFor="password" className='mr-2 font-semibold text-xl text-[#fff]'>Password</label>
        <input type="password" id='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter password' className='border-2 outline-none px-2 rounded'/>
        </div>
        <p className="text-center mt-2 text-[#fff]">Already have Account &nbsp; 
          <Link href='/login'>
            <span className='text-blue-400'>Login</span>
          </Link>
        </p>
        <button onClick={handleSignUp} className='w-full mt-1 bg-[#2c2c54] hover:bg-[#fff] hover:text-black text-[#fff] font-bold px-2 py-1 max-w-md rounded'>Signup</button>

        
        
    </div>


    </div>
  )
}

export default Signup
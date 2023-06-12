"use client"
import React, { useState } from "react";
import Link from "next/link";
import { account } from "../../Appwrite/appwriteConfig";
import Image from "next/image";


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async () => {
    try {
      const res = await account.createEmailSession(user.email, user.password);
      window.location.href = "/"
      console.log(res);
    } catch (error) {
      console.log(error);

    }
  };

  const loginWithGoogle = async () => {
    try {
      const res = await account.createOAuth2Session(
        "google",
        "http://localhost:3000",
        "http://localhost:3000/login");
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="shadow-md w-1/3 p-16 bg-gray-300 rounded-xl">
        <h1 className="text-2xl font-Helvetica font-bold text-center mb-10">
          Login with AppWrite
        </h1>
        <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter Your Email"
            className="px-2 rounded text-[14px] w-full h-8 focus:ring-2 focus:ring-[#db2777] outline-none"
          />
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter password"
            className="px-2 rounded text-[14px] w-full h-8 mt-6 focus:ring-2 focus:ring-[#db2777] outline-none"
          />
        <p className="text-center text-[#000] font-Poppins mt-6">
          Don't have an account?&nbsp;
          <Link href="/signup">
            <span className="text-[#db2777] font-Poppins">Sign Up</span>
          </Link>
        </p>
        <div className="mt-6 text-center">
          <button
            onClick={() => handleLogin(user.email, user.password)}
            className="w-full h-10 px-2 py-1 font-bold hover:text-[#db2777] bg-[#db2777] text-white hover:bg-white rounded"
          >
            Login
          </button>
            
        </div>
        <button
              onClick={loginWithGoogle}
              className="relative w-full font-bold h-10 hover:text-[#db2777] px-2 py-1 mt-6 bg-[#fff] rounded"
              >
            <Image src='/G.png' width={20} height={20} className="absolute left-12 top-[10px]" />
              Login with Google
            </button>
              </div>
    </div>
  );
};

export default Login;



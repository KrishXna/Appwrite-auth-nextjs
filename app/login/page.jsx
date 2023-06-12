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
    <div className="flex justify-center py-10">
      <div className="shadow-md p-16 max-w-xl bg-[#40407a] rounded-xl">
        <h1 className="text-2xl text-white text-center mb-10">
          Login with AppWrite
        </h1>

        <div className="flex justify-between m-4">
          <label
            htmlFor="email"
            className="mr-2 font-semibold text-xl text-[#fff]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter email"
            className="border-2 outline-none px-2 rounded"
          />
        </div>
        <div className="flex justify-between m-4">
          <label
            htmlFor="password"
            className="mr-2 font-semibold text-xl text-[#fff]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter password"
            className="border-2 outline-none px-2 rounded"
          />
        </div>
        <p className="text-center text-[#fff]">
          Don't have an account?&nbsp;
          <Link href="/signup">
            <span className="text-blue-400">Sign Up</span>
          </Link>
        </p>
        <div className="mt-2 text-center">
          <button
            onClick={() => handleLogin(user.email, user.password)}
            className="w-full text-[#fff] font-bold px-2 py-1 bg-[#2c2c54] hover:bg-white hover:text-black rounded"
          >
            Login
          </button>
            <button
              onClick={loginWithGoogle}
              className="relative w-full hover:bg-[#2c2c54]  text-[#000] font-bold px-2 py-1 mt-4 bg-[#fff] hover:text-white rounded"
            >
            <Image src='/G.png' width={20} height={20} className="absolute left-20 top-2" />
              Login with Google
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

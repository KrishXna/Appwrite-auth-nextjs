"use client";
import Link from "next/link";
import Image from "next/image";
import { account } from "@/appwrite/appwriteconfig";

async function handleSignUp(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  const name = e.target.name.value;

  const res = await account.create(
    `${Math.ceil(Math.random() * 100000000)}`,
    email,
    password,
    name
  );
  alert("Account Created Successfully");
}
const Signup = () => {
  return (
    <div className="flex justify-center text-black mt-8">
      <div className="shadow-md w-[450px] p-16 bg-gray-300 rounded-xl">
        <h1 className="text-2xl text-center font-bold mb-10">Create Account</h1>
        <form onSubmit={handleSignUp}>
          <div className="relative">
            <Image
              src="/user-solid.svg"
              alt="user icon"
              width={14}
              height={12}
              className="absolute top-9 left-2"
            />{" "}
            &nbsp;
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              className="px-8 rounded text-[14px] w-full h-10 focus:ring-2 focus:ring-[#db2777] outline-none"
            />
          </div>
          <div className="relative">
            <Image
              src="/envelope-solid.svg"
              alt="email icon"
              width={16}
              height={12}
              className="absolute top-[45px] left-2"
            />{" "}
            &nbsp;
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="px-8 mt-2 rounded text-[14px] w-full h-10 focus:ring-2 focus:ring-[#db2777] outline-none"
            />
          </div>
          <div className="relative">
            <Image
              src="/lock-solid.svg"
              alt="password icon"
              width={14}
              height={12}
              className="absolute top-[45px] left-2"
            />{" "}
            &nbsp;
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="px-8 mt-2 rounded text-[14px] w-full h-10 focus:ring-2 focus:ring-[#db2777] outline-none"
            />
          </div>
          <p className="text-center mt-6 font-Poppins">
            Already have an account? &nbsp;
            <Link href="/login">
              <span className="text-[#db2777] font-Poppins">Login</span>
            </Link>
          </p>
          <button
            type="submit"
            className="w-full mt-6 h-12 px-2 py-1 font-bold hover:text-[#db2777] bg-[#db2777] text-white hover:bg-white rounded"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

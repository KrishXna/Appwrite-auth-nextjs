"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { account } from "@/Appwrite/appwriteConfig";
const Navbar = () => {
    let data = Object.values(JSON.parse(localStorage.getItem("cookieFallback")))[0];
    
    const handleLogout = async ()=>{
        const res = await account.deleteSession('current');
        console.log("User Logout");
        window.location.href="/"
    }

    return (
        <div className="w-full h-16  text-[#db2777] p-4">
            {data ? (
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex">
                        <Image src="/appwrite.svg" alt="Logo" width={200} height={80} /> &nbsp;
                    </Link>
                    <button onClick={handleLogout} className="font-semibold px-2 py-1 mr-4 text-md border-2 border-[#db2777] text-[#fff] bg-[#db2777] hover:bg-[#fff] hover:text-[#db2777] rounded">Logout</button>
                </div>
            ) : (
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex">
                        <Image src="/appwrite.svg" alt="Logo" width={200} height={80} /> &nbsp;
                    </Link>
                    <ul className="flex">
                        <Link href="/login">
                            <li className="ms-8 cursor-pointer font-bold text-xl font-Helvetica">Login</li>
                        </Link>
                        <Link href="/signup">
                            <li className="ms-8 cursor-pointe font-bold text-xl font-Helvetica">Signup</li>
                        </Link>
                        <Link href="/profile">
                            <li className="ms-8 cursor-pointer font-bold text-xl font-Helvetica">Profile</li>
                        </Link>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;

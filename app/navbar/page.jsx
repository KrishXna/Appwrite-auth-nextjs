import React from "react";
import Link from "next/link";
import Image from 'next/image';
const Navbar = () => {

    return (
        <div className="w-full h-16  text-[#db2777] p-4">
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
        </div>
    );
};

export default Navbar;

import React from "react";
import Link from "next/link";
import Image from 'next/image';
const Navbar = () => {

    return (
        <div className="w-full h-16 bg-[#2c2c54] text-[#fff] px-6">
            <div className="flex justify-between items-center pt-4">
                <div>
                    <ul className="flex">
                        <Image src="/appwrite-logo2.png" alt="Logo" width={50} height={50} /> &nbsp;
                        <Link href="/">
                            <li className="text-2xl font-bold">AppWrite</li>
                        </Link>
                    </ul>
                </div>
                <div>
                        <ul className="flex">
                            <Link href="/login">
                                <li className="ms-8 cursor-pointer font-semibold">Login</li>
                            </Link>
                            <Link href="/signup">
                                <li className="ms-8 cursor-pointer font-semibold">Signup</li>
                            </Link>
                            <Link href="/profile">
                                <li className="ms-8 cursor-pointer font-semibold">Profile</li>
                            </Link>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

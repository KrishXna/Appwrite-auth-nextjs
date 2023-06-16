"use client"
import Link from "next/link";
import Image from 'next/image';
import { account } from "@/Appwrite/appwriteConfig";
import { useEffect, useState } from "react"; 
import { useRouter } from 'next/navigation'

const Navbar = async() => {
const router = useRouter()
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    const res = await account.deleteSession('current');
    setUser(null)
    router.push('/login')
    console.log("User Logout");
  }

  useEffect(()=> {
    (async () => {
      setUser(await account.getSession("current"))
    })()
  },[])

  return (
    <div className="w-full h-16  text-[#db2777] p-4">
      <div className="flex justify-between items-center">
          <Image src="/appwrite.svg" alt="Logo" width={200} height={80} />
        {user && (
          <div className="flex">
          <Link href="/profile">
            <p className="mt-1 cursor-pointer font-bold text-xl">Profile</p>
          </Link>
          <button onClick={() => handleLogout()} className="font-semibold px-2 py-1 mr-4 ms-4 text-md border-2 border-[#db2777] text-[#fff] bg-[#db2777] hover:bg-[#fff] hover:text-[#db2777] rounded">Logout</button>
          </div>
        )}
        {!user && (
          <ul className="flex">
            <Link href="/login">
              <li className="ms-8 cursor-pointer font-bold text-xl">Login</li>
            </Link>
            <Link href="/signup">
              <li className="ms-8 cursor-pointe font-bold text-xl">Signup</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;

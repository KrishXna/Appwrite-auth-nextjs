"use client"
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { account } from "@/appwrite/appwriteconfig";

export default function Logout(){
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const router = useRouter()

    const userLogout = async() => {
      const res = await account.deleteSession('current')
    }
    async function handleLogout(e){
      e.preventDefault()
      removeCookie("user", {
        path: "/",
        sameSite: true,
      });
      userLogout()
      router.push('/')
    }
      return(
        <>
        <form onSubmit={handleLogout}>
                <button
                  className="bg-[#db2777] text-white px-2 py-1 hover:bg-white hover:text-[#db2777] font-bold rounded"
                >
                  Logout
                </button>
                </form>
        </>
      )
}
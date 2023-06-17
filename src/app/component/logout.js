"use client"
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function Logout(){
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const router = useRouter()
    
    async function handleLogout(e){
      e.preventDefault()
      removeCookie("user", {
        path: "/",
        sameSite: true,
      });
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
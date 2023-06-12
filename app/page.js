"use client"
import Signup from "./signup/page"
import Profile from "./profile/page"

export default function Home() {
  let data = localStorage.getItem("cookieFallback");
  return (
    <>
    {
      data ? <Profile /> : <Signup />
    }
    </>
  )
}

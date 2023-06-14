import Signup from "./signup/page"
import Profile from "./profile/page"

export default function Home() {
  let data;

  try {
      data = localStorage ? Object.values(JSON.parse(localStorage.getItem("cookieFallback")))[0] : undefined;
  } catch(e) {
      data = undefined
  }
  return (
    <>
    {
      data ? <Profile /> : <Signup />
    }
    </>
  )
}

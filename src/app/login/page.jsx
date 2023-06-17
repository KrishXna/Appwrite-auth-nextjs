"use client";
import Link from "next/link";
import Image from "next/image";
import { account } from "@/appwrite/appwriteconfig";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [, setCookie] = useCookies(["user"]);
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await account.createEmailSession(email, password);
    router.push("/dashboard");
    // console.log(res);
    setCookie("user", JSON.stringify(res), {
      path: "/",
      maxAge: 3600,
      sameSite: true,
    });
  };

  const loginWithGoogle = async () => {
    const res = account.createOAuth2Session(
      "google",
      "http://localhost:3000",
      "http://localhost:3000/login"
    );
    const token = await account.createJWT();
    const decoded = jwt_decode(token.jwt);

    const userData = await account.getSession(decoded.sessionId);

    setCookie("user", JSON.stringify(userData), {
      path: "/",
      maxAge: 3600,
      sameSite: true,
    });

    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center text-black mt-8">
      <div className="shadow-md w-[450px] p-16 bg-gray-300 rounded-xl">
        <h1 className="text-2xl font-bold text-center mb-10">
          Login with AppWrite
        </h1>
        <form
          onSubmit={handleLogin}
          encType="application/x-www-form-urlencoded"
        >
          <div className="relative">
            <Image
              src="/envelope-solid.svg"
              alt="email icon"
              width={16}
              height={12}
              className="absolute top-9 left-2"
            />{" "}
            &nbsp;
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="px-8 rounded text-[14px] w-full h-10 focus:ring-2 focus:ring-[#db2777] outline-none"
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
              className="px-8 rounded text-[14px] w-full h-10 mt-2 focus:ring-2 focus:ring-[#db2777] outline-none"
            />
          </div>
          <p className="text-center text-[#000] font-Poppins mt-6">
            Don't have an account?&nbsp;
            <Link href="/signup">
              <span className="text-[#db2777] font-Poppins">Sign Up</span>
            </Link>
          </p>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="w-full h-12 px-2 py-1 font-bold hover:text-[#db2777] bg-[#db2777] text-white hover:bg-white rounded"
            >
              Login
            </button>
          </div>
          <button
            onClick={loginWithGoogle}
            className="relative w-full font-bold h-12 hover:text-[#db2777] px-2 py-1 mt-6 bg-[#fff] rounded"
          >
            <Image
              src="/G.png"
              width={20}
              height={20}
              className="absolute left-16 top-[13px]"
            />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

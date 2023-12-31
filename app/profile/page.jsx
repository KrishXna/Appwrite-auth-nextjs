"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { account } from "../../Appwrite/appwriteConfig";
import Image from "next/image";
import { useUserContext } from "@/context/authContext";

const Profile = async () => {
  const { userData, setUserData } = useUserContext();

  const getUser = async () => {
    const res = await account.get();
    setUserData(res);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div className="flex justify-center py-10">
        {userData ? (
          <div className="relative mx-auto">
            <div className="flex justify-center">
              <Image
                src="/4471124-02.svg"
                alt="profile card"
                width={400}
                height={570}
              />

              <h1 className="absolute top-6 right-10 text-2xl text-[#fff]">
                app<span className="font-bold">write</span>
              </h1>

              <img
                className="h-36 w-36 rounded-full absolute top-20"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan_Abromov"
              />
            </div>
            <div className="absolute top-[250px] left-1/2 -translate-x-1/2 w-[70%]">
              <div>
                <h1 className="text-3xl mb-6 text-center">{userData?.name}</h1>
                <table>
                  <tbody>
                    <tr>
                      <td className="p-2 text-[#db2777] font-bold">ID</td>
                      <td>{userData?.$id}</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-[#db2777] font-bold">EMAIL</td>
                      <td>{userData?.email}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-center mt-5">
                  <Image
                    src="/linkedin.svg"
                    alt="linkedin"
                    width={22}
                    height={22}
                    className=""
                  />{" "}
                  &nbsp;
                  <Image
                    src="/square-facebook.svg"
                    alt="fb"
                    width={22}
                    height={22}
                    className="ms-6"
                  />{" "}
                  &nbsp;
                  <Image
                    src="/square-instagram.svg"
                    alt="insta"
                    width={22}
                    height={22}
                    className="ms-6"
                  />{" "}
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div>You are not Login. Please Login !</div>
            <div>
              <Link href="/login">
                <button className="mt-5 ms-4 bg-[#db2777] text-white font-bold px-2 py-1 rounded">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="mt-5 ms-4 bg-[#db2777] text-white font-bold px-2 py-1 rounded">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;

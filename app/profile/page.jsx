"use client"
import { account } from "../../Appwrite/appwriteConfig";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getLoggedInUser();
    }, []);

    const getLoggedInUser = async () => {
        try {
            const res = await account.get();
            setUser(res);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async () => {
        try {
            const res = await account.deleteSession('current');
            if (res) {
                window.location.href = "/login";
                console.log("User Logout");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex justify-center py-10">
                {user ? (
                    <div className="shadow-md w-1/3 p-16 bg-gray-300 rounded-xl">
                        <h1 className="text-2xl text-center font-bold mb-10">
                            User Details
                        </h1>
                        {user && (
                            <ul className="font-Poppins">
                                <li>User Name: {user?.name.toUpperCase()}</li>
                                <li>User Email: {user?.email}</li>
                                <li>UserId: {user?.$id}</li>
                                <li>Created: {new Date(user.$createdAt).toDateString()}</li>
                            </ul>
                        )}
                        <button
                            onClick={handleLogout}
                            className="mt-5 ms-4 hover:text-[#db2777] bg-[#db2777] text-white hover:bg-white font-bold px-2 py-1 rounded"
                        >
                            Logout
                        </button>
                    </div>
                ) :
                    <div className="flex flex-col items-center">
                        <div>You are not Login. Please Login !</div>
                        <div>
                            <Link href='/login'>
                                <button
                                    className="mt-5 ms-4 bg-[#db2777] text-white font-bold px-2 py-1 rounded"
                                >
                                    Login
                                </button>
                            </Link>
                            <Link href='/signup'>
                                <button
                                    className="mt-5 ms-4 bg-[#db2777] text-white font-bold px-2 py-1 rounded"
                                >
                                    Signup
                                </button>
                            </Link>
                        </div>
                    </div>
                }
        </div >
        </>
    );
};

export default Profile;

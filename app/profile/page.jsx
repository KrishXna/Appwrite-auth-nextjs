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
            <div className="flex justify-center py-10 text-white">
                {user ? (
                    <div className="shadow-md p-16 max-w-xl bg-[#40407a] rounded-xl">
                        <h1 className="text-2xl text-white text-center mb-10">
                            User Details
                        </h1>
                        {user && (
                            <ul>
                                <li>User Name: {user?.name.toUpperCase()}</li>
                                <li>User Email: {user?.email}</li>
                                <li>UserId: {user?.$id}</li>
                                <li>Created: {new Date(user.$createdAt).toDateString()}</li>
                            </ul>
                        )}

                        <button
                            onClick={handleLogout}
                            className="mt-4 bg-[#2c2c54] hover:bg-white hover:text-black text-[#fff] font-bold px-2 py-1 rounded"
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
                                    className="mt-5 bg-[#40407a] hover:bg-white hover:text-black font-bold px-2 py-1 rounded"
                                >
                                    Login
                                </button>
                            </Link>
                            <Link href='/signup'>
                                <button
                                    className="mt-5 ms-4 bg-[#40407a] hover:bg-white hover:text-black font-bold px-2 py-1 rounded"
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

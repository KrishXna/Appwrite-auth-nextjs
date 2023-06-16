'use server';
import { account } from "@/Appwrite/appwriteConfig";

export async function getUser(){
    const res = await account.getSession("current");
    return res;
}
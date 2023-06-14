import { cookies } from 'next/headers'

export async function handleSignUp(data) {
    'use server';
    const user = cookies().get('data')?.value
    console.log(user,'9');
  }
 

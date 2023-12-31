import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/page'
const inter = Inter({ subsets: ['latin'] })
import AuthContext from '@/context/authContext'
export const metadata = {
  title: 'Appwrite Auth',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContext>
        <Navbar />
      {children}
      </AuthContext>
      </body>
    </html>
  )
}

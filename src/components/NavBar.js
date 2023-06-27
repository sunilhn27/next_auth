"use client"
import Link from 'next/link'
import React from 'react'
import Profile from './Profile'
import { useSession } from 'next-auth/react'

function NavBar() {

    const { data: session, status } = useSession();


    console.log(status)
    return (
        <nav className='bg-blue-600 text-white'>
        <div className='flex justify-between mx-5 py-5 items-center'>
          <div>
            <h1>IAMJackie</h1>
          </div>
          <div className='flex flex-row-reverse gap-5 items-center'>
            <Profile />
            {status === 'authenticated' && (
              <>
                <Link href='/'>Home</Link>
                <Link href='/products'>Products</Link>
                <Link href='/prices'>Prices</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    )
}

export default NavBar
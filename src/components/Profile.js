"use client"
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image';

function Profile() {
    const { data: session, status } = useSession();

    const handleSignOut = () => {
        signOut();
    }

    if (status === "authenticated") {
        return (

            < div className='flex flex-row  space-x-2 ' >
                <Image className='rounded-full' src={session.user.image} height={40} width={40} alt='profile'></Image>
                <button button="true" className="bg-orange-500 px-4 py-1 rounded-lg" onClick={handleSignOut}> Sign Out</button >
            </div >
        )
    } else {
        return (
            <div>
                <button className="bg-orange-500 px-4 py-1 rounded-lg" button="true" onClick={() => signIn("github")}>Sign In</button>
            </div>
        )
    }
}

export default Profile
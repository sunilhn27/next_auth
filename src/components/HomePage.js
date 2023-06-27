"use client"
import React from 'react'
import { useSession,  } from 'next-auth/react';

function HomePage() {

    const { data: session, status } = useSession();
    
    return (
        <div>
            <h1 className='flex flex-col justify-center items-center h-screen space-y-4 text-3xl font-bold shadow-xl border-1'>
                {session? (<>{`Welcome ${session.user.name}`}</>):""}
            </h1>
        </div>
    )
}

export default HomePage
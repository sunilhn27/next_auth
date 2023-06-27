"use client"
import React from 'react';
import { useSession, signIn } from 'next-auth/react';

function Login() {
  const { data: session, status } = useSession();


  

  return (
    <>
      {status !== 'authenticated' ? (
        <div className='flex flex-col justify-center items-center h-screen space-y-4'>
          <div>
            <h1>Login to get Started</h1>
          </div>
          <div>
            <button onClick={() => signIn('github')} className='bg-black px-4 py-2 text-white rounded-xl text-xl'>
              Sign in With GitHub
            </button>
          </div>
        </div>
      ) : (<div>
        <h1 className='flex flex-col justify-center items-center h-screen space-y-4 text-3xl font-bold shadow-xl border-1'>Welcome {session.user.name}</h1>
      </div>)}
    </>
  );
}

export default Login;

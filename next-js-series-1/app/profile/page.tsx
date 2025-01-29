import Link from 'next/link'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-y-10'>
        <h1 className='text-3xl text-center'> Profile Page</h1>
        <Link href={"/profile/settings"}>
                Go to Setting
        </Link>

        <Link href={"/login"}>
                Go to Login
        </Link>
    </div>
  )
}

export default ProfilePage
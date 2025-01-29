import Link from 'next/link'
import React from 'react'

const SettingPage = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-y-10'>
    <h1 className='text-3xl text-center'> Setting Page</h1>
    <Link href={"/profile"}>
            Go to Profile
    </Link>
</div>
  )
}

export default SettingPage

// (.)
// (..)
// (..)(..)
// (...)
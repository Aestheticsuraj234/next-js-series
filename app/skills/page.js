import React from 'react'

const NotFound = () => {
  return (
    <div className='bg-[#353935] h-screen flex flex-col justify-center items-center'>
        {/* img */}
        <img src='/not-found.svg'  height={500} width={500}/>
        {/* h1 */}
        <h1 className='text-4xl font-bold text-zinc-800'>
            This Page is Not Found
        </h1>
        {/* p */}
    <p className='text-2xl font-semibold  text-red-400'>
        this page is not found click the below button to back.
    </p>
        {/* button */}
    </div>
  )
}

export default NotFound
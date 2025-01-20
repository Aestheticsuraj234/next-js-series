"use client";
import { House } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";


const NotFound = () => {
  const router = useRouter()

  const onHome = ()=>{
    router.push("/")
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* img */}
      <img src="/not-found.svg" height={500} width={500} />
      {/* h1 */}
      <h1 className="text-5xl font-bold text-zinc-700 mt-5">
        This Page is Not Found
      </h1>
      {/* p */}
      <p className="text-xl font-semibold  text-zinc-500 mt-5">
        this page is not found click the below button to back.
      </p>
      <button onClick={onHome} className="px-6 py-2 bg-green-500 border rounded-xl font-bold text-white mt-10 flex gap-1">
      <House />
        Home
      </button>
      {/* button */}
    </div>
  );
};

export default NotFound;

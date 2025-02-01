"use client"
import React from 'react';
import { useEffect , useState } from 'react';

const UserPage = () => {
const [user, setUser] = useState(null);

useEffect(()=>{
  async function fetchUser(){
    const res = await fetch("/api/example");
    const data = await res.json();
    setUser(data);
  }

  fetchUser();
},[])

const createUser = async ()=>{
  const response = await fetch("/api/example",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify({name: "Suraj Jha"})
  });

  const data = await response.json();
  console.log(data);
}

  return (
    <div className='h-screen mt-10 mx-10'>
      {JSON.stringify(user)}
      <button onClick={createUser} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Create User
      </button>
    </div>
  )
}

export default UserPage
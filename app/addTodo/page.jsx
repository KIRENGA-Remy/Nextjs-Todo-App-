"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleAddTodo = async (e) => {
    e.preventDefault();

    if(!title || !description){
      alert("Title or Description are required");
      return;
    }
    try {
    const response = await fetch("http://localhost:3000/addTodo", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ title, description})
    })
    if(response.ok){
      router.push('/');
    } else{
      throw new Error("Failed to create a todo")
    }
    } catch (err) {
      console.log("Error while todo creation", err);
    }
  }
  return (
    <form className='flex flex-col gap-3' onSubmit={handleAddTodo}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Todo Title...' className='border border-slate-500 px-8 py-2' />
      <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Todo Description...' className='border border-slate-500 px-8 py-2' />
      <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Add Todo</button>
    </form>
  )
}

export default AddTodo

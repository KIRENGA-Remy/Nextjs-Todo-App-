"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function EditTodoForm({ id, title, description}) {

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter;

  const handleUpdateTodo = async (e) => {
    e.preventDefault();
    try {
      const update = await fetch(`http://localhost:3000/api/todo/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ newTitle, newDescription})
      })
      if(!update.ok){
        throw new Error("Failed to update todo")
      }
      router.refresh();
      router.push("/");
    } catch (err) {
      alert("Failed to update todo")
      console.log("Failed to update todo", err);
      
    }
  }
  return (
    <form onSubmit={handleUpdateTodo} className='flex flex-col gap-3'>
      <input type="text" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} placeholder='Todo Title...' className='border border-slate-500 px-8 py-2' />
      <input type="text" onChange={(e) => setNewDescription(e.target.value)} value={newDescription} placeholder='Todo Description...' className='border border-slate-500 px-8 py-2' />
      <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Update Todo</button>
    </form>
  )
}

export default EditTodoForm

"use client"; 
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleAddTodo = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title or Description are required');
      return;
    }

    try {
      const response = await fetch(`${process.env.FRONTEND_URL}/api/todo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        router.refresh();
        router.push('/');
      } else {
        throw new Error('Failed to create a todo');
      }
    } catch (err) {
      console.error('Error while creating todo:', err);
    }
  };

  return (
    <form className='flex flex-col gap-3' onSubmit={handleAddTodo}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder='Todo Title...'
        className='border border-slate-500 px-8 py-2'
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder='Todo Description...'
        className='border border-slate-500 px-8 py-2'
      />
      <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;

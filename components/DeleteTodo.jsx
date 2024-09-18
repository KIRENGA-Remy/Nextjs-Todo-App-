"use client"
import React from 'react';
import { MdDelete } from "react-icons/md";
import { useRouter } from 'next/navigation'; 

function DeleteTodo({ id }) {
  const router = useRouter(); 

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/todo?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.refresh(); // Refreshes the page after deleting the todo
      } else {
        throw new Error('Failed to delete todo');
      }
    } catch (err) {
      console.log("Error deleting todo", err);
    }
  };

  return (
    <button onClick={handleDelete}>
      <MdDelete className='cursor-pointer text-red-600' />
    </button>
  );
}

export default DeleteTodo;

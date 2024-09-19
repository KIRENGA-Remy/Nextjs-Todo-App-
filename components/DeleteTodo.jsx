"use client";
import React from 'react';
import { MdDelete } from "react-icons/md";
import { useRouter } from 'next/navigation'; 

function DeleteTodo({ id }) {
  const router = useRouter(); 

  const handleDelete = async () => {
    console.log("Button togged");
    
    const comfirm = comfirm("Are you sure?")
    if(comfirm){
    try {
      const response = await fetch(`http://localhost:3000/api/todo?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.refresh(); // Refreshes the page after deleting the todo
      } else {
        throw new Error('Failed to delete todo');
      }
    } catch (err) {
      console.log("Error deleting todo", err);
      // You can display a user-friendly error message here
      alert("Failed to delete todo. Please try again.");
    }
  } else {
    alert("Delete Todo canceled")
  }
  };

  return (
    <button onClick={handleDelete} aria-label="Delete Todo">
      <MdDelete className='cursor-pointer text-red-600' />
    </button>
  );
}

export default DeleteTodo;

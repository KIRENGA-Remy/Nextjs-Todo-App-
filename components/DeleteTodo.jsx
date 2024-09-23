"use client";
import { MdDelete } from "react-icons/md";
import { useRouter } from 'next/navigation'; 

function DeleteTodo({ id }) {
  const router = useRouter(); 

  const handleDelete = async () => {
    console.log("Button clicked");

    const isConfirmed = confirm("Are you sure you want to delete this todo?");
    
    if (isConfirmed) {
      const response = await fetch(`http://localhost:3000/api/todo?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Todo deleted successfully');
        
        // Set a timeout for 30 seconds (30,000 milliseconds) before refreshing
        setTimeout(() => {
          router.refresh();
        }, 30000); // 30 seconds delay

        alert("Todo deleted. The page will refresh in 30 seconds.");
      } else {
        alert("Failed to delete the todo.");
      }
    } else {
      alert("Todo deletion canceled");
    }
  };

  return (
    <button onClick={handleDelete} aria-label="Delete Todo">
      <MdDelete className='cursor-pointer text-red-600' />
    </button>
  );
}

export default DeleteTodo;

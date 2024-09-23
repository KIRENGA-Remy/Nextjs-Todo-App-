"use client";
import { MdDelete } from "react-icons/md";
import { useRouter } from 'next/navigation'; 

function DeleteTodo({ id }) {
  const router = useRouter(); 

  const handleDelete = async () => {

    const isConfirmed = confirm("Are you sure you want to delete this todo?");
    
    if (isConfirmed) {
      const response = await fetch(`${process.env.FRONTEND_URL}/api/todo?id=${id}`, {
        method: 'DELETE',
      });
      router.refresh();
      if (response.ok) {
          router.refresh();
          router.push("/");
          router.refresh();
      } else {
        alert("Failed to delete the todo.");
        router.refresh();
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

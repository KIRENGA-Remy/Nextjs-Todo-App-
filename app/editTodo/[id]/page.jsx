// import React from 'react'


//   const updateTodoById = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
//         cache: "no-store",
//       })
//       if(!response.ok){
//         throw new Error("Failed to fetch todo");
//       }
//       return response.json();
//     } catch (err) {
//       console.log("Error while updating todo", err);
      
//     }
//   }

//   async function EditTodo({params}) {
//     const { id } = params;
//     console.log("id", id);
//     const { todo } = await updateTodoById(id);
//     const { title, description } = todo;
    
//   return (
//     <form action="" className='flex flex-col gap-3'>
//       <input type="text" placeholder='Todo Title...' className='border border-slate-500 px-8 py-2' />
//       <input type="text" placeholder='Todo Description...' className='border border-slate-500 px-8 py-2' />
//       <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Update Todo</button>
//     </form>
//   )
// }

// export default EditTodo

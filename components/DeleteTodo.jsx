// import React from 'react'
// import { MdDelete } from "react-icons/md";
// import { useRouter } from 'next/router';

// function DeleteTodo({ id }) {
//     const router = useRouter();
//     const removeTodo = async () => {
//     const comfirm = comfirm("Are you sure?")

//     if(comfirm){
//        const response = await fetch(`http://localhost:3000/api/todo?id=${id}`,{
//             method: "DELETE",
//         }
//         )
//         if(response.ok){
//             router.refresh();
//         }
//     }
// }
//   return (
//     <button onClick={removeTodo} className='text-red-600 cursor-pointer '>      
//        <MdDelete className='font-bold text-3xl'/>
//     </button>
//   )
// }

// export default DeleteTodo

import Link from 'next/link';
import React from 'react'
import { FaEdit} from 'react-icons/fa'

const getTodos = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/todo",{
                cache: 'no-store',
            })
        if(!response.ok){
            throw new Error("Failed to fetch todos")
        }
        return response.json();
    } catch (err) {
        console.log("Error while fetching todos", err);
        // Handle the error here, maybe display an error message to the user
        return []; // Or an empty array to prevent further errors
    } 
}

async function TopicsList() {
    const { todos = [] } = await getTodos()
    
  return (
    <>
    { todos.map((t) => (
    <div className='flex flex-row justify-between p-6 border-l border-b-2 border-black shadow-md rounded-sm my-4'>
      <div className='flex flex-col gap-2'>
        <h2 className='font-bold text-3xl text-black'>{t.title}</h2>
        <p className='text-xl text-slate-800'>{t.description}</p>
      </div>
      <div className='flex flex-row gap-2 font-bold text-3xl'>
        <div>
            <Link href={`/editTodo/${t._id}`}>
                <FaEdit className='cursor-pointer' />
            </Link>
       </div>
       <DeleteTodo id={t._id} />
      </div>
    </div>
     ) )
} 
</>
  )
}

export default TopicsList

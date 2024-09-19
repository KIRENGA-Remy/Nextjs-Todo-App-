// "use client"
// import Link from 'next/link';
// import React from 'react'
// import { FaEdit} from 'react-icons/fa'
// import DeleteTodo from './DeleteTodo'
// import getTodos from './GetTodos'


// async function TopicsList() {
//     const todos = await getTodos()
//     console.log(todos ," or ", {todos});
    
//   return (
//     <>
//     { todos.map((t) => (
//     <div className='flex flex-row justify-between p-6 border-l border-b-2 border-black shadow-md rounded-sm my-4'>
//       <div className='flex flex-col gap-2'>
//         <h2 className='font-bold text-3xl text-black'>{t.title}</h2>
//         <p className='text-xl text-slate-800'>{t.description}</p>
//       </div>
//       <div className='flex flex-row gap-2 font-bold text-3xl'>
//         <div>
//             <Link href={`/editTodo/${t._id}`}>
//                 <FaEdit className='cursor-pointer' />
//             </Link>
//        </div>
//        <DeleteTodo id={t._id} />
//       </div>
//     </div>
//      ) )
// } 
// </>
//   )
// }

// export default TopicsList









"use client";
import Link from 'next/link';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import DeleteTodo from './DeleteTodo';
import getTodos from './GetTodos';

async function TopicsList() {
    const {todos} = await getTodos(); // Fetch todos
    console.log(" or " , {todos});
    

    return (
        <>
            {todos.map((t) => (
                    <div key={t._id} className='flex flex-row justify-between p-6 border border-black rounded-sm my-4'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-bold text-3xl text-black'>{t.title}</h2>
                            <p className='text-xl text-slate-800'>{t.description}</p>
                        </div>
                        <div className='flex flex-row gap-2 font-bold items-baseline text-3xl'>
                                <Link href={`/editTodo/${t._id}`}>
                                    <FaEdit className='cursor-pointer' />
                                </Link>
                            <DeleteTodo id={t._id} />
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default TopicsList;

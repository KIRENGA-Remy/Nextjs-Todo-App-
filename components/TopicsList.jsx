import React from 'react'
import { FaEdit} from 'react-icons/fa'
import { MdDelete } from "react-icons/md";

function TopicsList() {
  return (
    <div className='flex flex-row justify-between p-6 border-l border-b-2 border-black shadow-md rounded-sm my-4'>
      <div className='flex flex-col gap-2'>
        <h2 className='font-bold text-3xl text-black'>Title</h2>
        <p className='text-xl text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
             maxime alias. Sapiente dolor magni, voluptatibus nemo perferendis 
             voluptates ea ad eveniet laboriosam illum quaerat
             labore. Odio necessitatibus doloribus nesciunt recusandae?</p>
      </div>
      <div className='flex flex-row gap-2 font-bold text-3xl'>
       <FaEdit className='cursor-pointer' />
       <MdDelete className='text-red-600 cursor-pointer'/>
      </div>
    </div>
  )
}

export default TopicsList

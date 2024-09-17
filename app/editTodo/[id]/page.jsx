import React from 'react'

function EditTodo() {
  return (
    <form action="" className='flex flex-col gap-3'>
      <input type="text" placeholder='Todo Title...' className='border border-slate-500 px-8 py-2' />
      <input type="text" placeholder='Todo Description...' className='border border-slate-500 px-8 py-2' />
      <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Update Todo</button>
    </form>
  )
}

export default EditTodo

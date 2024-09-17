import React from 'react'

function AddTodo() {
  return (
    <form action="" className='flex flex-col gap-3'>
      <input type="text" placeholder='Todo Title...' className='border border-slate-500 px-8 py-2' />
      <input type="text" placeholder='Todo Description...' className='border border-slate-500 px-8 py-2' />
      <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Add Todo</button>
    </form>
  )
}

export default AddTodo

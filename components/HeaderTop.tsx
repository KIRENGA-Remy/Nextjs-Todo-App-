import React from 'react'

function HeaderTop() {
  return (
    <div className='flex justify-around py-6'>
      <div className='font-bold text-2xl'>FOODIED</div>
      <div className='flex flex-row gap-4'>
        <p className='text-black font-semibold capitalize text-xl cursor-pointer hover:underline'>Home</p>
        <p className='text-black font-semibold capitalize text-xl cursor-pointer hover:underline'>Menu</p>
        <p className='text-black font-semibold capitalize text-xl cursor-pointer hover:underline'>Orders</p>
        <p className='text-black font-semibold capitalize text-xl cursor-pointer hover:underline'>About us</p>
        <p className='text-black font-semibold capitalize text-xl cursor-pointer hover:underline'>Contacts</p>
        <button className='px-3 py-1 bg-white text-black rounded-md font-semibold cursor-pointer'>Login</button>
        <button className='px-3 py-1 bg-green-500 text-black rounded-md font-semibold cursor-pointer'>Signup</button>
      </div>
    </div>
  )
}

export default HeaderTop

import Image from 'next/image'
import React from 'react'

function HeaderMain() {
  return (
    <div className='flex flex-col mx-32 my-16'>
      <div className='border rounded-full py-2 px-4 mx-8 w-max '>Hungry?</div>
      <div className='mx-8 my-10 font-semibold text-gray-600 text-4xl'>JUST COME TO <br/>FOODIED & ORDER MEAL</div>
      <div className='mx-8 my-2 text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae nesciunt <br/> pariatur maxime cum facere, labore minima cumque.</div>
      <div>
      <Image src="/chicken-masala.png" className="absolute right-24 -mt-4 w-1/3 h-1/3" width={100} height={200} alt="" />
      </div>
    </div>
  )
}

export default HeaderMain

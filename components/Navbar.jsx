import Link from 'next/link'

function Navbar() {
  return (
    <nav className='m-auto my-8 max-w-3xl flex flex-row bg-slate-800 text-white justify-between px-6 py-4'>
        <Link href={"/"} className='font-bold text-2xl'>TODO APP</Link>
        <Link href={"/addTodo"} className='bg-white rounded-sm p-2 text-slate-800 font-bold'>Add Todo</Link>
    </nav>
  )
}

export default Navbar

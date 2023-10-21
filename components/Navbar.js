import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (

   <>
    <div>
    <h1 className='ml-20 mb-8 mt- txet-white text-3xl sefia-0'>Product-management system</h1>
    </div>
    <nav className='flex justify-between items-center bg-yellow-700 px-8 py-3'>
      <Link className='text-white font-bold ' href="/">Product-lists</Link>
      <Link className='bg-white p-2 hover:rounded-full hover:bg-gray-600' href="/addProduct">Add Product</Link>
    </nav>
   </>
  )
}

export default Navbar

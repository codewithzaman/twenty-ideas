import React from 'react';
import logo from "./../assets/profile.avif"

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center shadow-lg p-4 border rounded-lg'>
        <button className="btn btn-primary btn-sm md:btn-md ">+ New ideas</button>
        <h2 className='font-bold text-sm md:text-2xl'>Top 20 ideas</h2>
        <div className='flex gap-2 items-center '>
            <img src={logo} alt="profile" className='w-10 h-10 rounded-full' />
            <h2 className='font-bold text-sm hidden md:block '>by CodeWithZaman</h2>
        </div>
    </div>
  )
}

export default Header
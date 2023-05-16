import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai';

const Input = () => {
  return (
    <div className='p-3 flex justify-between'>
        <input type="text" className='p-3 border-2 border-slate-400 w-[90%] focus:outline-none ' />
        <div className='cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center place-items-center'>
            <AiOutlinePlus/>
        </div>
    </div>
  )
}

export default Input
import React from 'react'
import {BsTrash} from 'react-icons/bs';
import { useState } from 'react';

const Items = (props) => {
    const [Done, setDone] = useState(false);
    
  return (
    <div className='w-full border-b p-3 flex justify-between'>
    <div className='cursor-pointer'>
        <span className='pr-4 text-[14px] text-slate-400'>
            {props.time}
        </span>
        <span onClick={()=>setDone(!Done)} className={`${Done===true ? 'line-through': ' '}`}>
            {props.items}
        </span>
    </div>
    <div className='text-[#e74c3c] cursor-pointer' onClick={()=>props.removeHandler(props.id)}>
    <BsTrash/>
    </div>
      
    </div>
  )
}

export default Items
import React from 'react'
import Items from './Items'

const TodoBox = (props) => {
  const items =props.data.map((singledata, index)=>{
    return(
      <Items removeHandler={props.removeHandler} key={index} id={index} items={singledata.item} time={singledata.time} />
    )
  })
  return (
    <div className='p-3 '>
        {items}
    </div>
  )
}

export default TodoBox
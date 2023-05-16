import React from 'react'
import Items from './Items'

const TodoBox = (props) => {
  const items =props.data.map((singledata, key)=>{
    return(
      <Items key={key} items={singledata.item} time={singledata.time} />
    )
  })
  return (
    <div className='p-3 '>
        {items}
    </div>
  )
}

export default TodoBox
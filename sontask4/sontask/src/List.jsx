import React from 'react'

const List = ({id, title}) => {
  return (
    <div className='flex'>
        <p>{id}</p>
        <p>{title}</p>
    </div>
  )
}

export default List
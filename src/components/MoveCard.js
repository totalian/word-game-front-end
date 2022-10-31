import React from 'react'

const MoveCard = ({name, description, example, costDescription, color}) => {
  return (
    <div className=' bg-white flex flex-col p-2 gap-1'>
        <div className='flex justify-between items-center'><span className='uppercase font-black text-xs'>{name}</span><div className={`h-3 w-3 ${color}`}></div></div>
        <div className='text-sm'>{description}</div>
        <div className='text-sm'>eg. {example}</div>
        <div className='text-sm italic'>Cost: {costDescription}</div>
    </div>
  )
}

export default MoveCard
import React from 'react'
import Move from './Move'

const MoveHistory = () => {
  return (
    <div className='flex px-4 items-center flex-col justify-end h-full gap-2'>
        <Move word="grape" moveName="Head extension" cost={50} color='bg-blue-800' />
        <Move word="grapefruit" moveName="Head extension" cost={50} color='bg-blue-800' />
        <Move word="fruit" moveName="Head extension" cost={50} color='bg-blue-800' />
    </div>
  )
}

export default MoveHistory
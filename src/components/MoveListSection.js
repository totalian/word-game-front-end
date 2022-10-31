import React from 'react'
import MoveList from './MoveList'

const MoveListSection = () => {
  return (
    <div className='w-3/12 bg-gray-50 flex flex-col px-2 gap-8 overflow-auto h-full'>
        <div className='uppercase font-extrabold flex justify-center mt-6'>Move List</div>
        <MoveList />
    </div>
  )
}

export default MoveListSection
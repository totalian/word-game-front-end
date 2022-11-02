import React from 'react'
import MoveList from './MoveList'

const MoveListSection = ({ setShowMoveSection, showMoveSection }) => {
  return (
    <div className={`lg:w-3/12 w-full bg-gray-50 flex flex-col px-2 gap-4 lg:gap-8 ${!showMoveSection && 'hidden'} lg:flex`}>
      <div className='uppercase font-extrabold flex justify-center mt-6'>Move List</div>
      <button className='underline lg:hidden' onClick={() => setShowMoveSection(false)}>Hide moves</button>
        <MoveList />
    </div>
  )
}

export default MoveListSection
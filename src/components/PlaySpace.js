import React from 'react'
import MoveHistory from './MoveHistory'
import Input from './Input'

const PlaySpace = ({startWord, playedMoves}) => {
  return (
    <div
    className='flex-grow flex flex-col gap-8 w-10/12 bg-gray-50 mb-12'>
        <MoveHistory startWord={startWord} playedMoves={playedMoves} />
        <Input />
    </div>
  )
}

export default PlaySpace
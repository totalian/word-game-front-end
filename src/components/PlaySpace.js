import React from 'react'
import MoveHistory from './MoveHistory'
import Input from './Input'

const PlaySpace = ({startWord, playedMoves, playWord, checkingWord, setShowHistoryJump, setHistoryIndex}) => {
  return (
    <div
    className='flex-grow flex flex-col gap-8 w-full lg:w-10/12 bg-gray-50 mb-12'>
        <MoveHistory startWord={startWord} playedMoves={playedMoves} setShowHistoryJump={setShowHistoryJump} setHistoryIndex={setHistoryIndex}/>
        <Input playWord={playWord} checkingWord={checkingWord} />
    </div>
  )
}

export default PlaySpace
import React from 'react'
import Move from './Move'

const MoveHistory = ({startWord, playedMoves, setShowHistoryJump, setHistoryIndex}) => {
  return (
    <div className='flex px-4 items-center flex-col justify-end h-full gap-2'>
        {playedMoves.map((move, index) => {
            return <Move
            key={index}
            moveNumber={index}
            word={move.word}
            moveName={move.name}
            cost={move.cost}
            color={move.color}
            setShowHistoryJump={setShowHistoryJump}
            setHistoryIndex={setHistoryIndex}
            />
        })}
    </div>
  )
}

export default MoveHistory
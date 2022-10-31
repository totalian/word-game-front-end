import React from 'react'
import Move from './Move'

const MoveHistory = ({startWord, playedMoves}) => {
  return (
    <div className='flex px-4 items-center flex-col justify-end h-full gap-2'>
        <Move word={startWord} moveName="Start word" cost={0} color='bg-red-800' />
        {playedMoves.map((move, index) => {
            return <Move
            key={index}
            word={move.word}
            moveName={move.name}
            cost={move.cost}
            color={move.color}
            />
        })}
    </div>
  )
}

export default MoveHistory
import React from 'react'
import { moveSet } from '../scoringFunctions/moveSet.js'
import MoveCard from './MoveCard.js'

const MoveList = () => {
    return (
        <div className='flex lg:max-h-[40rem] overflow-auto pb-4 flex-col gap-2'>
            {moveSet.map((move) => <MoveCard key={move.name} name={move.name} description={move.description} example={move.example} costDescription = {move.costDescription} color={move.color} />)}
        </div>
    )
}

export default MoveList
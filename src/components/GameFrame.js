import React from 'react'
import PlaySpace from './PlaySpace'
import StatBar from './StatBar'

const GameFrame = () => {
    return (
        <div className='w-9/12 max-h-full bg-gray-100 flex flex-col gap-12 items-center pt-12'>
            <StatBar />
            <PlaySpace />
        </div>
    )
}

export default GameFrame
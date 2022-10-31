import React from 'react'
import PlaySpace from './PlaySpace'
import StatBar from './StatBar'

const GameFrame = ({startWord, targetWord, currentScore, playerBestScore, globalBestScore, playedMoves}) => {
    return (
        <div className='w-9/12 max-h-full bg-gray-100 flex flex-col gap-12 items-center pt-12'>
            <StatBar targetWord={targetWord} currentScore={currentScore} playerBestScore={playerBestScore} globalBestScore={globalBestScore} />
            <PlaySpace startWord={startWord} playedMoves={playedMoves} />
        </div>
    )
}

export default GameFrame
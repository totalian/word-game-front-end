import React from 'react'
import PlaySpace from './PlaySpace'
import StatBar from './StatBar'

const GameFrame = ({ startWord, targetWord, currentScore, playerBestScore, globalBestScore, playedMoves, playWord, checkingWord }) => {
    return (
        <div className='w-9/12 max-h-full bg-gray-100 flex flex-col gap-12 items-center pt-12'>
            <StatBar targetWord={targetWord} currentScore={currentScore} playerBestScore={playerBestScore} globalBestScore={globalBestScore} />
            <PlaySpace startWord={startWord}
                playedMoves={playedMoves}
                playWord={playWord}
                checkingWord={checkingWord}
            />
        </div>
    )
}

export default GameFrame
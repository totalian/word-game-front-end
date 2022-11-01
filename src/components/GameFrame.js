import React from 'react'
import PlaySpace from './PlaySpace'
import StatBar from './StatBar'

const GameFrame = ({ startWord, targetWord, currentScore, playerBestScore, globalBestScore, playedMoves, playWord, checkingWord, setShowHistoryJump, setHistoryIndex, showMoveSection, setShowMoveSection }) => {
    return (
        <div className={`lg:w-9/12 w-full max-h-full bg-gray-100 ${showMoveSection && 'hidden'} flex flex-col gap-6 lg:gap-12 items-center pt-6 lg:pt-12`}>
            <button className="underline lg:hidden" onClick={() => setShowMoveSection(true)}>Show moves</button>
            <StatBar targetWord={targetWord} currentScore={currentScore} playerBestScore={playerBestScore} globalBestScore={globalBestScore} />
            <PlaySpace startWord={startWord}
                playedMoves={playedMoves}
                playWord={playWord}
                checkingWord={checkingWord}
                setShowHistoryJump={setShowHistoryJump}
                setHistoryIndex={setHistoryIndex}
            />
        </div>
    )
}

export default GameFrame
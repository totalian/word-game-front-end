import React from 'react'
import Stat from './Stat'

const StatBar = ({targetWord, currentScore, playerBestScore, globalBestScore}) => {
  return (
    <div className='flex justify-between w-10/12 gap-8 flex-wrap'>
        <Stat heading="Target word" value={targetWord} />
        <Stat heading="Current score" value={currentScore} />
        <Stat heading="Your best score" value={playerBestScore} />
        <Stat heading="Global best score" value={globalBestScore} />
    </div>
  )
}

export default StatBar
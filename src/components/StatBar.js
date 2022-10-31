import React from 'react'
import Stat from './Stat'

const StatBar = () => {
  return (
    <div className='flex justify-between w-10/12 gap-8'>
        <Stat heading="Target word" value="Suit" />
        <Stat heading="Current score" value="100" />
        <Stat heading="Your best score" value="150" />
        <Stat heading="Global best score" value="200" />
    </div>
  )
}

export default StatBar
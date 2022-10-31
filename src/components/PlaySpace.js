import React from 'react'
import MoveHistory from './MoveHistory'
import Input from './Input'

const PlaySpace = () => {
  return (
    <div
    className='flex-grow w-10/12 bg-gray-50 mb-12'>
        <MoveHistory />
        <Input />
    </div>
  )
}

export default PlaySpace
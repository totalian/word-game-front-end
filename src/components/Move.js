import React from 'react'

const Move = ({word, moveName, cost, color}) => {
  return (
    <div className='h-12 flex w-full items-center justify-between bg-white px-6 rounded-md'>
        <div>{word}</div>
        <div className='flex gap-4 justify-end items-center'>
            <span className={`h-8 ${color} flex items-center rounded-lg px-2 text-white font-semibold`}>{moveName}</span>
            <span className='text-xl text-green-600 font-bold'>{cost > 0 ? '+' + cost: null}</span>
        </div>
    </div>
  )
}

export default Move
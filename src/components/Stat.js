import React from 'react'

const Stat = ({heading, value}) => {
  return (
    <div className='bg-white py-2 px-4 rounded-md flex-grow'>
        <p className=' uppercase text-xs font-bold text-gray-400'>{heading}</p>
        <p className=' text-lg font-semibold'>{value}</p>
    </div>
  )
}

export default Stat
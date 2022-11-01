import React from 'react'

const HistoryJump = ({setShowHistoryJump, jumpToHistory, index, playedMoves}) => {
    const handleClick = () => {
        jumpToHistory(index)
        setShowHistoryJump(false)
    }
    return (
        <div className='h-full w-full absolute flex justify-center items-center backdrop-blur-sm'>
            <div className='h-fit lg:w-1/3 bg-white z-20 rounded-md items-center flex flex-col gap-4 pt-6 pb-16 px-8 drop-shadow-lg'>
                <div className='flex justify-end text-3xl w-full' onClick={() => setShowHistoryJump(false)}>&times;</div>
                <div className='text-xl font-bold flex justify-center '>Jump back to word</div>
                <div className='flex flex-col items-center text-lg font-semibold'>
                    {playedMoves[index]?.word}
                </div>
                <button className='bg-black drop-shadow-lg text-white font-bold w-48 h-8 rounded-md'
                onClick={handleClick}
                >Play move</button>
            </div>
        </div>
    )
}

export default HistoryJump
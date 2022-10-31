import React from 'react'

const GameOver = ({currentScore, restart}) => {
    return (
        <div className='h-full w-full absolute flex justify-center items-center backdrop-blur-sm'>
            <div className='h-fit w-1/3 bg-white z-20 rounded-md items-center flex flex-col gap-12 py-16 drop-shadow-lg'>
                <div className='text-3xl font-bold flex justify-center '>Well done!</div>
                <div className='flex flex-col items-center text-lg font-semibold'>
                    <p>Your total score was:</p><p>{currentScore}</p>
                </div>
                <button className='bg-black drop-shadow-lg text-white font-bold w-48 h-8 rounded-md'
                onClick={restart}
                >Play Again</button>
            </div>
        </div>
    )
}

export default GameOver
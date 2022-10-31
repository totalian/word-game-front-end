import React, { useState } from 'react'

const Input = ({ playWord }) => {
    const [inputValue, setInputValue] = useState("")

    return (
        <input className='mx-4 mb-6 h-12 flex pl-6'
        placeholder='Play a word'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)} 
        onKeyDown={e => {
            if(e.key == 'Enter'){
                playWord(inputValue)
                setInputValue("")
            }
        }}
        />
    )
}

export default Input
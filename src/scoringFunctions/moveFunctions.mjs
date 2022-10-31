
export const checkAnagram = (inputWord, currentWord) => {
    return inputWord.split("").sort().join("") === currentWord.split("").sort().join("")
}

export const checkHeadExtension = (inputWord, currentWord) => {
    return inputWord.endsWith(currentWord) && inputWord.length > currentWord.length
}

export const checkTailExtension = (inputWord, currentWord) => {
    return inputWord.startsWith(currentWord) && inputWord.length > currentWord.length
}

export const checkHeadTailExtension = (inputWord, currentWord) => {
    return inputWord.includes(currentWord)
    && inputWord.length > currentWord.length
    && !inputWord.startsWith(currentWord)
    && !inputWord.endsWith(currentWord)
}

export const checkHeadSubstitution = (inputWord, currentWord) => {
    return inputWord.slice(-1) === currentWord.slice(-1)
    && !checkHeadRetraction(inputWord, currentWord)
}

export const checkTailSubstitution = (inputWord, currentWord) => {
    return inputWord[0] === currentWord[0]
    && !checkTailRetraction(inputWord, currentWord)
}

export const checkLetterSubstitution = (inputWord, currentWord) => {
    let differentLetters = inputWord
    for(let i = 0; i < currentWord.length; i++){
        differentLetters = differentLetters.replace(currentWord[i],"")
    }
    return differentLetters.length === 1 && inputWord.length == currentWord.length
}

export const checkHeadRetraction = (inputWord, currentWord) => {
    return inputWord.length < currentWord.length
    && currentWord.endsWith(inputWord)
}

export const checkTailRetraction = (inputWord, currentWord) => {
    return inputWord.length < currentWord.length
    && currentWord.startsWith(inputWord) 
}

export const checkHeadTailRetraction = (inputWord, currentWord) => {
    return currentWord.includes(inputWord)
    && currentWord.length > inputWord.length
    && !currentWord.startsWith(inputWord)
    && !currentWord.endsWith(inputWord)
}

export const wordChangeLength = (inputWord, currentWord) => {
    return Math.abs(inputWord.length - currentWord.length)
}

export const headSubstitutionChanges = (inputWord, currentWord) => {
    let reverseInputWord = inputWord.split('').reverse().join('')
    let reverseCurrentWord = currentWord.split('').reverse().join('')
    let intermediaryWord
    for(let i = 0; i < currentWord.length; i++){
        if(reverseCurrentWord[i] != reverseInputWord[i]){
            intermediaryWord = reverseCurrentWord.slice(0, i).split('').reverse().join('')
            break
        }
    }
    return currentWord.replace(intermediaryWord,'').length + inputWord.replace(intermediaryWord,'').length
}

export const tailSubstitutionChanges = (inputWord, currentWord) => {
    let intermediaryWord
    for(let i = 0; i < currentWord.length; i++){
        if(currentWord[i] != inputWord[i]){
            intermediaryWord = currentWord.slice(0, i)
            break
        }
    }
    return currentWord.replace(intermediaryWord,'').length + inputWord.replace(intermediaryWord,'').length
}


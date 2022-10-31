import { moveSet } from './moveSet.js'

export const playMove = (inputWord, currentWord) => {
    const validMoves = moveSet.filter(move => move.isValid(inputWord, currentWord))
    if (validMoves.length == 0) { return false }
    const bestMove = validMoves
        .reduce((pre, cur) => cur?.cost(inputWord, currentWord) < pre?.cost(inputWord, currentWord) ? cur : pre)
    return {
        move: bestMove.name,
        cost: bestMove.cost(inputWord, currentWord)
    }
}
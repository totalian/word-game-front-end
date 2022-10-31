import { moveSet } from './moveSet.mjs'
import { checkWord } from './checkWord.mjs'

const playMove = async (inputWord, currentWord) => {
    if (await checkWord(inputWord)) {
        const validMoves = moveSet.filter(move => move.isValid(inputWord, currentWord))
        if (validMoves.length == 0) { return false }
        const bestMove = validMoves
            .reduce((pre, cur) => cur?.cost(inputWord, currentWord) < pre?.cost(inputWord, currentWord) ? cur : pre)
        return {
            move: bestMove.name,
            cost: bestMove.cost(inputWord, currentWord)
        }
    } else {return false}
}

(async () => console.log(await playMove('helo','hello')))()
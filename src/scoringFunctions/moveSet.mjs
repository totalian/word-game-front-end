import * as moves from './moveFunctions.mjs'

export const moveSet = [
    {
        name: "Anagram",
        isValid: moves.checkAnagram,
        cost: () => 0
    },
    {
        name: "Head Extension",
        isValid: moves.checkHeadExtension,
        cost: (inputWord, currentWord) => moves.wordChangeLength(inputWord, currentWord) * 10
    },
    {
        name: "Tail Extension",
        isValid: moves.checkTailExtension,
        cost: (inputWord, currentWord) => moves.wordChangeLength(inputWord, currentWord) * 10
    },
    {
        name: "Two-way extension",
        isValid: moves.checkHeadTailExtension,
        cost: (inputWord, currentWord) => moves.wordChangeLength(inputWord, currentWord) * 10
    },
    {
        name: "Head Retraction",
        isValid: moves.checkHeadRetraction,
        cost: (inputWord, currentWord) => moves.wordChangeLength(inputWord, currentWord) * 10
    },
    {
        name: "Tail Retraction",
        isValid: moves.checkTailRetraction,
        cost: (inputWord, currentWord) => moves.wordChangeLength(inputWord, currentWord) * 10
    },
    {
        name: "Two-way retraction",
        isValid: moves.checkHeadTailRetraction,
        cost: (inputWord, currentWord) => moves.wordChangeLength(inputWord, currentWord) * 10
    },
    {
        name: "Letter substitution",
        isValid: moves.checkLetterSubstitution,
        cost: () => 100
    },
    {
        name: "Head swap",
        isValid: moves.checkHeadSubstitution,
        cost: (inputWord, currentWord) => moves.headSubstitutionChanges(inputWord, currentWord) * 10
    },
    {
        name: "Tail swap",
        isValid: moves.checkTailSubstitution,
        cost: (inputWord, currentWord) => moves.headSubstitutionChanges(inputWord, currentWord) * 10
    }
]
import * as moves from './moveFunctions.js'

export const moveSet = [
    {
        name: "Anagram",
        isValid: moves.checkAnagram,
        cost: () => 0,
        description: "Rearrange letters in the word",
        example: "weird > wired",
        costDescription: "0",
        color: "bg-blue-800",
    },
    {
        name: "Head Extension",
        isValid: moves.checkHeadExtension,
        cost: (inputWord, currentWord) => moves.wordChangeLength(inputWord, currentWord) * 10,
        description: "Add letters to beginning of word",
        example: "fruit > grapefruit",
        costDescription: "10 \u00D7 number of letters added",
        color: "bg-zinc-800",
    },
    {
        name: "Tail Extension",
        isValid: moves.checkTailExtension,
        cost: (inputWord, currentWord) => moves.wordChangeLength(inputWord, currentWord) * 10,
        description: "Add letters to end of word",
        example: "worth > worthier",
        costDescription: "10 \u00D7 number of letters added",
        color: "bg-orange-800",
    },
    {
        name: "Two-way extension",
        isValid: moves.checkHeadTailExtension,
        cost: (inputWord, currentWord) => moves.wordChangeLength(inputWord, currentWord) * 10,
        description: "Add letters to beginning and end of word",
        example: "on > tonne",
        costDescription: "10 \u00D7 number of letters added",
        color: "bg-amber-800",
    },
    {
        name: "Head Retraction",
        isValid: moves.checkHeadRetraction,
        cost: (inputWord, currentWord) => moves.wordChangeLength(inputWord, currentWord) * 10,
        description: "Remove letters from beginning of word",
        example: "frozen > zen",
        costDescription: "10 \u00D7 number of letters removed",
        color: "bg-lime-800",
    },
    {
        name: "Tail Retraction",
        isValid: moves.checkTailRetraction,
        cost: (inputWord, currentWord) => moves.wordChangeLength(inputWord, currentWord) * 10,
        description: "Remove letters from end of word",
        example: "action > act",
        costDescription: "10 \u00D7 number of letters removed",
        color: "bg-emerald-800",
    },
    {
        name: "Two-way retraction",
        isValid: moves.checkHeadTailRetraction,
        cost: (inputWord, currentWord) => moves.wordChangeLength(inputWord, currentWord) * 10,
        description: "Remove letters from beginning and end of word",
        example: "placed > ace",
        costDescription: "10 \u00D7 number of letters removed",
        color: "bg-cyan-800",
    },
    {
        name: "Letter substitution",
        isValid: moves.checkLetterSubstitution,
        cost: () => 100,
        description: "Switch any single letter",
        example: "purse > parse",
        costDescription: "100",
        color: "bg-sky-800",
    },
    {
        name: "Head swap",
        isValid: moves.checkHeadSubstitution,
        cost: (inputWord, currentWord) => moves.headSubstitutionChanges(inputWord, currentWord) * 10,
        description: "Switch letters at beginning of word",
        example: "float > boat",
        costDescription: "10 \u00D7 number of letters removed and added",
        color: "bg-indigo-800",
    },
    {
        name: "Tail swap",
        isValid: moves.checkTailSubstitution,
        cost: (inputWord, currentWord) => moves.headSubstitutionChanges(inputWord, currentWord) * 10,
        description: "Switch letters at beginning of word",
        example: "vice > victor",
        costDescription: "10 \u00D7 number of letters removed and added",
        color: "bg-violet-800",
    }
]
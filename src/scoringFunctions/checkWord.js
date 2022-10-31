import axios from 'axios'

export const checkWord = async word => {
    try {
        await axios.get(`http://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    } catch (err) {
        console.log('api status:', err.statusCode)
        return false
    }
    return true
}
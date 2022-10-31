import request from 'request-promise'

export const checkWord = async word => {
    try {
        await request({
            method: "GET",
            uri: `http://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
            resolveWithFullResponse: true,
        })
    } catch (err) {
        console.log('api status:',err.statusCode)
        return false
    }
    return true
}

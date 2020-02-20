import md5 from 'blueimp-md5'
import {MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY, BASE_REQUEST} from './config'

let date
let hash

const getDate = () => {
    if (!date) {
        date = new Date().getTime()
    }
    return date
}

const getHash = () => {
    if (!hash) {
        hash = md5(`${getDate()}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`)
    }
    return hash
}

const authParams = `ts=${getDate()}&apikey=${MARVEL_PUBLIC_KEY}&hash=${getHash()}`

export const findCharacter = name => {
    return `${BASE_REQUEST}/v1/public/characters?${authParams}&nameStartsWith=${name}`
}

export const findCharacterById = id => {
    return `${BASE_REQUEST}/v1/public/characters/${id}?${authParams}`
}

export const getImage = thumbnail => {
    const { path, extension } = thumbnail
    return `${path}/portrait_medium.${extension}`
}
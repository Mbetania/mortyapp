import { get as restGet } from "./shared/rest.service"

export const getCharacters = async (query) => {
    try {
        const endpoint = `character/?${query}`
        const result = await restGet(endpoint)
        return result
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getLocations = async (query) => {
    try {
        const endpoint = `location/?${query}`
        const result = await restGet(endpoint)
        return result
    } catch (error) {
        console.log(error)
        throw error
    }
}
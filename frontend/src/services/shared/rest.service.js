
export const get = async (endpoint, headers) => {
    const baseURL = process.env.REACT_APP_URL_API_RYMPRINCIPAL
    const finalURL= `${baseURL}/${endpoint}`
    try {
        const result = await fetch(finalURL, {method: 'GET'})
        return result.json()
    } catch (error) {
        console.log(error)
        throw error
    }
}
// import {chicken} from '../test-data/testSearch.js'

export const search = (text) => {
    return (dispatch) => {
        const BACKEND_URL = "http://localhost:3000"
        fetch(BACKEND_URL + `/search/recipe?q=${text}`)
            .then(resp => resp.json())
            .then(json => {
                dispatch({type: 'SEARCH', searchResults: json})
            })
    }
}
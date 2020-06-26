// import {chicken} from '../test-data/testSearch.js'

let BACKEND_URL 
if (window.location.href.includes("localhost")) {
    BACKEND_URL = 'http://localhost:3000';
} else if (window.location.href.includes("nutrient-rich-recipes.info")) {
    BACKEND_URL = "https://backend.nutrient-rich-recipes.info"
}

export const search = (text) => {
    return (dispatch) => {
        fetch(BACKEND_URL + `/search/recipe?q=${text}`)
            .then(resp => resp.json())
            .then(json => {
                if (json.status === "error") {
                    dispatch({type: 'SEARCH_ERROR', message: json.message})
                } else {
                    dispatch({type: 'SEARCH', searchResults: json})
                }
                
            })
    }
}
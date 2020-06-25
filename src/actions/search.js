// import {chicken} from '../test-data/testSearch.js'

let BACKEND_URL 
if (window.location.href.includes("localhost")) {
    BACKEND_URL = 'http://localhost:3000';
} else if (window.location.href.includes("nutrient-rich-recipes.netlify.app")) {
    BACKEND_URL = "https://nutrition-tracker-43434.herokuapp.com"
}

export const search = (text) => {
    return (dispatch) => {
        fetch(BACKEND_URL + `/search/recipe?q=${text}`)
            .then(resp => resp.json())
            .then(json => {
                dispatch({type: 'SEARCH', searchResults: json})
            })
    }
}
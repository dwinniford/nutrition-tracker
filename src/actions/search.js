import {chicken} from '../test-data/testSearch.js'


export const search = (text) => {
    return (dispatch) => {
        // const app_id = "836b3fdd"
        // const app_key = "b8aa318b23ac94a010fea46a6e908503"
        // dispatch({type: 'LOADING_SEARCH'})
        // fetch(`https://api.edamam.com/search?q=${text}&app_id=${app_id}&app_key=${app_key}`)
        //     .then(resp => resp.json())
        //     .then(json => {
        //         dispatch({type: 'SEARCH', searchResults: json})
        //     })
            // .catch(error => console.log(error))
        // dispatch({type: 'SEARCH', searchResults: chicken})
        const BACKEND_URL = "http://localhost:3000"
        fetch(BACKEND_URL + `/search/recipe?q=${text}`)
            .then(resp => resp.json())
            .then(json => {
                dispatch({type: 'SEARCH', searchResults: json})
            })
    }
}
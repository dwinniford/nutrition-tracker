const initialState = {
}

const message = "This site uses a third party service for recipe searches that is limited to 5 requests per minute.  Please wait and try again."

export default function searchResults(state = initialState, action) {
    switch (action.type) {

    case 'SEARCH':
        return { ...action.searchResults, status: "complete" }
    case 'LOADING_SEARCH':
        console.log("LOADING SEARCH RESULTS")
        return state
    case 'SEARCH_ERROR':
        alert(message)
        return state
    default:
        return state
    }
}
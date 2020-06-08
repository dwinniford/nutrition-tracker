const initialState = {
}

export default function searchResults(state = initialState, action) {
    switch (action.type) {

    case 'SEARCH':
        return { ...action.searchResults, status: "complete" }
    case 'LOADING_SEARCH':
        console.log("LOADING SEARCH RESULTS")
        return state
    default:
        return state
    }
}
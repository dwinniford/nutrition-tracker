const initialState = {
    searchResults: {},
    newMealPlan: [],
    mealPlans: []
}

export default function manageMeals(state = initialState, action) {
    switch (action.type) {

    case 'SEARCH':
        return { ...state, searchResults: {...action.searchResults, status: "complete" } }
    case 'LOADING_SEARCH':
        console.log("LOADING SEARCH RESULTS")
        return state
    case 'ADD_RECIPE':
        return { ...state, newMealPlan: [...state.newMealPlan, action.recipe]}

    default:
        return state
    }
}

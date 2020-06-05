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
    case 'ASSIGN_DAY':
        const assignDay = (recipe, name, day) => {
            if (recipe.label === name ) {
                return {...recipe, day: day} 
            } else {
                return recipe
            }
        }
        return {...state, newMealPlan: state.newMealPlan.map(recipe => assignDay(recipe, action.name, action.day))}
    default:
        return state
    }
}


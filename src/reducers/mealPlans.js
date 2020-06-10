const initialState = []

export default function mealPlans(state = initialState, action) {
    switch (action.type) {
        case 'LOADING_MEALPLANS':
            console.log("loading mealplans")
            return state
        case 'LOADED_MEALPLANS':
            console.log("loaded mealplans")
            return action.mealPlans
        case 'ADD_MEALPLAN':
            console.log("Saved to backend", action.json)
            return [...state, action.json]
        default:
            return state
    }
}
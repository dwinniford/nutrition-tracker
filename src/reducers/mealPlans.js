const initialState = []

export default function mealPlans(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MEALPLAN':
            console.log("Saved to backend", action.json)
            return [...state, action.json]
        default:
            return state
    }
}
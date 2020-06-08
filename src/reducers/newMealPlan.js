const initialState = []

export default function newMealPlan(state = initialState, action) {
    switch (action.type) {
        case 'ADD_RECIPE':
            return [...state, action.recipe]
        case 'ASSIGN_DAY':
            const assignDay = (recipe, name, day) => {
                if (recipe.label === name ) {
                    return {...recipe, day: day} 
                } else {
                    return recipe
                }
            }
            return state.map(recipe => assignDay(recipe, action.name, action.day))
        default:
            return state
    }
}
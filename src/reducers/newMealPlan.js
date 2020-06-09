const initialState = {recipes: [], title: "New Meal Plan", days: 1}

export default function newMealPlan(state = initialState, action) {
    switch (action.type) {
        case 'ADD_RECIPE':
            let newRecipe = {...action.recipe, days: []}
            return {...state, 
                recipes:[...state.recipes, newRecipe]
            }
        case 'ASSIGN_DAY':
            const assignDay = (recipe, name, day) => {
                if (recipe.label === name ) {
                    return {...recipe, days: [...recipe.days, day]} 
                } else {
                    return recipe
                }
            }
            return {...state, 
                recipes: state.recipes.map(recipe => assignDay(recipe, action.name, action.day))
            }
        case 'EDIT_TITLE':
            return {...state, title: action.title}
        case 'ADD_DAY':
            return {...state, days: state.days + 1}
        case "SAVING_MEALPLAN":
            console.log("saving")
            return state
        case "SAVED_MEALPLAN":
            console.log("Saved to backend", action.json)

            return state
            
        default:
            return state
    }
}
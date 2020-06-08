import { combineReducers } from "redux"
import searchResults from './searchResults.js'
import newMealPlan from './newMealPlan.js'
import mealPlans from './mealPlans.js'

export const rootReducer = combineReducers({
    searchResults,
    newMealPlan,
    mealPlans
})

let BACKEND_URL 
if (window.location.href.includes("localhost")) {
    BACKEND_URL = 'http://localhost:3000';
} else if (window.location.href.includes("nutrient-rich-recipes.netlify.app")) {
    BACKEND_URL = "https://nutrition-tracker-43434.herokuapp.com/.app"
}

export const loadMealPlans = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_MEALPLANS"})
        fetch(BACKEND_URL + "/meal_plans")
            .then(resp => resp.json())
            .then(function(json) {
                dispatch({type: "LOADED_MEALPLANS", mealPlans: json})
            })
    }
}
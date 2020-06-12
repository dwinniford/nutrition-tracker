const BACKEND_URL = "http://localhost:3000"

function getCSRFToken() {
    return unescape(document.cookie.split('=')[1])
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
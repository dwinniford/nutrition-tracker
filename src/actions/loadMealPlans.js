const BACKEND_URL = "http://localhost:3000"

function getCSRFToken() {
    return unescape(document.cookie.split('=')[1])
  }

export const loadMealPlans = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_MEALPLANS"})
        // let configObj = {
        //     method: 'POST',
        //     credentials: 'include',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'X-CSRF-Token': getCSRFToken()
        //     },
        //     body: JSON.stringify(mealPlan)
        // }
        fetch(BACKEND_URL + "/meal_plans")
            .then(resp => resp.json())
            .then(function(json) {
                dispatch({type: "LOADED_MEALPLANS", mealPlans: json})
    
            })
    }
}
const BACKEND_URL = "http://localhost:3000"

function getCSRFToken() {
    return unescape(document.cookie.split('=')[1])
  }

export const saveMealPlan = (mealPlan, mealPlans) => {
    return (dispatch) => {
        dispatch({type: "SAVING_MEALPLAN"})
        let configObj = {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': getCSRFToken()
            },
            body: JSON.stringify(mealPlan)
        }
        fetch(BACKEND_URL + "/meal_plans", configObj)
            .then(resp => resp.json())
            .then(function(json) {
                dispatch({type: "ADD_MEALPLAN", json})
                dispatch({type: 'REDIRECT', redirectId: (mealPlans.length)})
                dispatch({type: 'RESET_NEW_MEALPLAN_STATE'})
            })
    }
}
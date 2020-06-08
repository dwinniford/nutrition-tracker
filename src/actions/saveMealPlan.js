const BACKEND_URL = ""

export const saveMealPlan = (mealPlan) => {
    return (dispatch) => {
        dispatch({type: "SAVING_MEALPLAN"})
        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mealPlan)
        }
        fetch(BACKEND_URL + "/mealplans", configObj)
            .then(resp => resp.json())
            .then(function(json) {
                dispatch({type: "SAVED_MEALPLAN", json})
            })
    }
}
import React from 'react'

export default function DayNutritionCard(props) {
    
    const nutrientsArray = ["CA", "FE", "MG", "K", "VITA_RAE", "VITC", "VITD", "TOCPHA"]
    
    const quantityPerServing = (recipe, nutrient) => {
        return recipe.totalNutrients[nutrient].quantity/recipe.yield
    }

    const dailyPercentPerServing = (recipe, nutrient) => {
       
        return recipe.totalDaily[nutrient].quantity/recipe.yield
    }

    const listItem = (nutrient) => {
        return (<tr key={props.recipes[0].totalNutrients[nutrient].label}>
            <td>{props.recipes[0].totalNutrients[nutrient].label}</td>
            <td>{Math.floor(props.recipes.reduce((acc, recipe) => quantityPerServing(recipe, nutrient) + acc, 0)) + props.recipes[0].totalNutrients[nutrient].unit}</td>
            <td>{Math.floor(props.recipes.reduce((acc, recipe) => dailyPercentPerServing(recipe, nutrient) + acc, 0)) + props.recipes[0].totalDaily[nutrient].unit}</td>
        </tr>)
    } 
    
    
    return (
        <table className="summary-table">
            <thead>
                {/* <tr>
                    <th colspan="3">Nutrition Summary</th>
                </tr> */}
                <tr>
                    <th>Nutrient</th>
                    <th>total amount</th>
                    <th>total % of daily value</th>
                </tr>
            </thead>
            <tbody>
                {props.recipes.length > 0 ? nutrientsArray.map((nutrient) => listItem(nutrient)) : null}
            </tbody>
        </table>
    )
    
}

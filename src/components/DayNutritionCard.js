import React, { Component } from 'react'

export default class DayNutritionCard extends Component {
    
    nutrientsArray = ["CA", "FE", "MG", "K", "VITA_RAE", "VITC", "VITD", "TOCPHA"]
    
    quantityPerServing = (recipe, nutrient) => {
        console.log(recipe)
        return recipe.totalNutrients[nutrient].quantity/recipe.yield
    }

    dailyPercentPerServing = (recipe, nutrient) => {
       
        return recipe.totalDaily[nutrient].quantity/recipe.yield
    }

    listItem = (nutrient) => {
        return (<li>
            {`${this.props.recipes[0].totalNutrients[nutrient].label} 
            ${Math.floor(this.props.recipes.reduce((acc, recipe) => this.quantityPerServing(recipe, nutrient) + acc, 0)) + this.props.recipes[0].totalNutrients[nutrient].unit}, 
            ${Math.floor(this.props.recipes.reduce((acc, recipe) => this.dailyPercentPerServing(recipe, nutrient) + acc, 0)) + this.props.recipes[0].totalDaily[nutrient].unit}
            `}
        </li>)
    } 
    
    render() {
        return (
            <div>
                <h3>Nutrition Summary</h3>
                <p>(total amount per serving, total % of daily value)</p>
                <ul>
                    {this.props.recipes.length > 0 ?this.nutrientsArray.map((nutrient) => this.listItem(nutrient)) : null}
                </ul>
            </div>
        )
    }
}

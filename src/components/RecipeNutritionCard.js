import React, { Component } from 'react'

export default class RecipeNutritionCard extends Component {
    nutrientsArray = ["CA", "FE", "MG", "K", "VITA_RAE", "VITC", "VITD", "TOCPHA"]
    listItem = (nutrient) => {
        return (<li>
            {`${this.props.recipe.totalNutrients[nutrient].label} 
            ${Math.floor(this.props.recipe.totalNutrients[nutrient].quantity)/this.props.recipe.yield + this.props.recipe.totalNutrients[nutrient].unit}, 
            ${Math.floor(this.props.recipe.totalDaily[nutrient].quantity)/this.props.recipe.yield + this.props.recipe.totalDaily[nutrient].unit}
            `}
        </li>)
    } 
    
    render() {

        
        return (
            <div>
                <h3>8 Common Shortfall Nutrients</h3>
                <p>(amount per serving, % of daily value)</p>
                <ul>
                    {this.nutrientsArray.map((nutrient) => this.listItem(nutrient))}
                </ul>
            </div>
        )
    }
}

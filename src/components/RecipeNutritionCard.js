import React, { Component } from 'react'

export default class RecipeNutritionCard extends Component {
    nutrientsArray = ["CA", "FE", "MG", "K", "VITA_RAE", "VITC", "VITD", "TOCPHA"]
    listItem = (nutrient) => {
        return (<li>
            {`${this.props.recipe.totalNutrients[nutrient].label} 
            ${Math.floor(this.props.recipe.totalNutrients.CA.quantity) + this.props.recipe.totalNutrients.CA.unit}`}
        </li>)
    } 
    
    render() {

        
        return (
            <div>
                <h3>8 Common Shortfall Nutrients</h3>
                <ul>
                    {this.nutrientsArray.map((nutrient) => this.listItem(nutrient))}
                </ul>
            </div>
        )
    }
}

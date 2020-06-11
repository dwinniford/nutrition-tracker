import React, { Component } from 'react'

export default class DayNutritionCard extends Component {
    
    nutrientsArray = ["CA", "FE", "MG", "K", "VITA_RAE", "VITC", "VITD", "TOCPHA"]
    
    quantityPerServing = (recipe, nutrient) => {
        return recipe.totalNutrients[nutrient].quantity/recipe.yield
    }

    dailyPercentPerServing = (recipe, nutrient) => {
       
        return recipe.totalDaily[nutrient].quantity/recipe.yield
    }

    listItem = (nutrient) => {
        return (<tr key={this.props.recipes[0].totalNutrients[nutrient].label}>
            <td>{this.props.recipes[0].totalNutrients[nutrient].label}</td>
            <td>{Math.floor(this.props.recipes.reduce((acc, recipe) => this.quantityPerServing(recipe, nutrient) + acc, 0)) + this.props.recipes[0].totalNutrients[nutrient].unit}</td>
            <td>{Math.floor(this.props.recipes.reduce((acc, recipe) => this.dailyPercentPerServing(recipe, nutrient) + acc, 0)) + this.props.recipes[0].totalDaily[nutrient].unit}</td>
        </tr>)
    } 
    
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th colspan="3">Nutrition Summary</th>
                    </tr>
                    <tr>
                        <th>Nutrient</th>
                        <th>total amount</th>
                        <th>total % of daily value</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.recipes.length > 0 ?this.nutrientsArray.map((nutrient) => this.listItem(nutrient)) : null}
                </tbody>
            </table>
        )
    }
}

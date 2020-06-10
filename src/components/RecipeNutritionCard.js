import React, { Component } from 'react'

export default class RecipeNutritionCard extends Component {
    
    listItem = (nutrient) => {
        return (<li key={nutrient.label}>
            
            {nutrient.name} {nutrient.total_amount} {nutrient.unit} {nutrient.percent_of_daily_value}%
        </li>)
    } 
    
    render() {

        
        return (
            <div>
                <h3>8 Common Shortfall Nutrients</h3>
                <p>(amount per serving, % of daily value)</p>
                <ul>
                    {this.props.nutrients.map((nutrient) => this.listItem(nutrient))}
                </ul>
            </div>
        )
    }
}

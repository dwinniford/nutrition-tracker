import React, { Component } from 'react'
import MealPlanDayNutrition from './MealPlanDayNutrition.js'

export default class MealPlanDay extends Component {
    
    renderRecipeButtons = () => {
    return this.props.day.recipes.map(recipe => <button className="black-button">{recipe.label}</button>)
    }

    render() {
        return (
            <div className="day-card">
                <h3>Day {this.props.day.number}</h3>
                {this.renderRecipeButtons()}
                <MealPlanDayNutrition recipes={this.props.day.recipes}/>
            </div>
        )
    }
}

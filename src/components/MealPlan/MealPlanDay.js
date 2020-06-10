import React, { Component } from 'react'
import MealPlanDayNutrition from './MealPlanDayNutrition.js'
import RecipeCard from '../RecipeCard.js'

export default class MealPlanDay extends Component {
    
    renderRecipeButtons = () => {
    return this.props.day.recipes.map(recipe => <button className="black-button">{recipe.label}</button>)
    }

    nutrientSummary = (recipe, nutrient) => {
        return {
            name: nutrient.name,
            total_amount: Math.floor(nutrient.total_amount)/recipe.yield,
            percent_of_daily_value: Math.floor(nutrient.percent_of_daily_value/recipe.yield),
            unit: nutrient.unit
        }
    }
    recipeNutrition = (recipe) => {
        return recipe.nutrients.map(nutrient => this.nutrientSummary(recipe, nutrient))
    }


    render() {
        return (
            <div className="day-card">
                <h3>Day {this.props.day.number}</h3>
                {this.renderRecipeButtons()}
                <MealPlanDayNutrition recipes={this.props.day.recipes}/>
                {this.props.day.recipes.map(r => <RecipeCard recipe={r} nutrients={this.recipeNutrition(r)} />)}
            </div>
        )
    }
}

import React, { Component } from 'react'
import RecipeCard from './RecipeCard'

export default class SearchResults extends Component {
    
    nutrientSummary = (recipe, nutrient) => {
        return {
            name: recipe.totalNutrients[nutrient].label,
            total_amount: Math.floor(recipe.totalNutrients[nutrient].quantity)/recipe.yield,
            percent_of_daily_value: Math.floor(recipe.totalDaily[nutrient].quantity/recipe.yield),
            unit: recipe.totalNutrients[nutrient].unit
        }
    }

    recipeNutrition = (recipe) => {
        const nutrientsArray = ["CA", "FE", "MG", "K", "VITA_RAE", "VITC", "VITD", "TOCPHA"]
        return nutrientsArray.map(nutrient => this.nutrientSummary(recipe, nutrient))
    }
    
    render() {
        
        return (
            <div>
                <h1>Results for: {this.props.results.q}</h1>
                <div className="search-results">
                    {this.props.results.hits.map(hit => <RecipeCard nutrients={this.recipeNutrition(hit.recipe)} recipe={hit.recipe} addRecipe={this.props.addRecipe} />)}
                </div>
            </div>
        )
    }
}

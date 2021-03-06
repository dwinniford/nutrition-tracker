import React, { Component } from 'react'
import RecipeNutritionCard from './RecipeNutritionCard.js'

export default class RecipeCard extends Component {
    constructor(props) {
        super(props)
        this.state ={
            displayNutrition: false
        }
    }

    displayContent = () => {
        if (this.state.displayNutrition) {
            return <RecipeNutritionCard recipe={this.props.recipe} nutrients={this.props.nutrients}/>
        } else {
            return <img src={this.props.recipe.image} alt={this.props.recipe.label}/>
        }
    }
    
    handleAddRecipe = () => {
        this.props.addRecipe(this.props.recipe)
    }

    handleContentToggle = () => {
        this.state.displayNutrition ? this.setState({displayNutrition: false}) : this.setState({displayNutrition: true})
    }

    displayAddToMealPlan = () => {
        if (typeof this.props.addRecipe === "function") {
            return (
                <button className="black-button" onClick={this.handleAddRecipe}>
                    Add to Meal Plan
                </button>
            )
        }
    }
    
    render() {
        return (
            <div className="recipe-card">
                {this.displayContent()}
                <div className="card-buttons">
                    <a className="black-button" href={this.props.recipe.url}>{this.props.recipe.label}</a>
                    {this.displayAddToMealPlan()}
                    <button className="black-button" onClick={this.handleContentToggle}>
                        {this.state.displayNutrition ? "Recipe Image" : "Nutrition Info" }
                    </button>
                    <p>from: {this.props.recipe.source}</p>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {connect} from 'react-redux'
import RecipeCard from '../components/RecipeCard.js'
import './MealPlansNewContainer.css'

class MealPlansNewContainer extends Component {
    
    recipeButton = (recipe) => {
    return <button draggable className="black-button">{recipe.label}</button>
    }

    handleDrop = (event) => {
        event.preventDefault()
        console.log("Dropping")
    }

    handleDragOver = (event) => {
        event.preventDefault()
        console.log("Dragging over")
    }

    render() {
        return (
            <div>
                <h1>New Meal Plan</h1>
                <div className="newRecipes">
                    {this.props.newMealPlan.map(recipe => this.recipeButton(recipe))}
                </div>
                <div onDragOver={this.handleDragOver} onDrop={this.handleDrop} className="day-1" >
                    <h3 >Day 1</h3>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {newMealPlan: state.newMealPlan}
}

export default connect(mapStateToProps)(MealPlansNewContainer)
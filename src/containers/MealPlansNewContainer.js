import React, { Component } from 'react'
import {connect} from 'react-redux'
import RecipeCard from '../components/RecipeCard.js'
import './MealPlansNewContainer.css'

class MealPlansNewContainer extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            dropZoneId: null
        }
    }
    
    recipeButton = (recipe) => {
    return <button draggable className="black-button">{recipe.label}</button>
    }

    handleDrop = (event) => {
        event.preventDefault()
        console.log("Dropping", event.target.innerText)
    }

    handleDragOver = (event) => {
        event.preventDefault()
        console.log("Dragging over", event.target.dataset.dayId)
        this.setState({dropZoneId: event.target.dataset.dayId})
    }

    render() {
        return (
            <div>
                <h1>New Meal Plan</h1>
        <p>drop zone: {this.state.dropZoneId}</p>
                <div className="newRecipes">
                    {this.props.newMealPlan.map(recipe => this.recipeButton(recipe))}
                </div>
                <div data-day-id="1" onDragOver={this.handleDragOver} onDrop={this.handleDrop} className="day-1" >
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
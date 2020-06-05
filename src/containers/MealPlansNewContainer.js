import React, { Component } from 'react'
import {connect} from 'react-redux'
import RecipeCard from '../components/RecipeCard.js'
import './MealPlansNewContainer.css'

class MealPlansNewContainer extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            dropZoneId: null,
            name: ''
        }
    }

    handleClick = (event) => {
        this.setState({name: event.target.innerText})
        console.log(event.target.innerText)
    }
    
    recipeButton = (recipe) => {
        return <button draggable className="black-button" onMouseDown={this.handleClick}>
            {recipe.label}
        </button>
    }

    handleDrop = (event) => {
        event.preventDefault()
        console.log("Dropping", event)
        this.props.assignDay(this.state.name, this.state.dropZoneId)
    }

    handleDragOver = (event) => {
        event.preventDefault()
        console.log("Dragging over", event.target.dataset.dayId)
        this.setState({dropZoneId: event.target.dataset.dayId})
    }

    dayArray = (day) => {
        return this.props.newMealPlan.filter(recipe => recipe.day === day)
    }

    render() {
        console.log(this.dayArray("1"))
        return (
            <div>
                <h1>New Meal Plan</h1>
                <p>drop zone: {this.state.dropZoneId}</p>
                <div className="newRecipes">
                    {this.props.newMealPlan.map(recipe => this.recipeButton(recipe))}
                </div>
                <div data-day-id="1" onDragOver={this.handleDragOver} onDrop={this.handleDrop} className="day-1" >
                    <h3 >Day 1</h3>
                {this.dayArray("1") ? this.dayArray("1").map(recipe => <button>{recipe.label}</button>) : null }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {newMealPlan: state.newMealPlan}
}

const mapDispatchToProps = dispatch => {
    return {assignDay: (name, day) => dispatch({type: "ASSIGN_DAY", name, day})}
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPlansNewContainer)
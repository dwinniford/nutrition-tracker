import React, { Component } from 'react'
import {connect} from 'react-redux'
// import RecipeCard from '../components/RecipeCard.js'
import './MealPlansNewContainer.css'
import MealPlanForm from '../components/MealPlanForm.js'
import DayCard from '../components/DayCard.js'
import {saveMealPlan} from '../actions/saveMealPlan.js'

class MealPlansNewContainer extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            dropZoneId: null,
            name: '',
            editTitle: false,
            dragging: false
        }
    }

    handleAddDayClick = (event) => {
        this.props.addDay()
    }

    // handleRecipeClick = (event) => {
    //     this.setState({name: event.target.innerText})
    //     console.log(event.target.innerText)
    // }
    
    recipeButton = (recipe) => {
        return <button 
                onDragStart={this.handleDragStart} 
                draggable className="black-button" 
                onMouseDown={this.handleRecipeClick}
                >
                {recipe.label}
        </button>
    }

    handleDragStart = (event) => {
        this.setState({name: event.target.innerText, dragging: true})
        console.log(event.target.innerText)

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

    filterArray = (day) => {
        return this.props.newMealPlan.recipes.filter(recipe => recipe.days.includes(day))
    }

    renderDayCards = () => {
        let dayCards = []
        for (let start = 1; start <= this.props.newMealPlan.days; start++) {
            dayCards.push(
                <DayCard 
                    day={start.toString()} 
                    recipes={this.filterArray(start.toString())} 
                    handleDragOver={this.handleDragOver} 
                    handleDrop={this.handleDrop}
                    dragging={this.state.dragging} 
                />
            ) 
        }
        return dayCards
    }

    handleSave = (event) => {
        event.preventDefault()
        this.props.saveMealPlan(this.props.newMealPlan)
    }

    render() {
        return (
            <div>
                <h1>{this.props.newMealPlan.title}</h1>
                <MealPlanForm editTitle={this.props.editTitle} />
                <button onClick={this.handleAddDayClick} className="black-button">Add Day</button>
                <p>drop zone: {this.state.dropZoneId}</p>
                <div className="newRecipes">
                    {this.props.newMealPlan.recipes.map(recipe => this.recipeButton(recipe))}
                </div>
                {this.renderDayCards()}
                <button onClick={this.handleSave} className="black-button">Save</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {newMealPlan: state.newMealPlan}
}

const mapDispatchToProps = dispatch => {
    return {
        assignDay: (name, day) => dispatch({type: "ASSIGN_DAY", name, day}),
        editTitle: (title) => dispatch({type: 'EDIT_TITLE', title}),
        addDay: () => dispatch({type: 'ADD_DAY'}),
        saveMealPlan: (mealPlan) => dispatch(saveMealPlan(mealPlan))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPlansNewContainer)
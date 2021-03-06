import React, { Component } from 'react'
import {connect} from 'react-redux'
// import RecipeCard from '../components/RecipeCard.js'
import './MealPlansNewContainer.css'
import MealPlanForm from '../components/MealPlanForm.js'
import DayCard from '../components/DayCard.js'
import {saveMealPlan} from '../actions/saveMealPlan.js'
import {Redirect} from 'react-router-dom'
import {DragDropContainer} from 'react-drag-drop-container'


class MealPlansNewContainer extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            editTitle: false,
            drag: false,
            fullDays: {"1": false}
        }
    }

    handleAddDayClick = (event) => {
        this.props.addDay()
    }

   
    
    recipeButton = (recipe) => {
        return <DragDropContainer 
        dragData={{name: recipe.label}}
        // dragData object is passed to dragStart event
        onDragStart={this.handleDragDropContainerStart}
        onDrop={this.handleDragDropContainerDrop}
        onDragEnd={this.handleDragDropContainerEnd}
        targetKey="day"> 
        <button className="black-button">
                {recipe.label}
        </button>
        </DragDropContainer>
    }

    handleDragDropContainerStart = (dragData) => {
        this.setState({name: dragData.name, drag: "dragging"})
    }
    
    handleDragDropContainerDrop = (event) => {
        this.props.assignDay(this.state.name, event.dropData.day)
    }

    handleDragDropContainerEnd = (dragData) => {
        this.setState({drag: false})
    }
   
    handleUnassignDay = (event) => {
        this.props.unAssignDay(event.target.dataset.name, event.target.dataset.dayId)
    }

    filterArray = (day) => {
        return this.props.newMealPlan.recipes.filter(recipe => recipe.days.includes(day))
    }

    handleRemoveDay = (event) => {
        this.props.removeDay(event.target.dataset.dayId)
    }

    

    renderDayCards = () => {
        let dayCards = []
        for (let start = 1; start <= this.props.newMealPlan.days; start++) {
            dayCards.push(
                <DayCard 
                    key={start}
                    day={start.toString()} 
                    recipes={this.filterArray(start.toString())} 
                    // handleDragOver={this.handleDragOver} 
                    // handleDrop={this.handleDrop}
                    drag={this.state.drag}
                    handleRemoveDay={this.handleRemoveDay} 
                    handleUnassignDay={this.handleUnassignDay}
                />
            ) 
        }
        return dayCards
    }

    recipesIncludeDay = (day) => {
        return this.props.newMealPlan.recipes.map(recipe => {
            if (recipe.days) {
                return recipe.days.includes(day)
            } else {
                return false 
            }
           
        })
    }

    eachDayHasRecipe = () => {
        let counter = 1
        let booleanArray = []
        while(counter <= this.props.newMealPlan.days  ) {
            let array = this.recipesIncludeDay(counter.toString())
            
            booleanArray.push(array.includes(true))
            counter += 1
        }
        
        return !booleanArray.includes(false)
    }

    displaySaveButton = () => {
        if (this.props.newMealPlan.title !== "New Meal Plan" 
            && this.props.newMealPlan.title !== ""
            && this.props.newMealPlan.recipes.length > 0
            && this.eachDayHasRecipe()) {
            return <button onClick={this.handleSave} className="black-button">Save</button>
        }
        
    }

    handleSave = (event) => {
        event.preventDefault()
        this.props.saveMealPlan(this.props.newMealPlan, this.props.mealPlans)
        
    }

    render() {
        return (
            <div>
                <h1>{this.props.newMealPlan.title}</h1>
                <div className="form-bar">
                    <MealPlanForm editTitle={this.props.editTitle} />
                    <button onClick={this.handleAddDayClick} className="black-button">Add Day</button>
                </div>
                <div className="recipe-buttons-container">
                    
                    {this.props.newMealPlan.recipes.map(recipe => this.recipeButton(recipe))}
                </div>
                {this.renderDayCards()}
                {this.displaySaveButton()}
                {this.props.newMealPlan.redirectPath ? <Redirect to={this.props.newMealPlan.redirectPath} /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {newMealPlan: state.newMealPlan,
    mealPlans: state.mealPlans
    }
}

const mapDispatchToProps = dispatch => {
    return {
        assignDay: (name, day) => dispatch({type: "ASSIGN_DAY", name, day}),
        unAssignDay: (name, day) => dispatch({type: "UNASSIGN_DAY", name, day}),
        editTitle: (title) => dispatch({type: 'EDIT_TITLE', title}),
        addDay: () => dispatch({type: 'ADD_DAY'}),
        removeDay: (dayId) => dispatch({type: 'REMOVE_DAY', dayId}),
        saveMealPlan: (mealPlan, mealPlans) => dispatch(saveMealPlan(mealPlan, mealPlans))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPlansNewContainer)
import React, { Component } from 'react'
import MealPlanDay from '../components/MealPlan/MealPlanDay.js'

export default class MealPlanShowContainer extends Component {

    renderDays = () => {
        return this.props.mealPlans[this.props.match.params.mealPlanId].days.map(day => <MealPlanDay key={day.number} day={day} />)
    }
    
    // need to only read from props in render so that the component will recognize when it needs to update
    render() {
        if (this.props.mealPlans.length > 0) {
            return (
                <div>
                    <h1>{this.props.mealPlans[this.props.match.params.mealPlanId].title}</h1>
                   
                    <div>
                     {this.renderDays()}
                    </div>
                </div>
            ) 
        } else {
            return (
                <div>loading</div>
            )
        }
    }
}

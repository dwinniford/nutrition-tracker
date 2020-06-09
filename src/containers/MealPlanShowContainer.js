import React, { Component } from 'react'
import MealPlanDay from '../components/MealPlanDay.js'

export default class MealPlanShowContainer extends Component {
    
    mealPlan = this.props.mealPlans[this.props.match.params.mealPlanId]


    renderDays = () => {
        return this.mealPlan.days.map(day => <MealPlanDay day={day} />)
    }
    
    render() {
        
        return (
            <div>
                {/* <h1>{this.props.mealPlan.title}</h1> */}
                <h1>{this.mealPlan.title}</h1>
                <div>
                 {this.renderDays()}
                </div>
            </div>
        )
    }
}

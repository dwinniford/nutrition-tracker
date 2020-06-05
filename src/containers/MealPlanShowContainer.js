import React, { Component } from 'react'

export default class MealPlanShowContainer extends Component {
    render() {
        return (
            <div>
                {/* <h1>{this.props.mealPlan.title}</h1> */}
                <h1>{this.props.mealPlans[this.props.match.params.mealPlanId].title}</h1>
            </div>
        )
    }
}

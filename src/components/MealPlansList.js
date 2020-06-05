import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class MealPlansList extends Component {
    mealPlansList = () => {
        return this.props.mealPlans.map((plan, idx) => 
            <li>
                <Link to={`/mealplans/${idx}`}>
                    {plan.title}
                </Link>
            </li>
        )
    }

    render() {
        return (
            <div>
                
                <h1>Meal Plans List</h1>
                <h3>Choose a meal plan</h3>
                <ul>
                    {this.mealPlansList()}
                </ul>
            </div>
        )
    }
}

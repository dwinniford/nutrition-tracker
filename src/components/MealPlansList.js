import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class MealPlansList extends Component {
    mealPlansList = () => {
        return this.props.mealPlans.map((plan, idx) => 
                <Link key={idx} className="black-button" to={`/mealplans/${idx}`}>
                    {plan.title} 
                </Link>
        )
    }

    render() {
        return (
            <div>
                
                <h1>Explore Meal Plans</h1>
                <div className="meal-plans-list">
                    {this.mealPlansList()}
                </div>
            </div>
        )
    }
}

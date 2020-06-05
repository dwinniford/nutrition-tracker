import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import MealPlanShowContainer from './MealPlanShowContainer.js'
import MealPlansList from '../components/MealPlansList.js'

export default class MealPlansContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mealPlans: [
                {title: "Mediteranean Day"},
                {title: "Middleaster Week"},
                {title: "Mexican meal plan"}
            ]
        }
    }
    

    render() {
        return (
            <div>
                <Route exact path={this.props.match.url}>
                    <MealPlansList mealPlans={this.state.mealPlans} />
                </Route>
                <Route exact path={`${this.props.match.url}/:mealPlanId`} render={routerProps => <MealPlanShowContainer {...routerProps} mealPlans={this.state.mealPlans} />} />
            </div>
        )
    }
}

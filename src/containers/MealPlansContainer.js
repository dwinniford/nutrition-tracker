import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import MealPlanShowContainer from './MealPlanShowContainer.js'
import MealPlansList from '../components/MealPlansList.js'
import MealPlansNewContainer from './MealPlansNewContainer.js'

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

    componentDidMount() {
        fetch("http://localhost:3000/meal_plans")
            .then(resp => resp.json())
            .then(function(json) {
                console.log(json)
            })
    }
    

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={this.props.match.url}>
                        <MealPlansList mealPlans={this.state.mealPlans} />
                    </Route>
                    <Route path={`${this.props.match.url}/new`}>
                        <MealPlansNewContainer />
                    </Route>
                    <Route path={`${this.props.match.url}/:mealPlanId`} render={routerProps => <MealPlanShowContainer {...routerProps} mealPlans={this.state.mealPlans} />} />
                </Switch>
            </div>
        )
    }
}

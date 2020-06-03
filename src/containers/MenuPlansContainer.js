import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import MenuPlanShowContainer from './MenuPlanShowContainer.js'

export default class MenuPlansContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuPlans: [
                {title: "Mediteranean Day"},
                {title: "Middleaster Week"},
                {title: "Mexican meal plan"}
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Menu Plans List</h1>
                <ul>
        {this.state.menuPlans.map((plan, idx) => <li><Link to={`/menuplans/${idx}`}>{plan.title}</Link></li>)}
                </ul>
                <Route exact path={`${this.props.match.url}/:menuPlanId`} component={MenuPlanShowContainer} />
            </div>
        )
    }
}

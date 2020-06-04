import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import MenuPlanShowContainer from './MenuPlanShowContainer.js'
import MenuPlansList from '../components/MenuPlansList.js'

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
                <Route exact path={this.props.match.url}>
                    <MenuPlansList menuPlans={this.state.menuPlans} />
                </Route>
                <Route exact path={`${this.props.match.url}/:menuPlanId`} render={routerProps => <MenuPlanShowContainer {...routerProps} menuPlans={this.state.menuPlans} />} />
            </div>
        )
    }
}

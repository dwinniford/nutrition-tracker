import React, { Component } from 'react'

export default class MenuPlanShowContainer extends Component {
    render() {
        return (
            <div>
                {/* <h1>{this.props.menuPlan.title}</h1> */}
                <h1>{this.props.menuPlans[this.props.match.params.menuPlanId].title}</h1>
            </div>
        )
    }
}

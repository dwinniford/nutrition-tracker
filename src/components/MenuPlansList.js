import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class MenuPlansList extends Component {
    render() {
        return (
            <div>
                <h3>Choose a menu from the list below</h3>
                <h1>Menu Plans List</h1>
                <ul>
        {this.props.menuPlans.map((plan, idx) => <li><Link to={`/menuplans/${idx}`}>{plan.title}</Link></li>)}
                </ul>
            </div>
        )
    }
}

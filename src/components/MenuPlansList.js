import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class MenuPlansList extends Component {
    menuPlansList = () => {
        return this.props.menuPlans.map((plan, idx) => 
            <li>
                <Link to={`/menuplans/${idx}`}>
                    {plan.title}
                </Link>
            </li>
        )
    }

    render() {
        return (
            <div>
                
                <h1>Menu Plans List</h1>
                <h3>Choose a menu</h3>
                <ul>
                    {this.menuPlansList()}
                </ul>
            </div>
        )
    }
}

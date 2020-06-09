import React, { Component } from 'react'

export default class MealPlanDay extends Component {
    render() {
        return (
            <div>
                <h3>Day {this.props.day.number}</h3>
            </div>
        )
    }
}

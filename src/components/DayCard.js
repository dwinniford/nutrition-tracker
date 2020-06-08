import React, { Component } from 'react'

export default class DayCard extends Component {

    dayArray = (day) => {
        return this.props.newMealPlan.recipes.filter(recipe => recipe.day === day)
    }
    
    render() {
        return (
            <div>
                <div data-day-id="1" onDragOver={this.props.handleDragOver} onDrop={this.props.handleDrop} className="day-1" >
                    <h3 >Day 1</h3>
                {this.dayArray("1") ? this.dayArray("1").map(recipe => <button className="black-button">{recipe.label}</button>) : null }
                </div>
            </div>
        )
    }
}

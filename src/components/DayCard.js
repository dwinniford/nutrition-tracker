import React, { Component } from 'react'

export default class DayCard extends Component {
    
    render() {
        return (
            <div>
                <div data-day-id={this.props.day} onDragOver={this.props.handleDragOver} onDrop={this.props.handleDrop} className="day-1" >
        <h3 >Day {this.props.day}</h3>
                {this.props.recipes.map(recipe => <button className="black-button">{recipe.label}</button>)}
                </div>
            </div>
        )
    }
}

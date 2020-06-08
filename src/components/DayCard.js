import React, { Component } from 'react'

export default class DayCard extends Component {
    
    render() {
        return (
            <div>
                <div data-day-id="1" onDragOver={this.props.handleDragOver} onDrop={this.props.handleDrop} className="day-1" >
                    <h3 >Day 1</h3>
                {this.props.recipes.map(recipe => <button className="black-button">{recipe.label}</button>)}
                </div>
            </div>
        )
    }
}

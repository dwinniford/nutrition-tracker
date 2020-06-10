import React, { Component } from 'react'
import DayNutritionCard from './DayNutritionCard.js'

export default class DayCard extends Component {
    
    render() {
        return (
            
                <div 
                 
                className="day-card" 
                >
                    <h3 
                    data-day-id={this.props.day} 
                    // onDragEnter={this.props.handleDragEnter} 
                    // onDragLeave={this.props.handleDragLeave}
                    onDragOver={this.props.handleDragOver}
                    onDrop={this.props.handleDrop}
                    >Day {this.props.day}</h3>
                    {this.props.recipes.map(recipe => <button className="black-button">{recipe.label}</button>)}
                    <DayNutritionCard recipes={this.props.recipes} />
                </div>
            
        )
    }
}

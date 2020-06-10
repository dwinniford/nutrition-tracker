import React, { Component } from 'react'
import DayNutritionCard from './DayNutritionCard.js'

export default class DayCard extends Component {
    
    displayDropZone = () => {
        return this.props.dragging ? "drop-zone" : null
    }

    render() {
        return (
            
                <div className="day-card" >
                    <h3
                     className={this.displayDropZone()}
                    data-day-id={this.props.day} 
                    onDragOver={this.props.handleDragOver}
                    onDrop={this.props.handleDrop}
                    >Day {this.props.day}</h3>
                    {this.props.recipes.map(recipe => <button className="black-button">{recipe.label}</button>)}
                    <DayNutritionCard recipes={this.props.recipes} />
                </div>
            
        )
    }
}

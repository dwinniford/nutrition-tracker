import React, { Component } from 'react'
import DayNutritionCard from './DayNutritionCard.js'

export default class DayCard extends Component {
    
    displayDropZone = () => {
        switch(this.props.drag) {
            case "dragging":
                return "drop-zone"
            case null:
                return ''
            default:
                return ''
        } 
        
    }

    render() {
        return (
            
                <div className="day-card" >
                    <button data-day-id={this.props.day} 
                    onClick={this.props.handleRemoveDay} 
                    className='corner-x'>x</button>
                    <h3
                     className={this.displayDropZone()}
                    data-day-id={this.props.day} 
                    onDragOver={this.props.handleDragOver}
                    onDrop={this.props.handleDrop}
                    >Day {this.props.day}
                    </h3>
                    {this.props.recipes.map(recipe => <button data-day-id={this.props.day} onClick={this.props.handleUnassignDay} className="black-button">{recipe.label}</button>)}
                    <DayNutritionCard recipes={this.props.recipes} />
                </div>
            
        )
    }
}

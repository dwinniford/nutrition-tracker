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

    renderRecipeButtons = () => {
        return this.props.recipes.map(recipe => {
            return (
                <button 
                    className="black-button-container"
                >
                    {recipe.label}
                    <button className="corner-x"
                    data-day-id={this.props.day}
                    data-name={recipe.label} 
                    onClick={this.props.handleUnassignDay}>x</button>
                </button>
            )
        })    
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
                    {this.renderRecipeButtons()}
                    <DayNutritionCard recipes={this.props.recipes} />
                </div>
            
        )
    }
}

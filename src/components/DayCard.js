import React from 'react'
import DayNutritionCard from './DayNutritionCard.js'
import {DropTarget} from 'react-drag-drop-container'

export default function DayCard(props) {
    
    const displayDropZone = () => {
        switch(props.drag) {
            case "dragging":
                return "drop-zone"
            case false:
                return ''
            default:
                return ''
        } 
        
    }

    const renderRecipeButtons = () => {
        return props.recipes.map(recipe => {
            return (
                <button 
                    className="black-button-container"
                >
                    {recipe.label}
                    <span className="corner-x"
                    data-day-id={props.day}
                    data-name={recipe.label} 
                    onClick={props.handleUnassignDay}>x</span>
                </button>
            )
        })    
    }

    
    return (
        
        <div className="day-card" >
            <button data-day-id={props.day} 
            onClick={props.handleRemoveDay} 
            className='corner-x'>x</button>
            <DropTarget targetKey="day" dropData={{day: props.day}}>
            <h3 className={displayDropZone()} >
                Day {props.day}
            </h3>
            </DropTarget>
            <div className="recipe-buttons-container">
                {renderRecipeButtons()}
            </div>
            <h3>Nutrition Summary</h3>
            <DayNutritionCard recipes={props.recipes} />
        </div>
        
    )
    
}

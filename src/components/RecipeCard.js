import React, { Component } from 'react'


export default class RecipeCard extends Component {
    render() {
        return (
            <div className="recipe-card">
                <img src={this.props.recipe.image} />
                <div className="card-buttons">
                    <a className="black-button" href={this.props.recipe.url}>{this.props.recipe.label}</a>
                    <button className="black-button">Add to Menu Plan</button>
                    <button className="black-button">Nutrition Info</button>
                    <p>from: {this.props.recipe.source}</p>
                </div>
            </div>
        )
    }
}

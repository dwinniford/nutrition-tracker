import React, { Component } from 'react'

export default class RecipeCard extends Component {
    render() {
        return (
            <li>
                <a href={this.props.recipe.url}>{this.props.recipe.label}</a>
                {/* <image src={this.props.recipe.image} /> */}
            </li>
        )
    }
}

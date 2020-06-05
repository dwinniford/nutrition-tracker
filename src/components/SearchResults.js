import React, { Component } from 'react'
import RecipeCard from './RecipeCard'

export default class SearchResults extends Component {
    render() {
        console.log(this.props.results)
        return (
            <div>
                <h3>Results for: {this.props.results.q}</h3>
                <div className="search-results">
                    {this.props.results.hits.map(hit => <RecipeCard recipe={hit.recipe} addRecipe={this.props.addRecipe} />)}
                </div>
            </div>
        )
    }
}

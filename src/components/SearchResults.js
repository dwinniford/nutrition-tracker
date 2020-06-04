import React, { Component } from 'react'
import RecipeCard from './RecipeCard'

export default class SearchResults extends Component {
    render() {
        console.log(this.props.results)
        return (
            <div>
                <h3>Results for: {this.props.results.q}</h3>
                <ul>
                    {this.props.results.hits.map(hit => <RecipeCard recipe={hit.recipe} />)}
                </ul>
            </div>
        )
    }
}

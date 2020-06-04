import React, { Component } from 'react'

export default class SearchResults extends Component {
    render() {
        return (
            <div>
                <h3>Results:</h3>
                <p>{this.props.results.text}</p>
            </div>
        )
    }
}

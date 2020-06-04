import React, { Component } from 'react'

export default class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.search(this.state.text)
        this.setState({text: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Search for a Recipe</h1>
                    <label>Recipe Name</label>
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                    <input type="Submit" />
                </form>
            </div>
        )
    }
}

// on submit text is added to state and displays in search results component.
//  results component has button to add 
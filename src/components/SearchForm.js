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

    render() {
        return (
            <div>
                <form>
                    <label>Recipe Name</label>
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                    <input type="Submit" />
                    {this.state.text}
                </form>
            </div>
        )
    }
}

// on submit text is added to state and displays in search results component.
//  results component has button to add 
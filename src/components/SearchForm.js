import React, { Component } from 'react'

export default class SearchForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Recipe Name</label>
                    <input type="text" />
                    <input type="Submit" />
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class MealPlanForm extends Component {
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
                    <label>Title</label>
                    <input onChange={this.handleChange} type="text" value={this.state.text}/>
                    <input className="black-button" type="submit"/>
                </form>
            </div>
        )
    }
}
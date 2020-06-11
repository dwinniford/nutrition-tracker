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

    handleSubmit = (event) => {
        event.preventDefault() 
        this.props.editTitle(this.state.text)
        this.setState({text: ''})
    }
    
    render() {
        return (
                <form className='one-line-form' onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input onChange={this.handleChange} type="text" value={this.state.text}/>
                    <input className="black-button" type="submit" value="Update Name"/>
                </form>
        )
    }
}

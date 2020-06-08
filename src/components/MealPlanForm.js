import React, { Component } from 'react'

export default class MealPlanForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Title</label>
                    <input type="text"/>
                    <input className="black-button" type="submit"/>
                </form>
            </div>
        )
    }
}

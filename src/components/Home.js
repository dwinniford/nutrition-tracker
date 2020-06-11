import React, { Component } from 'react'

export default class Home extends Component {
    componentDidMount() {
        fetch("http://localhost:3000/", {credentials: 'include'})
    }
    
    render() {
        return (
            <div>
                <h1>Welcome to Nutrition Tracker</h1>
                <div className="text-content-card">
                    <p>
                        Look up recipes 
                    </p>
                    <p>
                        Organize them in meal plans
                    </p>
                    <p>
                        Check out the nutrition summary for 8 important nutrients
                    </p>
                </div>
            </div>
        )
    }
}

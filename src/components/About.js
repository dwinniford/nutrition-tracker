import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About Nutrition Tracker</h1>
                <div className="text-content-card">
                    <p>
                        Nutrition Tracker is intended as an educational tool to help users think about their diet more carefully. 
                    </p>
                    <p>
                        The nutrients selected in this app are based off this 
                         <a href="https://lpi.oregonstate.edu/mic/micronutrient-inadequacies/overview"> article </a>
                         from Oregon State University which highlights several common "shortfall micronutrients".
                    </p>
                </div>
            </div>
        )
    }
}

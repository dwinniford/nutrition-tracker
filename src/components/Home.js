import React, { Component } from 'react'

let BACKEND_URL 
if (window.location.href.includes("localhost")) {
    BACKEND_URL = 'http://localhost:3000';
} else if (window.location.href.includes("nutrient-rich-recipes.info")) {
    BACKEND_URL = "https://backend.nutrient-rich-recipes.info"
}

export default class Home extends Component {
    componentDidMount() {
        fetch(BACKEND_URL, {credentials: 'include'})
    }
    
    render() {
        return (
            <div>
                <h1>Welcome to Nutrient Rich Recipes</h1>
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

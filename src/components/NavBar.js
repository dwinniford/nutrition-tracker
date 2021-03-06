import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return (
        <div className="nav-bar">
            <Link className="black-button" to="/">Home</Link>
            <Link className="black-button" to="/about">About</Link>
            <Link className="black-button" to="/search">Search</Link>
            <Link className="black-button" to="/mealplans">View Meal Plans</Link>
            <Link className="black-button" to="/mealplans/new" >New Meal Plan</Link>
        </div>
    )
}

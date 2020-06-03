import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/search">Search</Link>
                <Link to="/menuplans">View Menu Plans</Link>
            </div>
        )
    }
}

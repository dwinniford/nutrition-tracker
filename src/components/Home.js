import React, { Component } from 'react'

export default class Home extends Component {
    componentDidMount() {
        fetch("http://localhost:3000/", {credentials: 'include'})
    }
    
    render() {
        return (
            <div>
                <h1>Home!</h1>
            </div>
        )
    }
}

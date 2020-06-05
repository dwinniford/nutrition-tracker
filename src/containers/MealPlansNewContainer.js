import React, { Component } from 'react'
import {connect} from 'react-redux'
import RecipeCard from '../components/RecipeCard.js'

class MealPlansNewContainer extends Component {
    render() {
        return (
            <div>
                <h1>New Meal Plan</h1>
                {this.props.newMealPlan.map(recipe => <RecipeCard recipe={recipe} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {newMealPlan: state.newMealPlan}
}

export default connect(mapStateToProps)(MealPlansNewContainer)
import React, { Component } from 'react'
import MealPlanDay from '../components/MealPlan/MealPlanDay.js'
import {connect} from 'react-redux'

class MealPlanShowContainer extends Component {
    constructor(props) {
        super(props) 
        this.state = {mealPlan: this.props.mealPlans[this.props.match.params.mealPlanId]}
    }
    // mealPlan = this.props.mealPlans[this.props.match.params.mealPlanId]


    renderDays = () => {
        return this.props.mealPlans[this.props.match.params.mealPlanId].days.map(day => <MealPlanDay day={day} />)
    }
    
    render() {
        if (this.props.mealPlans.length > 0) {
            return (
                <div>
                    <h1>{this.props.mealPlans[this.props.match.params.mealPlanId].title}</h1>
                    {/* <h1>{this.state.mealPlan.title}</h1> */}
                    <div>
                     {this.renderDays()}
                    </div>
                </div>
            ) 
        } else {
            return (
                <div>loading</div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        mealPlans: state.mealPlans
    }
}

export default connect(mapStateToProps)(MealPlanShowContainer)

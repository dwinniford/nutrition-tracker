import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import MealPlanShowContainer from './MealPlanShowContainer.js'
import MealPlansList from '../components/MealPlansList.js'
import MealPlansNewContainer from './MealPlansNewContainer.js'
import {loadMealPlans} from '../actions/loadMealPlans.js'
import {connect} from 'react-redux'

class MealPlansContainer extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         mealPlans: [
    //             {title: "Mediteranean Day"},
    //             {title: "Middleaster Week"},
    //             {title: "Mexican meal plan"}
    //         ]
    //     }
    // }

    componentDidMount() {
        this.props.loadMealPlans()
    }
    

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={this.props.match.url}>
                        <MealPlansList mealPlans={this.props.mealPlans} />
                    </Route>
                    <Route path={`${this.props.match.url}/new`}>
                        <MealPlansNewContainer />
                    </Route>
                    <Route path={`${this.props.match.url}/:mealPlanId`} render={routerProps => <MealPlanShowContainer {...routerProps} mealPlans={this.props.mealPlans} />} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mealPlans: state.mealPlans
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadMealPlans: () => dispatch(loadMealPlans())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPlansContainer)
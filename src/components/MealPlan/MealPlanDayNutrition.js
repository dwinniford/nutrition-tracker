import React, { Component } from 'react'

export default class MealPlanDayNutrition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "Calcium": {}, "Iron": {}, "Magnesium": {}, "Potassium": {}, "Vitamin A": {}, "Vitamin C": {}, "Vitamin D": {}, "Vitamin E": {}
        }
    }

    createNutritionSummary = () => {
        let nutrientsArray = []
        this.props.recipes.forEach(function(recipe) {
            nutrientsArray.push(recipe.nutrients)
        })
        console.log(nutrientsArray)
    }
    
    calculatePerServing = (recipe, nutrient) => {
        return recipe.nutrients.map(function(nutrient) {
            return {...nutrient, 
                amountPerServing: Math.floor(nutrient.total_amount/recipe.yield),
                dailyValuePerServing: Math.floor(nutrient.percent_of_daily_value/recipe.yield)
            }
        })
    }

    listItem = (nutrient) => {
        return (<li>
            {nutrient}:
        </li>)
    } 
    
    render() {
        this.createNutritionSummary()
        return (
            <div>
                <ul>
                    {Object.keys(this.state).map((key) => this.listItem(key))}
                </ul>
            </div>
        )
    }
}

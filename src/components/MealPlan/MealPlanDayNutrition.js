import React, { Component } from 'react'

export default class MealPlanDayNutrition extends Component {
   
    // push amount per serving and daily value per serving of each nutrient into an array in the nutrient object and returns the object
    collectRecipeTotals = (recipe, nutrientSummary) => {
        recipe.nutrients.forEach(function(nutrient) {
            let amountPerServing = Math.floor(nutrient.total_amount/recipe.yield)
            let dailyValuePerServing = Math.floor(nutrient.percent_of_daily_value/recipe.yield)
            nutrientSummary[nutrient.name].totalAmountArray.push(amountPerServing)
            nutrientSummary[nutrient.name].totalDailyValueArray.push(dailyValuePerServing)
        })
    }

    // iterates through recipes and calls collectRecipeTotals and returns the nutrient object
    collectAllTotals = () => {
        const nutrientSummary = {
            "Calcium": {totalAmountArray: [], totalDailyValueArray: [], totalAmount: null, totalDailyValue: null}, 
            "Iron": {totalAmountArray: [], totalDailyValueArray: [], totalAmount: null, totalDailyValue: null}, 
            "Magnesium": {totalAmountArray: [], totalDailyValueArray: [], totalAmount: null, totalDailyValue: null}, 
            "Potassium": {totalAmountArray: [], totalDailyValueArray: [], totalAmount: null, totalDailyValue: null}, 
            "Vitamin A": {totalAmountArray: [], totalDailyValueArray: [], totalAmount: null, totalDailyValue: null}, 
            "Vitamin C": {totalAmountArray: [], totalDailyValueArray: [], totalAmount: null, totalDailyValue: null}, 
            "Vitamin D": {totalAmountArray: [], totalDailyValueArray: [], totalAmount: null, totalDailyValue: null}, 
            "Vitamin E": {totalAmountArray: [], totalDailyValueArray: [], totalAmount: null, totalDailyValue: null}
        }
        this.props.recipes.forEach(recipe => this.collectRecipeTotals(recipe, nutrientSummary))
        return nutrientSummary
    }

    reduceTotalsArrays = () => {
        const nutrientSummary = this.collectAllTotals()
        const keys = Object.keys(nutrientSummary)
        keys.forEach(function(nutrientName) {
            let totalDailyValue = nutrientSummary[nutrientName].totalDailyValueArray.reduce((acc, v) => acc + v)
            let totalAmount = nutrientSummary[nutrientName].totalAmountArray.reduce((acc, v) => acc + v)
            nutrientSummary[nutrientName].totalDailyValue = totalDailyValue
            nutrientSummary[nutrientName].totalAmount = totalAmount
            
        // insert unit here
        })
        return nutrientSummary
    }

    setUnit = (nutrientSummary) => {
        this.props.recipes[0].nutrients.forEach(function(nutrient) {
            nutrientSummary[nutrient.name].unit = nutrient.unit
        })
        return nutrientSummary
    }

    displaySummary = () => {
        const nutrientSummary = this.setUnit(this.reduceTotalsArrays())
        const keys = Object.keys(nutrientSummary)
        return keys.map((name) => this.listItem(nutrientSummary[name], name))
    }

   
    listItem = (data, name) => {
        return (<li>
            {name}: {data.totalAmount} {data.unit}, {data.totalDailyValue}% dailyValue 
        </li>)
    } 
    
    render() {
        return (
            <div>
                <ul>
                    {this.displaySummary()}
                </ul>
            </div>
        )
    }
}

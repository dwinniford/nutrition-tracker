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

    // reduces arrays to total for each nutrient
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

    // adds unit to each nutrient
    setUnit = (nutrientSummary) => {
        this.props.recipes[0].nutrients.forEach(function(nutrient) {
            nutrientSummary[nutrient.name].unit = nutrient.unit
        })
        return nutrientSummary
    }

    // calculates totals and then adds unit to each nutrient
    calculateSummary = () => {
        const summaryWithTotals = this.reduceTotalsArrays()
        return this.setUnit(summaryWithTotals)
    }

    displaySummary = () => {
        const nutrientSummary = this.calculateSummary()
        const keys = Object.keys(nutrientSummary)
        return keys.map((name) => this.listItem(nutrientSummary[name], name))
    }

   
    listItem = (data, name) => {
        return (<tr key={name}>
            <td>{name}:</td>
            <td>{data.totalAmount} {data.unit}</td>
            <td>{data.totalDailyValue}%</td>
        </tr>)
    } 
    
    render() {
        return (
            <table className="summary-table">
                <thead>
                    <tr>
                        <th>Nutrient</th>
                        <th>total amount</th>
                        <th>total % of daily value</th>
                    </tr>
                </thead>
                <tbody>
                {this.displaySummary()}
                </tbody>

            </table>
            // <div>
            //     <p>(total amount, total % of daily value) </p>
            //     <ul>
            //         {this.displaySummary()}
            //     </ul>
            // </div>
        )
    }
}

import React, { Component } from 'react'

export default class RecipeNutritionCard extends Component {
    
    tableRow = (nutrient) => {
        return (<tr key={nutrient.name}>
            <td>{nutrient.name}: </td>
            <td>{Math.floor(nutrient.total_amount)} {nutrient.unit}</td>
            <td>{nutrient.percent_of_daily_value}%</td>
        </tr>)
    } 
    
    render() {

        
        return (
            <table className="summary-table">
                <thead>
                    {/* <tr>
                        <th colspan="3">8 Common Shortfall Nutrients</th>
                    </tr> */}
                    <tr>
                        <th>Nutrient</th>
                        <th>amount/serving</th>
                        <th>% of daily value</th>
                    </tr>
                </thead>
                
                <tbody>
                {this.props.nutrients.map((nutrient) => this.tableRow(nutrient))}
                </tbody>
            </table>
        
        )
    }
}

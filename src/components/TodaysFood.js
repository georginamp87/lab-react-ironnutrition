import React, { Component } from 'react'

export default class TodaysFood extends Component {
    
    render() {
        const {items} = this.props
        let totalCalories = 0
                    
        return (
            <div>
                <h1>Total Foods of Today</h1>
                {
                    items.map((singleFood, index)=> {
                        return (
                            <div key={index}>
                            {singleFood.imageUrl}
                            {singleFood.name}
                            {singleFood.calories}
                            {singleFood.quantity}
                            = totalCalories
                            </div>
                        )
                    })
                }
                {/* {
                    items.reduce((prevValue, currentValue) => prevValue + currentValue.calories,
                    0)
                
                    return {totalCalories}
                } */}
            
                <div>Total Calories of Today: {this.totalCalories}</div>

            </div>
        )
    }
}

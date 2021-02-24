import React, { Component } from 'react'
import FoodBox from './FoodBox.js'
import foods from '../foods.json'
import AddFood from './AddFood.js'
import Search from './Search.js'

class FoodList extends Component {

    state = {
        allFood : foods,
        showForm :false,
        filteredList: []
    }

    handleShowForm = () => {
        this.setState({showForm: true})
    }

    handleAddFood = (event) => {
        event.preventDefault()
        let name = event.target.name.value
        let calories = event.target.calories.value
        let imageUrl = event.target.imageUrl.value

        let newFood = {name: name, calories:calories, imageUrl:imageUrl}

        this.setState({
            showForm: false,
            allFood: [newFood, ...this.state.allFood],
            filteredList: [newFood, ...this.state.allFood]
        })
    }

    handleChange = (event) => {
        let searchedFood = event.target.value.toLowerCase()

        let filteredFood = this.state.allFood.filter((singleFood)=> {
            return singleFood.name.toLowerCase().includes(searchedFood)
        })

        this.setState({
           filteredList : filteredFood
        })
    }
    render() {

        const { allFood, filteredList, showForm} = this.state
        return (
            <div>
                <Search myChange={this.handleChange}/>
                {
                    showForm ? <AddFood onAdd={this.handleAddFood}/> : <button onClick={this.handleShowForm}>Display Form</button>
                }
                {
                    filteredList.map((singleFood, index)=> {
                        return <FoodBox 
                        key={index} 
                        food={singleFood}
                        onFoodAdd={this.props.onFoodAdd}/>
                    })
                }
            </div>
        )
    }
}

export default FoodList
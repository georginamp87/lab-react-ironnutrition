import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css';
import FoodList from './components/FoodList.js'
import TodaysFood from './components/TodaysFood';


class App extends Component {  

  state = {
    todaysFood : []
  }

  handleAddFood = (food, quantity) => {
    let myFood = {
      imageUrl: food.imageUrl,
      name: food.title,
      calories: food.calories
    }

    this.setState({
      todaysFood: [...this.state.todaysFood, myFood]
    })
  }

  render() {
  return (
    <div className="App">
      <h1>IronNutrition</h1>
        <div class="columns">
          <div class="column">
            <FoodList onFoodAdd={this.handleAddFood}/>
          </div>
          <div class="column">
            <TodaysFood items={this.state.todaysFood} />
          </div>
        </div>
    </div>
  );
 }
}

export default App;


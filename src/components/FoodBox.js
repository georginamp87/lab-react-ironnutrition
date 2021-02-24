import React, { Component } from 'react'


class FoodBox extends Component {
    state = {
        quantity: 0
    }

    handleQuantity = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }

    render() {
        const {food, onFoodAdd} = this.props
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} alt="foodimage"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{this.props.food.name}</strong> <br />
                            <small>{this.props.food.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input className="input" type="number" value="1" />
                            </div>
                            <div className="control">
                            <button onClick={()=> {onFoodAdd(food, this.quantity)}}className="button is-info">
                                +
                            </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default FoodBox
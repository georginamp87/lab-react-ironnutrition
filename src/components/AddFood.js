import React, { Component } from 'react'

export default class AddFood extends Component {
    render() {
        const {onAdd} = this.props

        return (
            <form onSubmit={onAdd}>
                <input name="imageUrl" type="text" placeholder="Enter image url"/>
                <input name="name" type="text" placeholder="Enter name"/>
                <input name="calories" type="number" placeholder="Enter calories"/>
                <button type="submit">Add Food</button>
            </form>
        )
        
    }
}

import React, { Component } from 'react';
import { addOrderApi } from '../../apiCalls'

class OrderForm extends Component {
  constructor(props) {
    super(props);
    // this.props = props;
    this.state = {
      name: '',
      ingredients: [],
      error: ''
    };
  }

  handleNameChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleIngredientChange = event => {
    event.preventDefault()
    this.setState({
      ingredients: [...this.state.ingredients, event.target.name]
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const newOrder = {
      // id: Date.now(),
      name: this.state.name,
      ingredients: this.state.ingredients
    }
    // this.props.addOrder(newOrder)
    addOrderApi(newOrder)
      .then(data => {
        this.props.addOrder(data)
      })
      .catch(error => this.setState({ error: error.message }))
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    console.log(this.state.ingredients)
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)} className="ingredient-button">
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p className="order-message">Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        {this.state.ingredients.length === 0 || this.state.name === '' ? <p className="submit-message">Please add your name and ingredients to submit an order</p> : <button onClick={e => this.handleSubmit(e)} className="submit-button">Submit Order</button>}
        {this.state.error && <p>{this.state.error}</p>}
      </form>
    )
  }
}

export default OrderForm;

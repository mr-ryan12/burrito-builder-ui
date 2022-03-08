import React, { Component } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';


// id: 1
// ingredients: Array(5)
// 0: "beans"
// 1: "lettuce"
// 2: "carnitas"
// 3: "queso fresco"
// 4: "jalapeno"
// length: 5
// [[Prototype]]: Array(0)
// name: "Pat"
class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: [
        {id: 1, name: 'Pat', ingredients: ['beans', 'lettuce', 'carnitas', 'queso fresco', 'jalapeno']},
        {id: 2, name: 'Jimmy', ingredients: ['rice', 'lettuce', 'chicken', 'salsa', 'sour creme']},
        {id: 3, name: 'Sal', ingredients: ['corn', 'sofritas', 'tomato', 'guacomole', 'sriracha']},

      ]
    }
  }

  componentDidMount() {
    getOrders()
      .then(data => {
        console.log(data)
      })
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm />
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;

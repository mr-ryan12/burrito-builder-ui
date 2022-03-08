import React from 'react';
import Card from '../Card/Card'
import './Orders.css';

const Orders = props => {
  const orderEls = props.orders.map(order => {
    return (
      // <div className="order">
      //   <h3>{order.name}</h3>
      //   <ul className="ingredient-list">
      //     {order.ingredients.map(ingredient => {
      //       return <li>{ingredient}</li>
      //     })}
      //   </ul>
      // </div>
      <Card
        key={order.id}
        id={order.id}
        name={order.name}
        ingredients={order.ingredients}
      />
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;
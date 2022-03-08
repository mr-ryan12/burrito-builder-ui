import React from 'react';
import Card from '../Card/Card'
import './Orders.css';

const Orders = props => {
  const orderEls = props.orders.map(order => {
    return (
      <Card
        key={order.id}
        id={order.id}
        name={order.name}
        ingredients={order.ingredients}
      />
    )
  });

  return (
    <section className="orders-container">
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;
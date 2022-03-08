import React from 'react'
import './Card.css'

const Card = props => {
  return (
    <div className="order">
      <h3>{props.name}</h3>
      <ul className="ingredient-list">
        {props.ingredients.map(ingredient => {
          return <li>{ingredient}</li>
        })}
      </ul>
    </div>
  )
}

export default Card
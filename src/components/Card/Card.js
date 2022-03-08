import React from 'react'
import Ingredient from '../Ingredient/Ingredient'
import './Card.css'

const Card = props => {
  const allIngredients = props.ingredients.map((ingredient, index) => {
    return (
      <Ingredient
        key={index}
        id={index}
        ingredient={ingredient}
      />
    )
  })
  return (
    <div className="order">
      <h3>{props.name}</h3>
      <ul className="ingredient-list">
        {allIngredients}
      </ul>
    </div>
  )
}

export default Card
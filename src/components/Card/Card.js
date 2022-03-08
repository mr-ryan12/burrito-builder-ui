import React from 'react'
import Ingredient from '../Ingredient/Ingredient'
import './Card.css'

const Card = props => {
  const allIngredients = props.ingredients.map((ingredient, index) => {
    return (
      <Ingredient
        // key={Math.floor(Math.random() * 1000)}
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
        {/* {props.ingredients.map(ingredient => {
          return <li>{ingredient}</li>
        })} */}
        {/* {props.ingredients.map(ingredient => {
          <Ingredient
            key={ingredient}
            ingredient={ingredient}
          />
        })} */}
        {allIngredients}
      </ul>
    </div>
  )
}

export default Card
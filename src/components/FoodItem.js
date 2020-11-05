import React from 'react'
import IngredientCard from "./IngredientCard"

const FoodItem = ({food:{recipe:{calories,image,label,ingredients}}}) => {
    return (
        <div className="foodCard">
            <img src={image} className="food_image" alt="img"/>
            <h3>{label}</h3>
            <IngredientCard ingredients={ingredients}/>
        </div>
    )
}

export default FoodItem

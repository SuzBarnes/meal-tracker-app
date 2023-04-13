import React from 'react';
import { Link } from 'react-router-dom';
import { IngredientsListItem } from './IngredientsListItem';

export const IngredientsList = ({ingredients, isLoading}) => {
return(
    <div className='list-container'>
        <h1>Ingredients</h1>
        {isLoading ?
        <p>Loading...</p> 
        : ingredients.map(ingredient => (
            <IngredientsListItem
            key={ingredient.name}
            ingredient={ingredient}
            />
        ))
    }
    <Link to='/add-ingredient'>
        <button className='space-before'>+ Add Ingredient</button>
    </Link>
    </div>
)
};

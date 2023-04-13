import React from 'react';
import { Link } from 'react-router-dom';
import {IngredientsList, useIngredients} from '../ingredients'
import {useMeals, MealsList} from '../meals'

export const HomePage = () => {
    const {meals, isLoading: isLoadingMeals, setMeals} = useMeals();
    const{ingredients, isLoading: isLoadingIngredients, setIngredients} = useIngredients();
    console.log(ingredients, 'ingredients');
return(
    <div className='page-container'>
        <div className='column'>
            <MealsList 
            isLoading={isLoadingMeals}
            meals={meals}
            />
        </div>
        <div className='column'>
            <IngredientsList
            isLoading={isLoadingIngredients}
            ingredients={ingredients}
            />
            <Link to='/shopping-list'>
            <button className='shopping-list-button list-container full-width'>Generate Shopping List</button>
            </Link>
        </div>
        </div>
)
};
import React from 'react';
import {useMeals} from '../meals'

export const HomePage = () => {
    const {meals, isLoading: isLoadingMeals, setMeals} = useMeals();
    console.log(meals);
return(
    <h1>This is the Home Page</h1>
)
};
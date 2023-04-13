import {useState, useEffect} from 'react';

export const useMeals = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [rawMeals, setRawMeals] = useState([]);

    const loadMeals = async () => {
        setIsLoading(true);
        const response = await fetch('/meals')
        // console.log(response, "response")
        const rawMealsResponse = await response.json();
        // console.log(rawMeals.response, "meals")
        setRawMeals(rawMealsResponse);
        setIsLoading(false);
    }
        
    useEffect(() => {
        loadMeals();
}, []);

    return {isLoading, meals: rawMeals.map(rawMeal => ({
        ...rawMeal,
        plannedDate: new Date(rawMeal.plannedDate),
    })), setMeals: setRawMeals};
}
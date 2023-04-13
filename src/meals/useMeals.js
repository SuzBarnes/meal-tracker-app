import {useState, useEffect} from 'react';

export const useMeals = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState([]);

    const loadMeals = async () => {
        setIsLoading(true);
        const response = await fetch('/meals')
        console.log(response, "response")
        const meals = await response.json();
        console.log(meals, "meals")
        setMeals(meals);
        setIsLoading(false);
    }
        
    useEffect(() => {
        loadMeals();
}, []);

    return {isLoading, meals, setMeals};
}
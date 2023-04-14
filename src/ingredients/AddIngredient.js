import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {
    BackButton,
    DropDown,
} from '../ui'

const unitOptions = [
    'kilogram(s)',
    'gram(s)',
    'tablespoon(s)',
    'teaspoon(s)',
    'count',
]

export const AddIngredient = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [units, setUnits] = useState(unitOptions[0]);
    const navigate = useNavigate();

    const addToIngredients = async () => {
        const newIngredient = {
            name: name.toLowerCase(),
            amount,
            units,
        };
        await fetch('/ingredients', {
            method: 'post',
            body: JSON.stringify(newIngredient),
            headers:{
                'Content-Type': 'application/json',
            },
        });
        navigate('/')
    }

return(
    <div className='page'>
        <BackButton />
        <div className='centered-container'>
            <h1>Add Ingredient</h1>
            <input
            type='text'
            placeholder='Enter Ingredient Name'
            className='space-after space-before full-width'
            value={name}
            onChange={event => setName(event.target.value)}
            />
            <input 
            type='number'
            className='space-before full-width'
            value={amount}
            onChange={event => setAmount(event.target.value)}
            />
            <DropDown 
            className='space-before full-width'
            value={units}
            onChange={event => setUnits(event.target.value)}
            options = {unitOptions}
            />
            <button
            className='space-before full-width'
            onClick={addToIngredients}
            >
                Add
            </button>
        </div>
    </div>
)
};

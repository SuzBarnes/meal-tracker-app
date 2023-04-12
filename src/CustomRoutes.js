import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {HomePage} from './home';
import {AddIngredient} from './ingredients';
import { RecipeSearch } from './recipes';
import {ShoppingList} from './shopping-list';

const routes = [{
    path:'/',
    Component: HomePage,
    exact:true,
},
{
    path:'/add-ingredient',
    Component: AddIngredient,
},
{
    path:'/recipes',
    Component: RecipeSearch,
},
{
    path:'/shopping-list',
    Component: ShoppingList,
}];

export const CustomRoutes = () => {
    return(
    <Router>
        <Routes>
        {routes.map((route, index)=> (
            <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            element={<route.Component />}
            >
            </Route>
        ))}
        </Routes>
    </Router>
    )
}
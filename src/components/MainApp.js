import React, { useReducer } from 'react'
import { UserContext } from './UserContext';
import { AppRouter } from './AppRouter'
import '../css/style.css';

const initialState = [];
const initTodos = () => JSON.parse(localStorage.getItem('todos')) || [];

export const MainApp = () => {
    const dataReducer = (state = [], action) => {
        switch (action.type) {
            case 'add':
                return [...state, action.payload];
            case 'delete':
                return state.filter(todo => todo.id !== action.payload);
            case 'toggle':
                return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done}:todo);
            default:
                return state;
        };
    };

    const [todos, dispatch] = useReducer(dataReducer, initialState, initTodos);

    return (
        <UserContext.Provider value={{todos, dispatch}}> 
            <AppRouter/>
        </UserContext.Provider>
    );
};
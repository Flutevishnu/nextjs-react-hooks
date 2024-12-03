'use client'
import React, { useReducer } from "react";


type Action = | { type: 'incremented_age'} | {type: 'changed_name'; nextName: string}
function reducer(state: {name:string, age:number}, action: Action)  {
    switch (action.type) {

        case 'incremented_age': {
            return {
                ...state,
                age:state.age+1
            }
        }

        case 'changed_name': {
            return {
                ...state,
                name:action.nextName,
            }
        }

        default: {
            throw new Error(`Unhandled action type: ${action}`);
        }

    }
}
export default function Form() {
    type initialState = {name: string, age: number}
    const initialState: initialState = {name: "vishnu", age: 42}
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleButtonClick() {
        dispatch({type:'incremented_age'})
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: 'changed_name',
            nextName: e.target.value
        });
    }

    return(
        <>
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-lg">FORM</h1>
        <input type="text"
        className="text-black"
        value={state.name}
        onChange={handleInputChange}
         />
        <button onClick={handleButtonClick} className="bg-white text-black rounded-md p-2">
            Increment age 
        </button>
        <p >Hello, {state.name}. You are {state.age}.</p>
        </div>
        
        </>
    )
}
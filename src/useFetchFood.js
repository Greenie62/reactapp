import React, {useReducer, useEffect} from "react"
import {APP_ID, APP_KEY} from "./utils/keys.js"

const ACTIONS={
    LOADING:'LOADING',
    ERROR:'ERROR',
    DATA:'DATA'
}

const initialState={
    food_data:[],
    error:false,
    loading:false
}


function reducer(state,action){

    const {LOADING, ERROR, DATA} = ACTIONS;

    switch(action.type){

        case LOADING:
            return {loading:true,food_data:[]};

        case DATA:
            return {
                ...state,
                loading:false,
                food_data:action.payload,
                  };

       case LOADING:
            return {error:true};

        default:
            return state
    }
}


export const useFetchFood=(query)=>{

    const {LOADING, ERROR, DATA} = ACTIONS;
    let URL=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    

    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        dispatch({type:LOADING})

        fetch(URL)
        .then(data=>data.json())
        .then(data=>{
            console.log(data.hits)
            dispatch({
                type:DATA,
                payload:data.hits
            })
        })
    },[query])


    return state
}
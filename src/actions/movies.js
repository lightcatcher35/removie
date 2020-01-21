import axios from 'axios';
import {API_URL} from '../config/api';


export function fetchMovies(state)
{
    return dispatch=>
    {
        dispatch({
            type:"MOVIE",
            payload:axios.get(API_URL+"movies")
            .then(response=>response.data)
        })
        
    }
}

export function onGetMovie(id)
{

    return dispatch=>
    {
        dispatch({
            type:"GET_MOVIE",
            payload:axios.get(API_URL+"movies/"+id)
            .then(response=>response.data)
        })
        
    }
}

export function deleteMovie(id)
{

    return dispatch=>
    {
        dispatch({
            type:"DELETE_MOVIE",
            payload:axios.delete(API_URL+"movies/"+id)
            .then(response=>id)
        })
        
    }
}

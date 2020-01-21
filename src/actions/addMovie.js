import axios from 'axios';
import {API_URL} from '../config/api';


export function onAddMovie({title,type,cover})
{

    return dispatch=>
    {
        dispatch({
            type:"ADDMOVIE",
            payload:axios.post(API_URL+"movies",{title,type,cover})
            .then(response=>response.data)
        })
        
    }
}

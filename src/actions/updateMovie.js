import axios from 'axios';
import {API_URL} from '../config/api';


export function onUpdateMovie({id,title,type,cover})
{

    return dispatch=>
    {
        dispatch({
            type:"UPDATE_MOVIE",
            payload:axios.put(API_URL+"movies/"+id,{title,type,cover})
            .then(response=>response.data)
        })
        
    }
}

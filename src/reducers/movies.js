
const initialStates={
    fetching:true,
    fetched:false,
    error:"",
    movieList:[],
    done:false,
    progressing:false
}

export default (state=initialStates,action) => {

    switch(action.type)
    {
        case "MOVIE_FULFILLED":
            return {
                ...state,
                fetched:true,
                fetching:false,
                error:"",
                movieList:action.payload
            }
        case "MOVIE_PENDING":
            return {
                ...state,
                fetching:true,
                fetched:false,
                error:"",
                movieList:[]
            }
        case "MOVIE_REJECTED":
            return {
                ...state,
                fetching:false,
                fetched:false,
                movieList:[],
                error:action.payload.message
            }
        case "GET_MOVIE_FULFILLED":
            return {
                ...state,
                fetched:true,
                fetching:false,
                error:"",
                movieList:[],
                movie:[action.payload]
            }
        case "GET_MOVIE_PENDING":
            return {
                ...state,
                fetching:true,
                fetched:false,
                error:"",
                movieList:[],
                movie:[]
            }
        case "GET_MOVIE_REJECTED":
            return {
                ...state,
                fetching:false,
                fetched:false,
                movieList:[],
                movie:[]
            }
        case "UPDATE_MOVIE_FULFILLED":
            return {
                ...state,
                fetched:true,
                fetching:false,
                progressing:false,
                done:true,                
                error:"",
                movieList:[...state.movieList,action.payload],
                movie:[action.payload]
            }
        case "UPDATE_MOVIE_PENDING":
            return {
                ...state,
                fetching:true,
                progressing:true,
                fetched:false,
                error:"",
                done:false,
                movieList:[],
                movie:[]
            }
        case "UPDATE_MOVIE_REJECTED":
            return {
                ...state,
                progressing:false,
                fetching:false,
                fetched:false,
                done:false,
                movieList:[],
                movie:[]
            }
            case "DELETE_MOVIE_FULFILLED":

            {
                console.log(action.payload);
                return {
                    ...state,
                    done:true,                
                    error:"",
                    movieList:state.movieList.filter(movie=>movie.id!==action.payload)
                }
            }
            case "DELETE_MOVIE_PENDING":
                return {
                    ...state,
                    done:false
                }
            case "DELETE_MOVIE_REJECTED":
                return {
                    ...state,
                    done:false,
                    error:action.payload
                }
        default : return state;
    }
        
}


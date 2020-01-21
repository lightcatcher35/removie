
const initialStates={
    fetching:false,
    done:false,
    error:"",
    movieList:[]
}

export default (state=initialStates,action) => {

    switch(action.type)
    {
        case "ADDMOVIE_FULFILLED":
            return {
                ...state,
                done:true,
                fetching:false,
                error:""
            }
        case "ADDMOVIE_PENDING":
            return {
                fetching:true,
                done:false,
                error:""
            }
        case "ADDMOVIE_REJECTED":
            return {
                fetching:false,
                done:false,
                error:action.payload
            }
        default : return state;
    }
        
}


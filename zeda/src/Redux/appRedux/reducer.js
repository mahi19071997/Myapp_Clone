import { GET_MOVIEDATA_FAILURE, GET_MOVIEDATA_REQ, GET_MOVIEDATA_SUCCESS, GET_SINGLE_MOVIEDATA_FAILURE, GET_SINGLE_MOVIEDATA_REQ, GET_SINGLE_MOVIEDATA_SUCCESS, SET_QUERY } from "./actionTypes"

const initState = {
    movies: [],
    movie:{},
    query:"",
    isLoading: false,
    isError: false
}
console.log(initState)

export const appReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case SET_QUERY:
            return{
                query:payload
            }
        case GET_MOVIEDATA_REQ:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case GET_MOVIEDATA_SUCCESS:
            return {
                ...state,
                movies: payload,
                isLoading: false,
                isError: false
            }
        case GET_MOVIEDATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case GET_SINGLE_MOVIEDATA_REQ:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case GET_SINGLE_MOVIEDATA_SUCCESS:
            return {
                ...state,
                movie:payload,
                isLoading: false,
                isError: false
            }
        case GET_SINGLE_MOVIEDATA_FAILURE:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        default:
            return state

    }
}
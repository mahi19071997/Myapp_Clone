import {SET_QUERY, GET_MOVIEDATA_FAILURE, GET_MOVIEDATA_REQ, GET_MOVIEDATA_SUCCESS, GET_SINGLE_MOVIEDATA_FAILURE, GET_SINGLE_MOVIEDATA_REQ, GET_SINGLE_MOVIEDATA_SUCCESS } from "./actionTypes"
import Axios from "axios"

export const stQuery=(payload)=>{
  return{
    type:SET_QUERY,
    payload
  }
}
export const getMoviedataReq = () => {
  return{
    type: GET_MOVIEDATA_REQ
  }
}


export const getMoviedataSuccess = (data) => {
 return{
    type: GET_MOVIEDATA_SUCCESS,
    payload: data
    
 }  

}

export const getMoviedataFailure = (data) => {
    return {
        type: GET_MOVIEDATA_FAILURE,
        payload: data
    }

}
export const getSingleMoviedataReq = () => {
  return{
    type: GET_SINGLE_MOVIEDATA_REQ
  }
}

export const getSingleMoviedataSuccess = (data) => {
  return{
    type: GET_SINGLE_MOVIEDATA_SUCCESS,
    payload:data
  }
}

export const getSingleMoviedataFailure = (data) => {
  return{
    type: GET_SINGLE_MOVIEDATA_FAILURE,
    payload:data
    
  }
}

export const getData=(query,page) =>(dispatch)=>{
  dispatch(getMoviedataReq())
  Axios.get(`http://www.omdbapi.com/?apikey=b8f79f9e&s=${query}&page=${page}`)
  .then(res=>
    {setTimeout(()=>{
      dispatch(getMoviedataSuccess(res.data.Search));
    },1000) 
  
})
  .catch(err=>{dispatch(getMoviedataFailure(err))})
  

}

export const getSingleData=(id) =>(dispatch)=>{
  console.log("mm")
  dispatch(getSingleMoviedataReq())
  Axios.get(`http://www.omdbapi.com/?i=${id}&apikey=b8f79f9e`)
  .then(res=>
    {setTimeout(()=>{
      dispatch(getSingleMoviedataSuccess(res.data));
      console.log(res.data)
    },1000) 
  
})
  .catch(err=>{dispatch(getSingleMoviedataFailure(err))})
  

}


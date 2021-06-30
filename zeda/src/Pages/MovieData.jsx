import React from 'react'
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {getSingleData} from './../Redux/appRedux/action'


export function MovieData() {
    const {id}=useParams()
    const movie= useSelector(state=>state.app.movie)
    console.log(movie.Title)
    const dispatch =useDispatch()
    React.useEffect(()=>{
        dispatch(getSingleData(id))
    },[])
    return (
        
        <div>
            <div>{movie?.imdbID}</div>
            <div>{movie?.Awards}</div>
            <div>bug</div>
            
        </div>
    )
}

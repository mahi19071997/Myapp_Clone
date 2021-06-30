import React from 'react'
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

export function Dashboard() {
    const movies= useSelector(state=>state.app.movies)
    const loading= useSelector(state=>state.app.isLoading)
    console.log(movies)
    return (
        <div>
            {movies?.map(el=>{
               return<Link to={`/moviedata/${el.imdbID}`}><div key={el.imdbID}>{el.Title} </div></Link> 
            })}
            
        </div>
    )
}

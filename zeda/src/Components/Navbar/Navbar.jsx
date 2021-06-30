import React from 'react'
import {AppBar,Toolbar,Typography,Box,TextField} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from "@material-ui/core/styles"
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import { Spinner } from './Spinner';
import ClearIcon from '@material-ui/icons/Clear';
import {useSelector,useDispatch} from "react-redux";
import {getData} from "./../../Redux/appRedux/action"
import { Redirect } from 'react-router-dom';



const useStyles= makeStyles({
    wrapper:{
        background: "#80cbc4",
        

    },
    box:{
        border:"2px solid teal",
        width:"20%",
        background: "#e0f2f1",
        borderRadius:"10px",
        opacity: "0.7",
        display: "flex",
        justifyContent:"space-evenly",
        marginLeft:"35%",
        padding:"3px 10px " ,
        

    },
    moviedata:{
        marginLeft:"10px",

    },
    searchicon:{
        color: "teal",
        marginTop: "3px",
        cursor: "pointer"
    },
    textfield:{
        width:"87%",
        border: "none",
        outline: "none",
        padding: "0px 8px"

    },
    clear:{
        color: "teal",
        margin: "4px 3px 0px 3px",
        cursor: "pointer"
    }

})

export default function Navbar() {
    
    const loading= useSelector(state=>state.app.isLoading)
    
    const [query,setQuery]= React.useState("")

    const classes= useStyles()
    const dispatch =useDispatch()
    const handleInputChange=(e)=>{
        setQuery(e.target.value)
    }
    const handleClear=()=>{
        setQuery("")
    }

    const handleClick=()=>{
        console.log(query)
        dispatch(getData(query))
        return <Redirect push to={"/"} />

    }
    return (
        <>
        <AppBar className={classes.wrapper} >
            <Toolbar >
            <MovieFilterIcon/>
                <Typography className={classes.moviedata}>
                    Movie Data
                </Typography>

                <Box className={classes.box} variant="outlined">
                    
                    <SearchIcon className={classes.searchicon} onClick={handleClick} />
                    <TextField value={query} className={classes.textfield} InputProps={{disableUnderline: true }} placeholder="Search Movies" onChange={handleInputChange} value={query}/>
                    {query&& <ClearIcon className={classes.clear} onClick={handleClear} />}
                    {/* {loading && <Spinner />} */}
                </Box>

            </Toolbar>

        </AppBar>
            
            
        </>
    )
}
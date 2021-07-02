import React from "react";
import {
  BackgroundImage,
  ImgMovie,
  BgLines,
  BgLinesMedia,
} from "./Dashboard.js";
import { AppBar, Toolbar, Typography, Box, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

import ClearIcon from "@material-ui/icons/Clear";
import { useSelector, useDispatch } from "react-redux";
import { getData, stQuery } from "./../Redux/appRedux/action";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  box: {
    border: "2px solid teal",
    width: "60%",
    background: "white",
    borderRadius: "10px",
    opacity: "0.7",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "2% auto",
    padding: "3px 10px ",
  },

  searchicon: {
    color: "black",
    marginTop: "3px",
    cursor: "pointer",
  },
  textfield: {
    width: "100%",
    border: "none",
    outline: "none",
    padding: "0px 8px",
  },
  clear: {
    color: "black",
    margin: "4px 3px 0px 3px",
    cursor: "pointer",
  },
});

export function Dashboard() {
  const loading= useSelector(state=>state.app.isLoading)
    const history=useHistory()
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
        dispatch(stQuery(query))
        dispatch(getData(query))
        history.push("/searchresults")

    }
    const handleKeyClick=(e)=>{
       if(e.code==="Enter"){
           handleClick()
       }

    }
  return (
    <>
      <BackgroundImage>
        <ImgMovie src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg" />
        <BgLines>
          <div>
            Unlimited Movies, TV shows and more.
          </div>
          <div>Watch anywhere, Enjoy anytime.</div>
          <div>Ready to watch? Search here any movie and Get Set Go!</div>
        </BgLines>

        <BgLinesMedia>
          <div>Get Set Go</div>
          <Box className={classes.box} variant="outlined">
            <SearchIcon className={classes.searchicon} onClick={handleClick} />
            <TextField
              value={query}
              className={classes.textfield}
              InputProps={{ disableUnderline: true }}
              placeholder="Search Movies"
              onChange={handleInputChange}
              value={query}
              onKeyUp={handleKeyClick}
            />
            {query && (
              <ClearIcon className={classes.clear} onClick={handleClear} />
            )}
            {/* {loading && <Spinner />} */}
          </Box>
        </BgLinesMedia>
      </BackgroundImage>
    </>
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  MoviesCards,
  ImgMoviesCards,
  ButtonsPage,
  Buttons,
  PageNum,
  ContSearch,
  OnLoading,
  OnError,NoData
} from "./SearchResults.js";
import { getData } from "../Redux/appRedux/action.js";
import { Spinner } from "./../Components/Navbar/Spinner";
export function SearchResults() {
  const movies = useSelector((state) => state.app.movies);
  const loading = useSelector((state) => state.app.isLoading);
  const error = useSelector((state) => state.app.isError);
  const que = useSelector((state) => state.app.query);
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  console.log(movies);

  const handlePage = (val) => {
    setPage(page + val);
    dispatch(getData(que, page));
  };
  React.useEffect(()=>{
    dispatch(getData(que,page));
      <Redirect to="/"/>
    
  },[])

  return (
    <>
      <ContSearch>
        {loading && (
          <OnLoading>
            <div>Movies Data Loading</div>
            <Spinner />
          </OnLoading>
        )}
        {error && (
          <OnError>
            <div>Error in loading data </div>
            <Spinner />
          </OnError>
        )}
        {!loading &&!error && movies === undefined && (
          <NoData>
            <div>No Data Found</div>
            <img
              src="https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png"
              alt="nodata"
            />{" "}
          </NoData>
        )}
        <MoviesCards>
          {movies?.map((el) => {
            return (
              <Link to={`/moviedata/${el.imdbID}`}>
                <ImgMoviesCards
                  src={
                    el.Poster
                      ? el.Poster
                      : "https://www.metro.us/wp-content/uploads/2020/03/Slappy_the_Dummy_3.png"
                  }
                  alt="img"
                />
              </Link>
            );
          })}
        </MoviesCards>
        {!loading && movies && movies.length > 0 && (
          <ButtonsPage>
            <Buttons disabled={page === 1} onClick={() => handlePage(-1)}>
              Previous
            </Buttons>
            <PageNum>{page}</PageNum>
            <Buttons onClick={() => handlePage(1)}>Next</Buttons>
          </ButtonsPage>
        )}
      </ContSearch>
    </>
  );
}

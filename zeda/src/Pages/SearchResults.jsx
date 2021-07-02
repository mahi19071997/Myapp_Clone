import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MoviesCards, ImgMoviesCards ,ButtonsPage,Buttons,PageNum,ContSearch} from "./Dashboard.js";
import { getData } from "../Redux/appRedux/action.js";

export function SearchResults() {
  const movies = useSelector((state) => state.app.movies);
  const loading = useSelector((state) => state.app.isLoading);
  const que = useSelector((state) => state.app.query);
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch()
  // console.log(que);

  const handlePage = (val) => {
    setPage(page + val);
    dispatch(getData(que,page))
  };

  return (
    <>
    <ContSearch>
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
    <ButtonsPage>
      <Buttons disabled={page===1} onClick={() => handlePage(-1)}>Previous</Buttons>
      <PageNum>{page}</PageNum>
      <Buttons  onClick={() => handlePage(1)}>Next</Buttons>
      </ButtonsPage>
      </ContSearch>
    </>

  );
}

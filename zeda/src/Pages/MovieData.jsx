import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleData } from "./../Redux/appRedux/action";
import {
  Moviecard,
  Imdb,
  Title,
  Runtime,
  Plot,
  Mainleads,
  Posterimg,
  Genree,
  OnLoading,
  OnError,
} from "./MovieData";
import { Rating } from "@material-ui/lab";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Spinner } from "./../Components/Navbar/Spinner";

export function MovieData() {
  const { id } = useParams();
  const movie = useSelector((state) => state.app.movie);
  const loading = useSelector((state) => state.app.isLoading);
  const error = useSelector((state) => state.app.isError);
  console.log(id);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getSingleData(id));
  }, []);

  return (
    <>
      
        {loading && (
          <OnLoading>
            <div>Movie Data Loading</div>
            <Spinner />
          </OnLoading>
        )}
        {error && (
          <OnError>
            <div>Error in Loading data </div>
            <Spinner />
          </OnError>
        )}
      {movie && (
        <Moviecard>
          <Posterimg src={movie.Poster} alt="" />
          <div>
            <Title>{movie.Title}</Title>
            <Runtime>
              <div>
                <strong>Year: </strong>
                {movie.Year}
              </div>
              <div>
                <strong>Duration: </strong>
                {movie.Runtime}
              </div>
              <div>
                <strong>Languages: </strong>
                {movie.Language}
              </div>
            </Runtime>
            <Genree>{movie.Genre}</Genree>

            <Plot>{movie.Plot}</Plot>
            <Imdb>
              <Rating
                value={movie.imdbRating}
                max={10}
                emptyIcon={<StarBorderIcon style={{ color: "white" }} />}
                readOnly
              />
            </Imdb>

            <Mainleads>
              <strong>Main Leads:</strong> {movie.Actors}
            </Mainleads>
          </div>
        </Moviecard>
      )}
    </>
  );
}

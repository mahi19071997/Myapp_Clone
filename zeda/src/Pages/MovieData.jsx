import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleData } from "./../Redux/appRedux/action";
import { Moviecard, Title, Runtime, Plot } from "./MovieData";
import { Rating } from "@material-ui/lab";

export function MovieData() {
  const { id } = useParams();
  const movie = useSelector((state) => state.app.movie);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getSingleData(id));
  }, []);
  return (
    <>
      {movie && (
        <Moviecard>
          <div>
            <img src={movie.Poster} alt="" />
          </div>

          <div>
            <Title>{movie.Title}</Title>
            <Runtime>
              {/* <div>{JSON.parse(JSON.stringify(movie?.DVD.split(" ")[2]))}</div> */}
              <div>{movie.Runtime}</div>
              <div>{movie.Genre}</div>
            </Runtime>
            <Plot>{movie.Plot}</Plot>
            <div>IMDB Rating {movie.imdbRating}</div>
            <Rating
              value={movie.imdbRating}
              precision={0.5}
              max={10}
            />
            <div>Main Leads {movie.Actors}</div>
            <div>{movie.Awards}</div>
            <div>{movie.BoxOffice}</div>

            <div>{movie.Director}</div>

            <div>{movie.Language}</div>

            <div>{movie.Production}</div>
          </div>
        </Moviecard>
      )}
    </>
  );
}

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchList, addMovieToWatched, watchlist, watched } = useContext(GlobalContext);

  const storedMovie = watchlist.find((o) => o.id === movie.id);
  const watchedMovie = watched.find(o => o.id === movie.id);

  let disabledButton = storedMovie ? true : watchedMovie ? true : false;
  let disabledWatchedButton = watchedMovie ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.slice(0, 4) : "-"}
          </h4>
        </div>
        <div className="controls">
          <button
            disabled={disabledButton}
            className="btn"
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to Watchlist
          </button>

          <button
            disabled={disabledWatchedButton}
            className="btn"
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

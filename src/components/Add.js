import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault(); 

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=afed14a80be7c0850d79f48c9939e8f7&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              value={query}
              onChange={onChange}
              type="text"
              placeholder="Search a movie"
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <ResultCard movie={movie} key={movie.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { MovieCard } from "components/MovieCard";
import { movies } from "constants/moviesMock";

const App = () => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          path={movie.poster_path}
          title={movie.title}
          voteAverage={movie.vote_average}
          genreId={movie.genre_ids[0]}
        />
      ))}
    </div>
  );
};

export default App;

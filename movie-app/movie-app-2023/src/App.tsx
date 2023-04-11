import React from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import './App.css';
import { movies } from 'constants/moviesMock';

const App = () => {

  return (
    <div className="App">
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
            genreId={movie.genre_ids[0]} />
        );
      })
      }
    </div>
  );
}

export default App;

import React, {useEffect, useState} from 'react'
import { getTopRated } from "../../services";
import {MovieCard} from "../../components/MovieCard";
import {filterBy} from "../../util/movieFilter";
import {HorizontalRadioGroup} from "../../components/HorizontalRadioGroup";

const TopRated = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
  const [value, setValue] = React.useState<number>(0);

  useEffect(  () => {
    if (value === 0) {
      getTopRated()
        .then(response => {
          response.data && setMovies(response.data.results)
        })
        .catch(err => console.log(err));
    } else {
      const filteredMovies = filterBy(value, movies);
      setFilteredMovies(filteredMovies);
    }

  }, [movies, value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue(parseInt(value));
  };

  const moviesToShow = value === 0 ? movies : filteredMovies;


  return (
    <div>
      <h1>TopRated</h1>
      <div>
        <HorizontalRadioGroup value={value} handleChange={handleChange} />
      </div>
      {moviesToShow && moviesToShow.map((movie) => (
        <MovieCard
          movieId={movie.id}
          key={movie.id}
          path={movie.poster_path}
          title={movie.title}
          voteAverage={movie.vote_average}
          genreId={movie.genre_ids[0]}
        />
      ))}
    </div>
  )
}

export default TopRated
import React, {useState, useEffect} from 'react'
import {getNowPlaying} from "../../services";
import {MovieCard} from "../../components/MovieCard";
import {filterBy} from "../../util/movieFilter";
import {HorizontalRadioGroup} from "../../components/HorizontalRadioGroup";
const NowPlaying = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
  const [value, setValue] = React.useState<number>(0);

  useEffect(  () => {
    if (value === 0) {
      getNowPlaying()
        .then(response => {
          setMovies(response.data.results)
        })
        .catch(err => console.log(err));
    } else {
      const filteredMovies = filterBy(value, movies);
      setFilteredMovies(filteredMovies);
    }
  }, [value, movies])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue(parseInt(value));
  };


  const moviesToShow = value === 0 ? movies : filteredMovies;

  return (
    <div>
      <h1>NowPlaying</h1>
      <div>
        <HorizontalRadioGroup value={value} handleChange={handleChange} />
      </div>
      <div>
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
    </div>
  )
}

export default NowPlaying
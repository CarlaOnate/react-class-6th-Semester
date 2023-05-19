import React, {useState, useEffect} from 'react'
import {getNowPlaying} from "../../services";
import {MovieCard} from "../../components/MovieCard";
import {filterBy} from "../../util/movieFilter";
import {HorizontalRadioGroup} from "../../components/HorizontalRadioGroup";
import {MovieType} from "../Home/types";
import {Stack} from "@mui/material";
const NowPlaying = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]);
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
    <Stack alignItems="center">
      <Stack width="80%">
        <h1>Now Playing</h1>
        <div><HorizontalRadioGroup value={value} handleChange={handleChange} /></div>
      </Stack>
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
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
      </Stack>
    </Stack>
  )
}

export default NowPlaying
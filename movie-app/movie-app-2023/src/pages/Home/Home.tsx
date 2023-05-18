import React, {useEffect, useState} from 'react'
import { MovieCard } from "components/MovieCard";
import {getNowPlaying, getPopular, getTopRated} from "../../services";
import _ from 'lodash';
import {filterBy} from "../../util/movieFilter";
import {FilterMovie} from "../../util/types";
import {HorizontalRadioGroup} from "../../components/HorizontalRadioGroup";

const Home = () => {
  const [movies, setMovies] = useState<FilterMovie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
  const [value, setValue] = React.useState<number>(0);
  const fetchMovies = async () => {
    try {
      const popularMovies = await getPopular();
      const nowPlayingMovies = await getNowPlaying();
      const topRatedMovies = await getTopRated();

      const allMovies = [...popularMovies.data.results, ...nowPlayingMovies.data.results, ...topRatedMovies.data.results];

      // Removing duplicates
      const uniqueMovies = _.uniqBy(allMovies, 'id');

      setMovies(uniqueMovies);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (value === 0) {
      fetchMovies();
    } else {
      const filteredMovies = filterBy(value, movies);
      setFilteredMovies(filteredMovies);
    }
  }, [value, movies]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue(parseInt(value));
  };

  const moviesToShow = value === 0 ? movies : filteredMovies;

  return (
    <div>
      <h1>All movies</h1>
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

export default Home
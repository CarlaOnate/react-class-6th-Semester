import React, { useState, useEffect } from "react";
import { MovieCard } from "components/MovieCard";
import { getPopular } from "services";
import {HorizontalRadioGroup} from "../../components/HorizontalRadioGroup";
import {filterBy} from "../../util/movieFilter";

const Popular: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
  const [value, setValue] = React.useState<number>(0);

  const getPopularMovies = async () => {
    await getPopular()
      .then((res) => {
        if (res && res.data) {
          setMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (value === 0) {
      getPopularMovies();
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
      <h1>Popular</h1>
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
  );
};

export default Popular;
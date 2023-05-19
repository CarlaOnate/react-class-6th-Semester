import React, {useEffect, useState} from 'react'
import {Movie} from "./types";
import {getMovieDetail} from "../../services";
import {MovieCard} from "../../components/MovieCard";
import {Stack} from "@mui/material";

const MyFavorites = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getFavoriteMovies = async () => {
      const favoritesString = localStorage.getItem('favorites');
      const favorites = favoritesString ? JSON.parse(favoritesString) : [];
      const moviePromises = favorites.map((id: number) => getMovieDetail(id));
      return await Promise.all(moviePromises);
    }

    getFavoriteMovies().then(moviesList => setMovies(moviesList));
  }, []);

  return (
    <Stack alignItems="center">
      <Stack width="80%">
        <h1>My Favorites</h1>
      </Stack>
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {movies && movies.map(movie => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            path={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
            genreId={movie.genres[0].id}
          />
        ))}
      </Stack>
    </Stack>

  )
}

export default MyFavorites
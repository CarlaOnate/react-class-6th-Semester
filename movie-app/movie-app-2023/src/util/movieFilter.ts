import {MovieType} from "../pages/Home/types";

export const filterBy = (value: number, movies: MovieType[]) => {
  return movies.filter((movie: MovieType) => movie.genre_ids[0] === value);
}
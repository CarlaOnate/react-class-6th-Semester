import {FilterMovie} from "./types";

export const filterBy = (value: number, movies: FilterMovie[]) => {
  return movies.filter((movie: FilterMovie) => movie.genre_ids[0] === value);
}
import {getMovieDetail} from "../services";

export const movieDetailLoader = async (params: {movieId: string}) => {
  return await getMovieDetail(params.movieId);
}
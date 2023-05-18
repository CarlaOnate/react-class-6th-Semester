import httpInstance from "../httpInstance";

export const getMovieDetail = async (movieId: string | number) => {
  const endpoint = `${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;
  const response = await httpInstance.get(endpoint);
  return response.data;
};

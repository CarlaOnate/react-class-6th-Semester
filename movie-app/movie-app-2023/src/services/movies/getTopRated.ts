import httpInstance from "../httpInstance";

export const getTopRated = async () => {
  const endpoint = `top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;
  return await httpInstance.get(endpoint);
};

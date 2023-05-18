import httpInstance from "../httpInstance";

export const getRecommendations = async (movieId: string | number) => {
  const endpoint = `${movieId}/recommendations?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;
  const response = await httpInstance.get(endpoint);
  return response.data && response.data.results;
};

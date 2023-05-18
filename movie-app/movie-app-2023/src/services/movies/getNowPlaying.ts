import httpInstance from "../httpInstance";

export const getNowPlaying = async () => {
  const endpoint = `now_playing?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;
  return await httpInstance.get(endpoint);
};

interface Genre {
  id: number
}

export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  genres: Genre[];
}
export interface FilterMovie {
  path: string;
  title: string;
  voteAverage: number;
  genre_ids: number[];
  movieId: number;
  onClick?: () => void;
}

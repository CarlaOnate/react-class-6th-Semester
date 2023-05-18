export interface MovieCardProp {
  path: string;
  title: string;
  voteAverage: number;
  genreId: number;
  movieId: number;
  onClick?: () => void;
}

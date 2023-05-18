interface GenreType {
  id: number,
  name: string
}

interface ProductionCompanyType {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}


export interface MovieDetailProps {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: {
  id: number,
    name: string,
    poster_path: string,
    backdrop_path: string
},
  genres: GenreType[],
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: ProductionCompanyType[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: { name: string }[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}


export interface Recommendation {
  adult:             boolean;
  backdrop_path:     string;
  id:                number;
  title:             string;
  original_language: OriginalLanguage;
  original_title:    string;
  overview:          string;
  poster_path:       string;
  media_type:        MediaType;
  genre_ids:         number[];
  popularity:        number;
  release_date:      Date;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export enum MediaType {
  Movie = "movie",
}

export enum OriginalLanguage {
  En = "en",
  Fr = "fr",
}
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {getMovieDetail, getRecommendations} from "../../services";
import {MovieDetailProps, Recommendation} from "./types";
import { MovieCardContainer, Poster, Title, Tagline, Metadata, Overview, Label, OfficialWebsite, RecommendationsContainer } from "./styles";
import {SkeletonContainer} from "../../components/MovieCard/styles";
import {Skeleton, Stack, Button} from "@mui/material";
import {Favorite, FavoriteBorder, Star, StarBorder, StarHalf} from "@mui/icons-material";
import {MovieCard} from "../../components/MovieCard";

const MovieDetails: React.FC<{}> = (props: any) => {
  const { movieId } = useParams();
  const [ data, setData ] = useState<MovieDetailProps | null>();
  const [ recommendations, setRecommendations ] = useState<Recommendation[] | null>();
  const [ isFavorite, setIsFavorite ] = useState(false);

  useEffect(() => {
    const favoritesString = localStorage.getItem('favorites');
    const favorites = favoritesString ? JSON.parse(favoritesString) : [];
    movieId && setIsFavorite(favorites.includes(parseInt(movieId)));

    if (movieId) {
      getMovieDetail(movieId)
        .then(data => setData(data))
        .catch(err => console.log(err))
      getRecommendations(movieId)
        .then(data => setRecommendations(data))
        .catch(err => console.log(err));
    }
  }, [movieId])

  const setFavorite = (id: number) => {
    const favoritesString = localStorage.getItem('favorites');
    let favorites = favoritesString ? JSON.parse(favoritesString) : [];
    if (favorites.includes(id)) {
      favorites = favorites.filter((movieId: number) => movieId !== id);
      setIsFavorite(false);
    } else {
      favorites.push(id);
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  const spinner = () => (
    <SkeletonContainer>
      <div>
        <Skeleton variant="rounded" height={"100%"}/>
      </div>
      <div>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="rectangular" height={60} />
        <Skeleton variant="rectangular" height={120} />
        <Skeleton variant="rectangular" height={50} />
        <Skeleton variant="rectangular" height={60} />
        <Skeleton variant="rectangular" height={70} />
        <Skeleton variant="rectangular" height={70} />
      </div>
    </SkeletonContainer>
  )


  const starRating = (rating: number)  => {
    const normalizedRating = rating / 2;
    const fullStars = Math.floor(normalizedRating);
    const halfStars = Math.round(normalizedRating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;
    const color = normalizedRating < 2 ? "error" : normalizedRating < 4 ? "info" : "success";
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full_${i}`} color={color} />);
    }

    for (let i = 0; i < halfStars; i++) {
      stars.push(<StarHalf key={`half_${i}`} color={color} />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarBorder key={`empty_${i}`} color={color} />);
    }

    return <div>{stars}</div>;
  }

  return (
    <div>
      {data && (
        <MovieCardContainer>
          <div className="movie-detail">
            <div className="poster-content">
              <Poster src={`https://www.themoviedb.org/t/p/original/${data.poster_path}`} alt={data.title} />
            </div>
            <div className="movie-content">
              <Title>{data.title}</Title>
              <Tagline>{data.tagline}</Tagline>
              <Overview>{data.overview}</Overview>
              <Metadata>
                <p>
                  <Label>Release Date:</Label> {data.release_date}
                </p>
                <p>
                  <Label>Runtime:</Label> {data.runtime} minutes
                </p>
                <p>
                  <Label>Genres:</Label>{' '}
                  {data.genres.map((genre) => genre.name).join(', ')}
                </p>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Label>Vote Average:</Label>
                    <div>{starRating(data.vote_average)}</div>
                </Stack>
                <p>
                  <Label>Production Companies:</Label>{' '}
                  {data.production_companies
                    .map((company) => company.name)
                    .join(', ')}
                </p>
                <p>
                  <Label>Spoken Languages:</Label>{' '}
                  {data.spoken_languages.map((lang

                  ) => lang.name).join(', ')}
                </p>
              </Metadata>
              <div className="detail-buttons">
                <OfficialWebsite
                  href={data.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Website
                </OfficialWebsite>
                <Button variant="outlined" onClick={() => setFavorite(data.id)}>
                  {isFavorite ? (<><Favorite color="error" />   Favorite</>) : (<><FavoriteBorder color="error"/>   Add to Favorite</>)}
                </Button>
              </div>
            </div>
          </div>
          <RecommendationsContainer>
            <h3>Recommendations</h3>
            {recommendations && (
            <Stack direction="row">
              {recommendations.map(movie => (
                <MovieCard
                  movieId={movie.id}
                  key={movie.id}
                  path={movie.poster_path}
                  title={movie.title}
                  voteAverage={movie.vote_average}
                  genreId={movie.genre_ids[0]}
                />
              ))}
            </Stack>
            )}
          </RecommendationsContainer>
        </MovieCardContainer>
      )}
      {!data && spinner()}
    </div>
  )
}
export default MovieDetails;
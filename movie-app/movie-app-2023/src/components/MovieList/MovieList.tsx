import React from 'react'
import { movies } from "../../constants/moviesMock";
import MovieCard from "../MovieCard/MovieCard";

const MovieList: React.FC<{}> = props => {
    return (
        <div>
            {movies.map((movie) => {
                return (
                    <MovieCard
                        key={movie.id}
                        path={movie.poster_path}
                        title={movie.title}
                        vote_average={movie.vote_average}
                        genreId={movie.genre_ids[0]} />
                );
            })
            }
        </div>
    )
}

export default MovieList;
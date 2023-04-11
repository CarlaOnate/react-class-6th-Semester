// command rafce 
import React from 'react';
// add css
import './MovieCard.scss';
import { IMAGE_SOURCE, movies } from '../../constants/moviesMock';
import genres from 'constants/genres.json';
import { MovieCardProps } from './types';


const MovieCard: React.FC<MovieCardProps> = (
    {
        path,
        title,
        vote_average,
        genreId
    }
) => {
    const poster = IMAGE_SOURCE + path;

    // getGenre function
    const getGenre = (genreId: number) => {
        const key: any = Object.keys(genres.genres).find(
            (genre: any): boolean => genres.genres[genre].id === genreId
        );
        if (key) {
            return genres.genres[key].name;
        }
        return "Not Classified";
    };

    return (
        <div className="show-box">
            <div className="image-container">
                <img className="show-thumb" src={poster} />
            </div>
            <div className="info-show">
                <div className="show-title">
                    <div className="show-label">{getGenre(genreId)}</div>
                    <p className="show-label-title">{title}</p>
                    <p className="show-calification">{vote_average}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
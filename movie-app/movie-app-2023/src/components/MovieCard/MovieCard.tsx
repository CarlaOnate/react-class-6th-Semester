// command rafce 
import React from 'react';
// add css
import { ShowBox, ImageContainer } from "./styles";
import { ShowLabel } from "../ShowLabel";
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
        <ShowBox>
            <ImageContainer className="image-container">
                <img className="show-thumb" src={poster} />
            </ImageContainer>
            <div className="info-show">
                <div className="show-title">
                    <ShowLabel color="red" className="label">{getGenre(genreId)}</ShowLabel>
                    <ShowLabel className="title">{title}</ShowLabel>
                    <ShowLabel className="calification">{vote_average}</ShowLabel>
                </div>
            </div>
        </ShowBox>
    );
};

export default MovieCard;
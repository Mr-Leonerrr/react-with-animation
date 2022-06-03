import React from "react";

const MovieItem = ({ movie }) => {
    return (
        <div className="card animate__animated animate__fadeIn movie-item">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-item-info">
                <h2>{movie.Title}</h2>
                <p>{movie.Genre}</p>
                <p>{movie.Year}</p>
            </div>
        </div>
    );
}

export default MovieItem;
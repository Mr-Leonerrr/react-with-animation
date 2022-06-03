import React from "react";

const MovieItem = ({ movie }) => {
    return (
        <div className="card animate__animated animate__fadeIn movie-item">
            <img src={movie.image} alt={movie.title} />
            <div className="movie-item-info">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p>{movie.genres}</p>
                <p>{movie.year}</p>
            </div>
        </div>
    );
}

export default MovieItem;
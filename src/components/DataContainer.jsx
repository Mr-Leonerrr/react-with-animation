import React from 'react';
import { useGetMovies } from '../hooks/useGetMovies';
import MovieItem from './MovieItem';


const DataContainer = ({ search }) => {
    const { movies, state } = useGetMovies(search);

    return (
        <>
            <h3>{search}</h3>
            {state.loading && <p className='animate__animated animate__flash'>Loading...</p>}

            <div className="card-grid animate__animated animate__bounceInUp data-container">
                {
                    movies.map(movie => (
                        <MovieItem key={movie.imdbID} {...movie} />
                    ))
                }
            </div>
        </>
    );
}

export default DataContainer;
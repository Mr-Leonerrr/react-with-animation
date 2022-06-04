import React from 'react';
import { useGetMovies } from '../hooks/useGetMovies';
import MovieItem from './MovieItem';


const DataContainer = ({ search }) => {
    const [movie, state] = useGetMovies(search);

    return (
        <>
            {state.loading && <p className='animate__animated animate__flash'>Loading...</p>}
            {state.error && <p className='animate__animated animate__wobble'>{state.error}</p>}

            <div className="max-w-sm w-full lg:max-w-full animate__animated animate__jackInTheBox container">
                {
                    <MovieItem movie={movie} />
                }
            </div>
        </>
    );
}

export default DataContainer;
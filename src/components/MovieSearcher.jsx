import React, { useState } from 'react';
import ApplySearch from './ApplySearch';
import DataContainer from './DataContainer';


const MovieSearcher = ({ movie = 'Iron Man' }) => {
    const [search, setSearch] = useState(movie);

    return (
        <>
            <div>Movie Searcher</div>
            <ApplySearch searchValue={setSearch} />
            <hr />
            <DataContainer key={search} search={search} />
        </>
    );
};

export default MovieSearcher;

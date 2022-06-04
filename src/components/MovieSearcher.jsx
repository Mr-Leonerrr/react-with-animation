import React, { useState } from 'react';
import ApplySearch from './ApplySearch';
import DataContainer from './DataContainer';
import RecentSearches from './RecentSearches';


const MovieSearcher = ({ movie = '' }) => {
    const [search, setSearch] = useState(movie);

    return (
        <>
            <div>Movie Searcher</div>
            <ApplySearch searchValue={setSearch} />
            <hr />
            <DataContainer key={search} search={search} />
            <hr />
            <RecentSearches />
        </>
    );
};

export default MovieSearcher;

import { useState } from 'react';

const ApplySearch = (movies, search) => {
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [searchValue, setSearchValue] = useState(search);

    if (searchValue === '') {
        setFilteredMovies(movies);
    } else {
        setFilteredMovies(
            movies.filter(movie => {
                return movie.title.toLowerCase().includes(searchValue.toLowerCase())
            })
        );
    }
    return [filteredMovies, setSearchValue];
}

export default ApplySearch;
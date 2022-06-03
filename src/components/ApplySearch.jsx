import { useState } from 'react';


const ApplySearch = ({ searchValue }) => {
    const [searchState, setSearchState] = useState(searchValue);

    const handleChange = (e) => {
        setSearchState(e.target.value);
    };

    const search = (e) => {
        e.preventDefault();

        if (searchState.trim().length > 0) {
            searchValue(values => [...values, searchState]);
            setSearchState('');
        }
    }


    return (
        <>
            <h3>Movie Searcher</h3>
            <form onSubmit={search}>
                <input type="text" value={searchState} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>

            <p>{searchState}</p>
        </>
    );
}

export default ApplySearch;
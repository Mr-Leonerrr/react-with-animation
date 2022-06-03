import { useState } from 'react';

const ApplySearch = ({ searchValue }) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (search.trim().length > 0) {
            searchValue(search);
            setSearch('');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={handleChange} />
                <button>Search</button>
            </form>
        </>
    );
};

export default ApplySearch;
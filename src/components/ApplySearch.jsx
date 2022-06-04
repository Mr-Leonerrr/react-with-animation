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
            <form className="flex items-center" onSubmit={handleSubmit}>
                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    placeholder="Search for a movie"
                    value={search}
                    onChange={handleChange}
                />
                <button type="button"
                    className="ml-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Search
                </button>
            </form>
        </>
    );
};

export default ApplySearch;
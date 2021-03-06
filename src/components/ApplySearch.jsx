import { useState } from 'react';
import { firebase } from "../firebase";

const ApplySearch = ({ searchValue }) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (search.trim().length > 0) {
            searchValue(search);
            try {
                const db = firebase.firestore();

                db.collection('searches').add({
                    search,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });

            } catch (error) {
                console.log(error);
            }
            setSearch('');
        }
    };

    return (
        <>
            <form className="flex items-center animate__animated animate__bounceInRight" onSubmit={handleSubmit}>
                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    placeholder="Search for a movie or TV show"
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
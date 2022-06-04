import { useEffect, useState } from 'react';
import { getRecentSearches } from '../helpers/getRecentSearches';

export const useGetRecentSearches = () => {
    const [recentSearches, setRecentSearches] = useState([]);

    useEffect(() => {
        getRecentSearches().then(searches => {
            setRecentSearches(searches);
        });
    }, [recentSearches]);

    return recentSearches;
}
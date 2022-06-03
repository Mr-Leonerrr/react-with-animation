import { useEffect, useState } from "react";
import { getMovies } from "../helpers/getMovies";

export const useGetMovies = (searchValue) => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState(searchValue);

    const [state, setState] = useState({
        loading: true,
        error: false
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getMovies(search);
                setMovies(result);
                setState({
                    loading: false,
                    error: false
                });
            } catch (error) {
                setState({
                    loading: false,
                    error: true
                });
            }
        };
        fetchData();
    }, [search]);

    return [movies, setSearch, state];
}
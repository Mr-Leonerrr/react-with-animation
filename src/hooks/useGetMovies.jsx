import { useEffect, useState } from "react";
import { getMovies } from "../helpers/getMovies";


export const useGetMovies = (search) => {
    const [movies, setMovies] = useState([]);
    const [state, setState] = useState({ loading: true, error: null });

    useEffect(() => {
        getMovies(search).then(data => {
            setMovies(data);
            setState({ loading: false });
        }).catch(error => {
            console.log(error);
            setState({ error: error.message, loading: false });
        });
    }, [search]);

    return [movies, state];
}
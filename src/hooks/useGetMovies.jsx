import { useEffect, useState } from "react";
import { getMovies } from "../helpers/getMovies";
import { firebase } from "../firebase";


export const useGetMovies = (search) => {
    const [movies, setMovies] = useState([]);
    const [state, setState] = useState({ loading: true, error: null });

    useEffect(() => {
        getMovies(search).then(data => {
            setMovies(data);
            const db = firebase.firestore();

            db.collection('searchResults').add({
                data,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            setTimeout(() => {
                setState({ loading: false });
            }, 1500);
        }).catch(error => {
            console.log(error);
            setState({ error: error.message, loading: false });
        });
    }, [search]);

    return [movies, state];
}
const API_URL = 'http://www.omdbapi.com/';
const API_KEY = 'edc19b18';

export const getMovies = async (searchValue) => {
    const response = await fetch(`${API_URL}?t=${searchValue}&apikey=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    return data;
}
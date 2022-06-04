const API_URL = 'http://www.omdbapi.com/';
const API_KEY = 'edc19b18';

export const getMovies = async (searchValue) => {
    const url = `${API_URL}?t=${searchValue}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data.Response === 'False') {
        throw new Error(data.Error);
    }

    const movieData = {
        id: data.imdbID,
        title: data.Title,
        year: data.Year,
        image: data.Poster,
        description: data.Plot,
        genres: data.Genre.split(', '),
        rating: data.imdbRating,
        releaseDate: data.Released,
        rated: data.Rated,
    };
    return movieData;
}
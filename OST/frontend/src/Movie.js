import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class MovieService{

    constructor(){}

    async getAllMovies() {
        const url = `${API_URL}/api/movie/`;
        let resp = await axios.get(url);
        return resp;
    }

    getMovieByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }

    getMovie(pk) {
        const url = `${API_URL}/api/movie/${pk}`;
        return axios.get(url).then(response => response.data);
    }

    deleteMovie(movie){
        const url = `${API_URL}/api/movie/${movie.pk}/`;
        return axios.delete(url);
    }

    createMovie(movie){
        const url = `${API_URL}/api/movie/`;
        return axios.post(url,movie);
    }

    updateMovie(movie){
        const url = `${API_URL}/api/movie/${movie.pk}/`;
        return axios.put(url,movie);
    }

}
import db from '../../db';
import { nanoid } from 'nanoid';
import {Movie, NewMovie} from './interfaces';

const moviesService = {
    getAllMovies: (id: string) => {
    const { movies } = db;
    const usersMovies = movies.filter((movie) => movie.author === id);
    return usersMovies;
    },
    getMovieById: (id: string): Movie | undefined => {
        const movie: Movie | undefined = db.movies.find((element: Movie) => element.id === id);
        return movie;
    },
    createMovie: (newMovie: NewMovie): string => {
        const{ title, description, author} = newMovie;
        const id = nanoid();
        const movie: Movie = {
            id,
            title,
            description,
            author
        };
    db.movies.push(movie);
    return id;
    },

}


export default moviesService;
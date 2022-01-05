import { FieldPacket, ResultSetHeader } from 'mysql2';
import pool from '../../database';
import {IMovie, INewMovie} from './interfaces';


const moviesService = {
    getAllMovies: async (): Promise<IMovie[] | false> => {
        try {
            const [movies]: [IMovie[], FieldPacket[]] = await pool.query('SELECT M.id, M.title, M.content, M.dateCreated, M.dateUpdated, U.email FROM movies M INNER JOIN users U on M.usersId = U.id WHERE m.dateDeletated IS NULL;');
            return movies;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getMovieById: async (id: string): Promise<IMovie | false> => {
        try {
            const [movies]: [IMovie[], FieldPacket[]] = await pool.query('SELECT M.id, M.title, M.content, M.dateCreated, M.dateUpdated, U.email FROM movies M INNER JOIN users U on M.usersId = U.id WHERE M.id = ? AND m.dateDeletated IS NULL;', [id]);
            return movies[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    createMovie: async (newMovie: INewMovie): Promise<number | false>=> {
        try {
            const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query('INSERT INTO movies SET ?;', [newMovie]);
            return result.insertId;
        } 
        catch (error) {
            console.log(error);
            return false;
        }
    },
}


export default moviesService;
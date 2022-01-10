import { FieldPacket, ResultSetHeader } from 'mysql2';
import pool from '../../database';
import {IGenre, INewGenre} from './interfaces';


const genresService = {
    getAllGenres: async (): Promise<IGenre[] | false> => {
        try {
            const [genres]: [IGenre[], FieldPacket[]] = await pool.query('SELECT G.id, G.title, G.description, G.dateCreated, G.dateUpdated, U.email FROM genres M INNER JOIN users U on G.usersId = U.id WHERE G.dateDeleted IS NULL;');
            return genres;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getGenreById: async (id: string): Promise<IGenre | false> => {
        try {
            const [genres]: [IGenre[], FieldPacket[]] = await pool.query('SELECT G.id, G.title, G.description, G.dateCreated, G.dateUpdated, U.email FROM genres M INNER JOIN users U on G.usersId = U.id WHERE G.id = ? AND G.dateDeleted IS NULL;', [id]);
            return genres[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    createGenre: async (newGenre: INewGenre): Promise<number | false>=> {
        try {
            const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query('INSERT INTO genres SET ?;', [newGenre]);
            return result.insertId;
        } 
        catch (error) {
            console.log(error);
            return false;
        }
    },
}


export default genresService;
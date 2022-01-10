import { FieldPacket, ResultSetHeader } from 'mysql2';
import pool from '../../database';
import {IDirector, INewDirector} from './interfaces';


const directorsService = {
    getAllDirectors: async (): Promise<IDirector[] | false> => {
        try {
            const [directors]: [IDirector[], FieldPacket[]] = await pool.query('SELECT D.id, D.title, D.description, D.dateCreated, D.dateUpdated, U.email FROM directors M INNER JOIN users U on D.usersId = U.id WHERE D.dateDeleted IS NULL;');
            return directors;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getDirectorById: async (id: string): Promise<IDirector | false> => {
        try {
            const [directors]: [IDirector[], FieldPacket[]] = await pool.query('SELECT D.id, D.title, D.description, D.dateCreated, D.dateUpdated, U.email FROM directors M INNER JOIN users U on D.usersId = U.id WHERE D.id = ? AND D.dateDeleted IS NULL;', [id]);
            return directors[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    createDirector: async (newDirector: INewDirector): Promise<number | false>=> {
        try {
            const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query('INSERT INTO directors SET ?;', [newDirector]);
            return result.insertId;
        } 
        catch (error) {
            console.log(error);
            return false;
        }
    },
}


export default directorsService;
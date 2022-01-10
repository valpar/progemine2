import { RowDataPacket } from 'mysql2';

interface INewMovie {
    title: string;
    description: string;
    director: string;
    usersId: number;
}

interface IMovie extends INewMovie, RowDataPacket {
    id: number;
}

export {IMovie, INewMovie};
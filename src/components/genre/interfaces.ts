import { RowDataPacket } from 'mysql2';

interface INewGenre {
    name: string;
}

interface IGenre extends INewGenre, RowDataPacket {
    id: number;
}

export {IGenre, INewGenre};
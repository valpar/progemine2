import { RowDataPacket } from 'mysql2';

interface INewDirector {
    name: string;
}

interface IDirector extends INewDirector, RowDataPacket {
    id: number;
}

export {IDirector, INewDirector};
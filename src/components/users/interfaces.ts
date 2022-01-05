import { RowDataPacket } from 'mysql2';

interface INewUser {
    email: string;
    password: string;
}

interface IUser extends INewUser, RowDataPacket{
    id: number;
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date | null;
}

export {INewUser, IUser};
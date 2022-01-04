import db from '../../db';
import { nanoid } from 'nanoid';
import { NewUser, User } from './interfaces';
import hashService from '../general/services/hashService';

const usersService = {
    createUser: async (newUser: NewUser):Promise<string> => {
        const id = nanoid();
        const hashedPassword = await hashService.hash(newUser.password);
        const user: User = {
            id,
            ...newUser,
            password: hashedPassword,
        };
        db.users.push(user);
        return id;
    },
    getUsers: (): User[] => {
        const { users } = db;
        return users;
    },
    getUserByEmail: (email: string):User | undefined => {
        const user = db.users.find((element) => element.email === email);
        return user;
    },
};

export default usersService;
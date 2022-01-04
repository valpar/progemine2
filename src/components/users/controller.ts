import { Request, Response} from 'express';
import hashService from '../general/services/hashService';
import { NewUser } from './interfaces';
import usersService from './service';
  
  //create movie controller
  const createUser = async(req: Request, res: Response) => {
    const { email, password} = req.body;
    const newUser: NewUser = {
        email,
        password
    };
    const id = await usersService.createUser(newUser);
     return res.status(200).json({
        id,
    });
};

const getUsers = (req: Request, res: Response) => {
    const users = usersService.getUsers();
     return res.status(200).json({
        users,
    });
};

const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const user = usersService.getUserByEmail(email);
    if(!user){
        return res.status(404).json({
            error: 'User not found.'
        });
    }
    const match = await hashService.compare(password, user.password);
    if(!match){
        return res.status(401).json({
            error: 'Check password.'
        });
    }
    return res.status(200).json({
        token: 'token',
    });
};

export { createUser, getUsers, login};
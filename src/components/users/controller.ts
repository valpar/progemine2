import { Request, Response} from 'express';
import hashService from '../general/services/hashService';
import jwtService from '../general/services/jwtService';
import { INewUser } from './interfaces';
import usersService from './service';
  
  //create movie controller
  const createUser = async(req: Request, res: Response) => {
    const { email, password} = req.body;
    const newUser: INewUser = {
        email,
        password
    };
    const id = await usersService.createUser(newUser);
    if(!id){
        return res.status(500).json({
            error: 'Something went wrong',
        });
    }
     return res.status(200).json({
        id,
    });
};

const getUsers = async (req: Request, res: Response) => {
    const users = await usersService.getUsers();
     return res.status(200).json({
        users,
    });
};

const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const user = await usersService.getUserByEmail(email);
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
    const token = await jwtService.sign(user);
    return res.status(200).json({
        token,
    });
};

export { createUser, getUsers, login};
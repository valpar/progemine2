import jwt from 'jsonwebtoken';
import { IUser } from '../../users/interfaces';
import config from '../../../config';

const jwtService = {
    sign: async (user: IUser):Promise<string> => {
        const payload = {
            id: user.id,
        };
    const token = await jwt.sign(payload, config.jwtSecret, { expiresIn: '1h'});
    return token;
    },
    verify: async (token: string) =>{
        try {
            const payload = await jwt.verify(token, config.jwtSecret);
            return payload;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
};

export default jwtService;
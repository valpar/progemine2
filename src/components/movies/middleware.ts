import { Request, Response, NextFunction } from 'express';

const createPostValidator = (req: Request, res: Response, next: NextFunction) =>{
    const { title, description, author } = req.body;
    if(!title){
        return res.status(400).json({
            message: `No movie title provided.`,
          });
    }
    if(!description){
        return res.status(400).json({
            message: `No movie description provided.`,
          });
    }
    if(!author){
        return res.status(400).json({
            message: `No movie review author provided.`,
          });
    }
    return next();
};

const titleToUppercase = (req: Request, res: Response, next: NextFunction) =>{
    const { title } = req.body;
    const upperCaseTitle = title.toUpperCase();
    req.body.title = upperCaseTitle;
    return next();
};

export {titleToUppercase, createPostValidator};
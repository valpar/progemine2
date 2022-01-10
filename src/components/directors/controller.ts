import { Request, Response} from 'express';
import directorssService from './service';
import { INewDirector} from './interfaces';

//get directors controller
const getAllDirectors = async (req: Request, res: Response) => {
  //const { id } = res.locals.user;
    const directors = await directorssService.getAllDirectors();
      return res.status(200).json({
        directors,
      });
  };
  
  //get director by id controller
  const getDirectorById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const director = await directorssService.getDirectorById(id);
    if(!director){
      return res.status(400).json({
        message: `No director exists with id: ${id}`,
      });
    }
      return res.status(200).json({
        director,
      });
  };
  
  //create director controller
  const createDirector = async (req: Request, res: Response) => {
    const usersId = res.locals.user.id;
    const { name } = req.body;
    const newDirector: INewDirector = {
        name,
    }
    const id = await directorssService.createDirector(newDirector);
     return res.status(201).json({
        id,
      });
  };

  export {getAllDirectors, getDirectorById, createDirector};
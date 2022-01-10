import { Request, Response} from 'express';
import genresService from './service';
import { INewGenre} from './interfaces';

//get genres controller
const getAllGenres = async (req: Request, res: Response) => {
  //const { id } = res.locals.user;
    const genre = await genresService.getAllGenres();
      return res.status(200).json({
        genre,
      });
  };
  
  //get genre by id controller
  const getGenreById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const genre = await genresService.getGenreById(id);
    if(!genre){
      return res.status(400).json({
        message: `No genre exists with id: ${id}`,
      });
    }
      return res.status(200).json({
        genre,
      });
  };
  
  //create genre controller
  const createGenre = async (req: Request, res: Response) => {
    const { name } = req.body;
    const newGenre: INewGenre = {
        name,
    }
    const id = await genresService.createGenre(newGenre);
     return res.status(201).json({
        id,
      });
  };

  export {getAllGenres, getGenreById, createGenre};
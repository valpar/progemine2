import { Request, Response} from 'express';
import moviesService from './service';
import { INewMovie} from './interfaces';

//get movies controller
const getAllMovies = async (req: Request, res: Response) => {
  const { id } = res.locals.user;
    const movies = await moviesService.getAllMovies();
      return res.status(200).json({
        movies,
      });
  };
  
  //get movie by id controller
  const getMovieById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const movie = await moviesService.getMovieById(id);
    if(!movie){
      return res.status(400).json({
        message: `No movie exists with id: ${id}`,
      });
    }
      return res.status(200).json({
        movie,
      });
  };
  
  //create movie controller
  const createMovie = async (req: Request, res: Response) => {
    const usersId = res.locals.user.Id
    const { title, description} = req.body;
    const newMovie: INewMovie = {
        title,
        description,
        usersId
    }
    const id = await moviesService.createMovie(newMovie);
     return res.status(200).json({
        id,
      });
  };

  export {getAllMovies, getMovieById, createMovie};
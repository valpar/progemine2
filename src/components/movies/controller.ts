import { Request, Response} from 'express';
import moviesService from './service';
import {Movie, NewMovie} from './interfaces';

//get movies controller
const getAllMovies = (req: Request, res: Response) => {
    const movies: Movie[] = moviesService.getAllMovies();
      return res.status(200).json({
        movies,
      });
  };
  
  //get movie by id controller
  const getMovieById = (req: Request, res: Response) => {
    const {id} = req.params;
    const movie = moviesService.getMovieById(id);
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
  const createMovie = (req: Request, res: Response) => {
    const { title, description, author} = req.body;
    const newMovie: NewMovie = {
        title,
        description,
        author
    }
    const id: string = moviesService.createMovie(newMovie);
     return res.status(200).json({
        id,
      });
  };

  export {getAllMovies, getMovieById, createMovie};
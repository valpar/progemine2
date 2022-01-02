import express, { Request, Response, Express } from 'express';
import { nanoid } from 'nanoid';
const app: Express = express();

const port: number = 3000;

interface Movie {
    id: string;
    title: string;
    description: string;
    author: string;
}

interface Db {
  movies: Movie[];
}

const db: Db = {
    movies:[
        {
            id: 'qwert',
            title: 'Matrix',
            description: 'Super lahe film.',
            author: 'Valmar'
        },
        {
            id: 'asdf',
            title: 'Avengers',
            description: 'tõsiselt vinge film.',
            author: 'Karl'
        },
    ],
};

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Alive',
  });
});

app.get('/movies', (req: Request, res: Response) => {
  const {movies} = db;
    return res.status(200).json({
      movies,
    });
});

app.get('/movies/:id', (req: Request, res: Response) => {
  const {id} = req.params;
  const movie = db.movies.find((element: Movie) => element.id === id);
  if(!movie){
    return res.status(400).json({
      message: `No movie exists with id: ${id}`,
    });
  }
    return res.status(200).json({
      movie,
    });
});

app.post('/movies', (req: Request, res: Response) => {
  const { title, description, author} = req.body;
  const id = nanoid();
  const movie: Movie = {
    id,
    title,
    description,
    author
  };
  db.movies.push(movie);
   return res.status(200).json({
      id: movie.id,
    });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on port ${port}`);
});
import {Movie} from './components/movies/interfaces';

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

export default db;
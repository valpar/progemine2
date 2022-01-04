import { Movie } from './components/movies/interfaces';
import { User } from './components/users/interfaces';

interface Db {
    movies: Movie[];
    users: User[];
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
    users: [
        {
            id: "yBWUw2Xl8wmQ6rRPzF79f",
            email: "mari@maasikas.com",
            password: "sokike"
        },
        {
            id: "fsdfwerwterw4342fswq123",
            email: "karl@fazer.ee",
            password: "magus"
        },
        {
            id: "DGvMyLGqfFb8aFEC9GFu4",
            email: "karl@marx.com",
            password: "$2b$10$kIai5NexH61XiGVpFlRqj.tf1.laCXcvNW6sNAmCXxfgMivsb3qc." //saabas
        },
    ],
};

export default db;
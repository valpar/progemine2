

interface NewMovie {
    title: string;
    description: string;
    author: string;
}

interface Movie extends NewMovie {
    id: string;
}

export {Movie, NewMovie};
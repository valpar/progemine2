interface NewUser {
    email: string;
    password: string;
}

interface User extends NewUser{
    id: string;
}

export {NewUser, User};
export type TUserDAL = {
    email: string;
    name: string;
    picture: string;
};

export class UserDAL implements TUserDAL {
    email: string;
    name: string;
    picture: string;

    constructor(user: TUserDAL) {
        this.email = user.email;
        this.name = user.name;
        this.picture = user.picture;
    }
}

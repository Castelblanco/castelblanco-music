export type TUserDOM = {
    name: string;
    email: string;
    picture: string;
};

export class UserDOM implements TUserDOM {
    name: string;
    email: string;
    picture: string;

    constructor(user: TUserDOM) {
        this.name = user.name;
        this.email = user.email;
        this.picture = user.picture;
    }
}

export type TProfileDOM = TUserDOM & {
    accessToken: string;
    refreshToken: string;
};

export class ProfileDOM implements TProfileDOM {
    name: string;
    email: string;
    picture: string;
    accessToken: string;
    refreshToken: string;

    constructor(user: TProfileDOM) {
        this.name = user.name;
        this.email = user.email;
        this.picture = user.picture;
        this.accessToken = user.accessToken;
        this.refreshToken = user.refreshToken;
    }
}

export const INITIAL_STATE_PROFILE: TProfileDOM = {
    email: '',
    name: '',
    picture: '',
    accessToken: '',
    refreshToken: '',
};

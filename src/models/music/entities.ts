export type TMusicDOM = {
    id: string;
    name: string;
    duration: number;
    url: string;
};

export class MusicDOM implements TMusicDOM {
    id: string;
    name: string;
    duration: number;
    url: string;

    constructor(music: TMusicDOM) {
        this.id = music.id;
        this.name = music.name;
        this.duration = music.duration;
        this.url = music.url;
    }
}

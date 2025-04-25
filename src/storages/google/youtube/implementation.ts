import axios from 'axios';

const http = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/playlists',
});

export const getPlayList = async () => {
    try {
        console.log('youtube execute');

        const { data } = await http.get('/', {
            params: {
                key: 'AIzaSyBATkuKLUx1G9eJM2FalTd-l6z0uBIag80',
                part: 'snippet,contentDetails',
                maxResults: 25,
            },
        });

        console.log({ data });
    } catch (e) {
        console.log({ e });
    }
};
